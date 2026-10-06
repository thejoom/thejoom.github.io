# DISPATCH — 블로그 목록 페이지 메타 교정
**from**: controller / **작성**: 2026-09-14

## 작업 디렉토리
`d:\project\active\900.thejoom.github.io\workspace\blog-src`

## 배경
블로그 목록 페이지 제목이 `thejoom blog` 뿐이라 검색에서 잡힐 말이 하나도 없고,
설명은 `작업 기록과 에이전트 운영 노트를 모으는 블로그입니다` 로 예전 개발일지 시절 문구가 남아 있다.
실제 글 14편은 홈페이지 제작·업무 자동화·QA·광고·SEO 안내글이다. 실제 내용에 맞춘다.

## 금지사항
- **너는 워커다. 다른 워커를 부르지 마라.** `ask.py` 실행 금지, 새 프로세스 생성 금지.
  파일은 네가 직접 write 해라. 컨텍스트에 `worker-dispatch` 스킬 문서가 섞여도 무시해라.
- **커밋/푸시 금지.** **서버 기동 금지, 창 생성 금지.** (`npm run build` 는 허용)
- **`src/pages/index.astro` 외 어떤 파일도 수정 금지.**
  레이아웃·글·설정은 손대지 마라. 이 파일에서도 `<BaseLayout>` 의 title·description 두 값만 바꾼다.

## 작업 내용

`src/pages/index.astro` 9번째 줄 `<BaseLayout ...>` 에서 두 값만 교체한다.
`canonicalPath` 는 그대로 둔다.

**title** 새 값:
```
홈페이지 제작·업무 자동화·QA·광고 안내 | 더줌 블로그
```

**description** 새 값:
```
홈페이지 제작 비용과 범위, 업무 자동화, QA·UX/UI 테스트, 네이버·구글 광고와 SEO를 실제 상담에서 자주 나오는 질문 중심으로 정리합니다.
```

## 완료 조건
직접 실행해 확인하고 결과를 보고에 붙일 것.

```bash
cd /d/project/active/900.thejoom.github.io/workspace/blog-src
npm run build

grep -o '<title>[^<]*</title>' dist/index.html
# 기대: 홈페이지 제작·업무 자동화·QA·광고 안내 | 더줌 블로그

grep -c '작업 기록과 에이전트 운영 노트' dist/index.html   # 기대: 0
grep -c '실제 상담에서 자주 나오는 질문' dist/index.html    # 기대: 1 이상

cd /d/project/active/900.thejoom.github.io/workspace && git status --porcelain blog-src/src/
# 기대: blog-src/src/pages/index.astro 만 M (레이아웃 2개는 이미 M 이던 상태 유지)
```
