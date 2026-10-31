import React from 'react';
import { AuthSession } from '../utils/authClient';
import { getDemoStudents } from '../utils/demoApi';
import { JungsanLogo } from './JungsanLogo';

interface LoginPortalProps {
  onLoggedIn: (session: AuthSession) => void;
}

const DEMO_TEACHER_SUBJECTS = ['화학', '미적분Ⅰ', '물리학Ⅱ', '화법과 작문', '통합사회2'];

export const LoginPortal: React.FC<LoginPortalProps> = ({ onLoggedIn }) => {
  const students = getDemoStudents();

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-5">
        <div className="text-center space-y-2">
          <JungsanLogo size={48} className="mx-auto" />
          <h1 className="text-xl font-bold text-slate-900">수행알리미 체험하기</h1>
          <p className="text-sm text-slate-500">로그인 없이 바로 체험합니다. 가짜 데이터만 넣어 주세요.</p>
        </div>

        <button
          onClick={() =>
            onLoggedIn({
              token: 'demo',
              id: 'demo-teacher',
              role: 'teacher',
              name: '김선생',
              subjects: DEMO_TEACHER_SUBJECTS,
              profile: null,
            })
          }
          className="w-full min-h-12 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm rounded-xl transition-colors"
        >
          선생님으로 체험하기
        </button>

        <div className="space-y-2">
          <p className="text-sm font-semibold text-slate-700">학생으로 체험하기</p>
          {students.map((student) => (
            <button
              key={student.id}
              onClick={() =>
                onLoggedIn({
                  token: 'demo',
                  id: student.id,
                  role: 'student',
                  name: student.name,
                  subjects: [],
                  profile: student,
                })
              }
              className="w-full min-h-12 px-4 py-2 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between text-sm transition-colors"
            >
              <span className="font-semibold text-slate-900">{student.name}</span>
              <span className="text-slate-500">
                {student.grade}학년 {student.classNum}반
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
