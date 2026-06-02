const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');
html = html.replace(/<a[^>]*href="https:\/\/t\.me\/pravavladkusni"[^>]*>/gi, match => {
  if (!match.includes('target="_blank"')) {
    return match.replace('href="https://t.me/pravavladkusni"', 'href="https://t.me/pravavladkusni" target="_blank"');
  }
  return match;
});
fs.writeFileSync('index.html', html, 'utf8');