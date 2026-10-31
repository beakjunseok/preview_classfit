import { DEMO_STUDENTS } from '../data/initialData';
import { StudentProfile } from '../types';

// 체험 사이트는 로그인과 Gemini 없이 동작하므로 이 경로들은 브라우저에서 처리한다.
export const GEMINI_REASON =
  '체험 사이트에서는 Gemini AI를 뺐습니다. 로그인 없이 누구나 쓰는 사이트라 Gemini를 호출할 때마다 개발자의 크레딧이 나가기 때문입니다. ' +
  '실제 서비스에서는 Gemini가 질문에 답하고 수행평가 PDF를 읽어 등록 양식을 자동으로 채웁니다.';

const OUT_OF_SCOPE_REPLY = '죄송합니다. 수행평가와 관련된 질문에만 답할 수 있습니다.';
const PROFANITY_REPLY = '바른 말로 다시 질문해 주세요.';
const PROFANITY_PATTERN = /씨발|시발|씨빨|시빨|ㅅㅂ|ㅆㅂ|병신|ㅂㅅ|븅신|좆|존나|ㅈㄴ|개새|개색|씹|지랄|ㅈㄹ|닥쳐|꺼져|fuck|shit|bitch/i;
const SESSION_KEY = 'classfit_session_v1';
const PROFILES_KEY = 'classfit_demo_profiles';

function jsonResponse(status: number, body: unknown): Response {
  return new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });
}

function readProfiles(): Record<string, StudentProfile> {
  try {
    return JSON.parse(localStorage.getItem(PROFILES_KEY) || '{}');
  } catch {
    return {};
  }
}

export function getDemoStudents(): StudentProfile[] {
  const saved = readProfiles();
  return DEMO_STUDENTS.map((student) => saved[student.id] || student);
}

function handleAuth(body: Record<string, unknown>): Response {
  if (body.action === 'list-students') return jsonResponse(200, { students: getDemoStudents() });
  if (body.action === 'save-subjects') return jsonResponse(200, { subjects: body.subjects });
  if (body.action === 'save-profile') {
    const profile = body.profile as StudentProfile;
    try {
      localStorage.setItem(PROFILES_KEY, JSON.stringify({ ...readProfiles(), [profile.id]: profile }));
    } catch {
      // 저장 실패는 체험을 막지 않는다.
    }
    return jsonResponse(200, { ok: true });
  }

  // 'me': 저장된 체험 세션을 그대로 돌려준다.
  const session = JSON.parse(localStorage.getItem(SESSION_KEY) || 'null');
  if (!session) return jsonResponse(401, { error: '다시 로그인해 주세요.' });
  const profile = session.profile ? readProfiles()[session.id] || session.profile : null;
  return jsonResponse(200, { ...session, profile });
}

function getAssessmentLines(context: string): string[] {
  return context.split('\n').filter((line) => line.startsWith('- id='));
}

function field(line: string, index: number): string {
  return (line.split(' | ')[index] || '').trim();
}

function buildAgentReply(text: string, context: string) {
  const compact = text.replace(/[^0-9a-zA-Zㄱ-ㅎ가-힣]/g, '');
  const lines = getAssessmentLines(context).filter((line) => line.includes('| 미완료'));
  const upcoming = lines.filter((line) => field(line, 2).startsWith('D-'));

  if (PROFANITY_PATTERN.test(compact.replace(/시발점/g, ''))) return { reply: PROFANITY_REPLY, actions: [] };

  if (/gemini|제미나이|제미니|크레딧|왜|요약|pdf|ai|인공지능|비서/i.test(compact)) {
    return { reply: GEMINI_REASON, actions: [] };
  }
  if (/준비물|챙겨|챙길/.test(compact)) {
    const next = upcoming[0];
    return {
      reply: next
        ? `${field(next, 3)}: ${field(next, 5).replace('준비물 ', '준비물은 ')}입니다.`
        : '챙길 준비물이 없습니다.',
      actions: [],
    };
  }
  if (/시간표/.test(compact)) {
    return { reply: '', actions: [{ name: 'open_screen', args: { screen: 'timetable' } }] };
  }
  if (/급한|가까운|다음|언제|수행|평가/.test(compact)) {
    const next = upcoming[0];
    return {
      reply: next
        ? `가장 가까운 수행평가는 ${field(next, 3)}입니다. ${field(next, 1)}, ${field(next, 2)}, ${field(next, 4)}`
        : '예정된 수행평가가 없습니다.',
      actions: [],
    };
  }
  return { reply: OUT_OF_SCOPE_REPLY, actions: [] };
}

const nativeFetch = window.fetch.bind(window);

window.fetch = async (input, init) => {
  const url = typeof input === 'string' ? input : input instanceof URL ? input.href : input.url;
  const body = typeof init?.body === 'string' ? JSON.parse(init.body) : {};

  if (url === '/api/auth') return handleAuth(body);
  if (url === '/api/analyze-document') return jsonResponse(503, { error: GEMINI_REASON });
  if (url === '/api/agent') {
    const messages = body.messages as Array<{ text: string }>;
    return jsonResponse(200, buildAgentReply(messages[messages.length - 1].text, body.context));
  }
  return nativeFetch(input, init);
};
