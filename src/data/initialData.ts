import { Assessment, AssessmentSlot, StudentProfile, WeeklyBlockSlot } from '../types';

// 3학년 주간 블록 고정 교시표 (E, F, G, H 블록)
export const DEFAULT_WEEKLY_SCHEDULE: WeeklyBlockSlot[] = [
  // 월요일
  { day: 'MON', period: 1, block: 'COMMON', label: '공통 독서' },
  { day: 'MON', period: 2, block: 'E', label: 'E블록 선택' },
  { day: 'MON', period: 3, block: 'COMMON', label: '공통 수학' },
  { day: 'MON', period: 4, block: 'COMMON', label: '공통 영어' },
  { day: 'MON', period: 5, block: 'G', label: 'G블록 선택' },
  { day: 'MON', period: 6, block: 'COMMON', label: '진로 활동' },
  { day: 'MON', period: 7, block: 'COMMON', label: '학급 자치' },

  // 화요일
  { day: 'TUE', period: 1, block: 'COMMON', label: '공통 체육' },
  { day: 'TUE', period: 2, block: 'COMMON', label: '공통 독서' },
  { day: 'TUE', period: 3, block: 'F', label: 'F블록 선택' },
  { day: 'TUE', period: 4, block: 'COMMON', label: '공통 수학' },
  { day: 'TUE', period: 5, block: 'COMMON', label: '공통 영어' },
  { day: 'TUE', period: 6, block: 'H', label: 'H블록 선택' },
  { day: 'TUE', period: 7, block: 'COMMON', label: '자율 학습' },

  // 수요일
  { day: 'WED', period: 1, block: 'E', label: 'E블록 선택' },
  { day: 'WED', period: 2, block: 'COMMON', label: '공통 수학' },
  { day: 'WED', period: 3, block: 'COMMON', label: '공통 독서' },
  { day: 'WED', period: 4, block: 'G', label: 'G블록 선택' },
  { day: 'WED', period: 5, block: 'COMMON', label: '창체 동아리' },
  { day: 'WED', period: 6, block: 'COMMON', label: '창체 동아리' },
  { day: 'WED', period: 7, block: 'COMMON', label: '동아리 평가' },

  // 목요일
  { day: 'THU', period: 1, block: 'COMMON', label: '공통 영어' },
  { day: 'THU', period: 2, block: 'F', label: 'F블록 선택' },
  { day: 'THU', period: 3, block: 'COMMON', label: '공통 체육' },
  { day: 'THU', period: 4, block: 'COMMON', label: '공통 수학' },
  { day: 'THU', period: 5, block: 'H', label: 'H블록 선택' },
  { day: 'THU', period: 6, block: 'G', label: 'G블록 선택' },
  { day: 'THU', period: 7, block: 'COMMON', label: '상담/자율' },

  // 금요일
  { day: 'FRI', period: 1, block: 'COMMON', label: '공통 독서' },
  { day: 'FRI', period: 2, block: 'COMMON', label: '공통 영어' },
  { day: 'FRI', period: 3, block: 'E', label: 'E블록 선택' },
  { day: 'FRI', period: 4, block: 'COMMON', label: '공통 수학' },
  { day: 'FRI', period: 5, block: 'COMMON', label: '진로 특강' },
  { day: 'FRI', period: 6, block: 'F', label: 'F블록 선택' },
  { day: 'FRI', period: 7, block: 'H', label: 'H블록 선택' },
];

// 1·2학년 주간 블록 고정 교시표 (A, B, C, D 블록)
export const GRADE_1_2_WEEKLY_SCHEDULE: WeeklyBlockSlot[] = [
  // 월요일
  { day: 'MON', period: 1, block: 'COMMON', label: '공통 국어' },
  { day: 'MON', period: 2, block: 'A', label: 'A블록 선택' },
  { day: 'MON', period: 3, block: 'COMMON', label: '공통 수학' },
  { day: 'MON', period: 4, block: 'COMMON', label: '공통 영어' },
  { day: 'MON', period: 5, block: 'C', label: 'C블록 선택' },
  { day: 'MON', period: 6, block: 'COMMON', label: '진로 활동' },
  { day: 'MON', period: 7, block: 'COMMON', label: '학급 자치' },

  // 화요일
  { day: 'TUE', period: 1, block: 'COMMON', label: '공통 체육' },
  { day: 'TUE', period: 2, block: 'COMMON', label: '공통 한국사' },
  { day: 'TUE', period: 3, block: 'B', label: 'B블록 선택' },
  { day: 'TUE', period: 4, block: 'COMMON', label: '공통 수학' },
  { day: 'TUE', period: 5, block: 'COMMON', label: '공통 영어' },
  { day: 'TUE', period: 6, block: 'D', label: 'D블록 선택' },
  { day: 'TUE', period: 7, block: 'COMMON', label: '자율 학습' },

  // 수요일
  { day: 'WED', period: 1, block: 'A', label: 'A블록 선택' },
  { day: 'WED', period: 2, block: 'COMMON', label: '공통 수학' },
  { day: 'WED', period: 3, block: 'COMMON', label: '공통 국어' },
  { day: 'WED', period: 4, block: 'C', label: 'C블록 선택' },
  { day: 'WED', period: 5, block: 'COMMON', label: '창체 동아리' },
  { day: 'WED', period: 6, block: 'COMMON', label: '창체 동아리' },
  { day: 'WED', period: 7, block: 'COMMON', label: '동아리 평가' },

  // 목요일
  { day: 'THU', period: 1, block: 'COMMON', label: '공통 영어' },
  { day: 'THU', period: 2, block: 'B', label: 'B블록 선택' },
  { day: 'THU', period: 3, block: 'COMMON', label: '공통 체육' },
  { day: 'THU', period: 4, block: 'COMMON', label: '공통 수학' },
  { day: 'THU', period: 5, block: 'D', label: 'D블록 선택' },
  { day: 'THU', period: 6, block: 'C', label: 'C블록 선택' },
  { day: 'THU', period: 7, block: 'COMMON', label: '상담/자율' },

  // 금요일
  { day: 'FRI', period: 1, block: 'COMMON', label: '공통 국어' },
  { day: 'FRI', period: 2, block: 'COMMON', label: '공통 영어' },
  { day: 'FRI', period: 3, block: 'A', label: 'A블록 선택' },
  { day: 'FRI', period: 4, block: 'COMMON', label: '공통 수학' },
  { day: 'FRI', period: 5, block: 'COMMON', label: '진로 특강' },
  { day: 'FRI', period: 6, block: 'B', label: 'B블록 선택' },
  { day: 'FRI', period: 7, block: 'D', label: 'D블록 선택' },
];

