const fs = require('fs');
const path = require('path');
const OpenCC = require('opencc-js');

// 使用台灣用語的簡體轉繁體轉換器
const converter = OpenCC.Converter({ from: 'cn', to: 'tw' });

// 遞迴處理路徑 (深度優先)
function processPath(dir, name) {
  const fullPath = path.join(dir, name);
  let stats;
  try {
    stats = fs.statSync(fullPath);
  } catch (e) {
    console.error(`Error reading stat for ${fullPath}:`, e);
    return;
  }

  if (stats.isDirectory()) {
    // 先處理子項目
    const children = fs.readdirSync(fullPath);
    children.forEach(child => {
      processPath(fullPath, child);
    });

    // 處理完子項目後，重新命名當前目錄
    const newName = converter(name);
    if (newName !== name) {
      const newPath = path.join(dir, newName);
      try {
        fs.renameSync(fullPath, newPath);
        console.log(`Renamed Dir: ${name} -> ${newName}`);
      } catch (e) {
        console.error(`Failed to rename dir ${name} to ${newName}:`, e);
      }
    }
  } else if (stats.isFile()) {
    // 如果是 .md 檔案，先轉換內容
    if (name.endsWith('.md')) {
      try {
        const content = fs.readFileSync(fullPath, 'utf8');
        const converted = converter(content);
        fs.writeFileSync(fullPath, converted, 'utf8');
        console.log(`Converted Content: ${name}`);
      } catch (e) {
        console.error(`Failed to convert content for ${name}:`, e);
      }
    }

    // 重新命名檔案
    const newName = converter(name);
    if (newName !== name) {
      const newPath = path.join(dir, newName);
      try {
        fs.renameSync(fullPath, newPath);
        console.log(`Renamed File: ${name} -> ${newName}`);
      } catch (e) {
        console.error(`Failed to rename file ${name} to ${newName}:`, e);
      }
    }
  }
}

// 從 dishes 目錄開始處理
const rootDir = path.join(__dirname, 'dishes');
if (fs.existsSync(rootDir)) {
  fs.readdirSync(rootDir).forEach(child => {
    processPath(rootDir, child);
  });
} else {
  console.error('Directory "dishes" not found.');
}
