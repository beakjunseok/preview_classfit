# 수행알리미 체험 사이트

중산고등학교 맞춤 수행평가 알림 웹앱을 로그인 없이 체험하는 사이트입니다. 학생과 선생님 화면을 모두 써 볼 수 있습니다.

## 실제 서비스와 다른 점

- **로그인 없음:** 첫 화면에서 학생 또는 선생님을 골라 바로 시작합니다.
- **Gemini 제외:** 호출할 때마다 크레딧이 나가므로 AI 비서는 규칙 기반으로만 답하고, PDF 요약은 꺼져 있습니다. AI 비서에게 이유를 물어보거나 PDF 요약 버튼을 누르면 설명이 나옵니다.
- **공유 데이터:** 체험자가 등록한 평가와 제출물은 다른 체험자에게도 보입니다. 가짜 데이터만 넣어 주세요.

## 기술

React, TypeScript, Tailwind CSS, Vercel Functions, Supabase, NEIS 공공 API, Web Push

## 실행 준비

1. Supabase SQL Editor에서 `supabase/schema.sql`을 실행합니다.
2. `.env.example`의 값을 Vercel 환경 변수에 넣습니다. 키는 저장소에 올리지 않습니다.
3. `npm install` 후 `npm run dev`로 실행합니다.