export function getWeeklyScheduleForGrade(grade: number): WeeklyBlockSlot[] {
  if (grade === 3) {
    return DEFAULT_WEEKLY_SCHEDULE;
  }
  return GRADE_1_2_WEEKLY_SCHEDULE;
}

// 체험용 가짜 학생. 과목은 NEIS 실제 개설 과목을 쓴다.
function demoStudent(
  id: string,
  name: string,
  grade: number,
  classNum: number,
  studentNum: number,
  courses: StudentProfile['courses']
): StudentProfile {
  return { id, name, grade, classNum, studentNum, avatarColor: 'indigo', courses, checkedSupplies: {}, completedAssessments: [] };
}

export const DEMO_STUDENTS: StudentProfile[] = [
  demoStudent('demo-student-2', '홍길동', 2, 5, 10, [
    { block: 'A', subject: '화학', room: '3-1' },
    { block: 'B', subject: '지구과학', room: '3-2' },
    { block: 'C', subject: '윤리와 사상', room: '4-1' },
    { block: 'D', subject: '한국지리 탐구', room: '4-2' },
  ]),
  demoStudent('demo-student-3a', '김체험', 3, 1, 1, [
    { block: 'E', subject: '사회·문화', room: '4-3' },
    { block: 'F', subject: '물리학Ⅱ', room: '5-1' },
    { block: 'G', subject: '윤리와 사상', room: '4-1' },
    { block: 'H', subject: '화법과 작문', room: '2-3' },
  ]),
  demoStudent('demo-student-3b', '이체험', 3, 2, 2, [
    { block: 'E', subject: '화학Ⅱ', room: '5-2' },
    { block: 'F', subject: '생명과학Ⅱ', room: '5-3' },
    { block: 'G', subject: '언어와 매체', room: '2-1' },
    { block: 'H', subject: '물리학Ⅱ', room: '5-1' },
  ]),
  demoStudent('demo-student-1', '박체험', 1, 1, 3, []),
];

export const INITIAL_STUDENTS: StudentProfile[] = DEMO_STUDENTS;

// 시연 날짜가 지나지 않도록 오늘 이후의 해당 요일로 계산한다. day는 1이 월요일이다.
function nextDate(day: number, extraWeeks = 0): string {
  const date = new Date();
  date.setDate(date.getDate() + 1);
  while (date.getDay() !== day) date.setDate(date.getDate() + 1);
  date.setDate(date.getDate() + extraWeeks * 7);
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const dayOfMonth = String(date.getDate()).padStart(2, '0');
  return `${date.getFullYear()}-${month}-${dayOfMonth}`;
}

function demoAssessment(
  id: string,
  targetGrade: number,
  subject: string,
  title: string,
  type: Assessment['type'],
  slots: AssessmentSlot[],
  supplies: string[],
  description: string
): Assessment {
  const [first] = slots;
  return {
    id,
    subject,
    block: first.block || 'COMMON',
    targetGrade,
    title,
    type,
    date: first.date,
    periodOverride: first.period,
    supplies,
    description,
    criteria: ['내용의 정확성 (60점)', '근거와 표현 (40점)'],
    teacherName: '김선생',
    createdAt: new Date().toISOString(),
    slots,
    submission: { enabled: true, mode: 'both', deadline: `${slots[slots.length - 1].date}T23:59` },
  };
}

export const INITIAL_ASSESSMENTS: Assessment[] = [
  demoAssessment('demo-chemistry', 2, '화학', '산화 환원 탐구 보고서', '실험/탐구',
    [{ date: nextDate(3), period: 1, block: 'A' }],
    ['보안경', '실험 노트'], '조별 실험 결과를 정리해 제출합니다.'),
  demoAssessment('demo-calculus', 2, '미적분Ⅰ', '미분법 서술평가', '논술/서술',
    [{ date: nextDate(2), period: 5, classNum: 5 }],
    ['검은색 볼펜'], '풀이 과정을 서술합니다.'),
  demoAssessment('demo-physics', 3, '물리학Ⅱ', '전자기 유도 탐구 실험', '실험/탐구',
    [{ date: nextDate(1), period: 4, block: 'F' }, { date: nextDate(3), period: 5, block: 'H' }],
    ['공학용 계산기', '실험 가운'], '블록마다 평가일이 다른 예시입니다.'),
  demoAssessment('demo-speech', 3, '화법과 작문', '토론 수행평가', '구술/발표',
    [{ date: nextDate(4), period: 4, block: 'H' }],
    ['토론 개요서'], '주제를 정해 찬반 토론을 진행합니다.'),
  demoAssessment('demo-society', 1, '통합사회2', '시장 경제 모둠 발표', '구술/발표',
    [{ date: nextDate(1), period: 5, classNum: 1 }],
    ['발표 자료'], '모둠별로 5분 동안 발표합니다.'),
];
