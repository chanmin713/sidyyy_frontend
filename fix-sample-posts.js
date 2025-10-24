const fs = require('fs');

let content = fs.readFileSync('src/data/samplePosts.ts', 'utf8');

// title, shares, bookmarks 필드 제거
content = content.replace(/^\s*title: ".*?",\s*$/gm, '');
content = content.replace(/^\s*shares: \d+,\s*$/gm, '');
content = content.replace(/^\s*bookmarks: \d+,\s*$/gm, '');

// 빈 줄 정리
content = content.replace(/\n\s*\n\s*\n/g, '\n\n');

fs.writeFileSync('src/data/samplePosts.ts', content);
console.log('samplePosts.ts 파일이 업데이트되었습니다.');
