# AGENTS.md — thejoom.github.io

## 프로젝트 개요

- **용도**: GitHub Pages 개인/포트폴리오 사이트
- **배포**: `git push` → GitHub Pages 자동 배포
- **URL**: https://thejoom.github.io

## 디렉토리 구조

```
workspace/
├── .agents/          # 에이전트 로그 + 디스패치
├── docs/             # 기획·설계 문서
└── project/          # 실제 소스 (프레임워크 결정 후 생성)
```

## 개발 가이드

- 정적 사이트 — 서버 사이드 로직 없음
- GitHub Pages 제약: Jekyll 또는 순수 정적 파일 기준
- 커밋 메시지: conventional commits (`feat:`, `fix:`, `docs:` 등)

## 금지 행동

- 사용자 요청 없이 `git push` 금지
- `.github/workflows` 수정 시 사용자 확인 필요

