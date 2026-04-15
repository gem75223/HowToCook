const fs = require('fs');
const path = require('path');
const OpenCC = require('opencc');

const converter = new OpenCC('s2t.json');

function convertDirectory(directory) {
    fs.readdir(directory, (err, files) => {
        if (err) {
            console.error(`無法讀取目錄 ${directory}:`, err);
            return;
        }

        files.forEach(file => {
            const filePath = path.join(directory, file);
            fs.stat(filePath, (err, stats) => {
                if (err) {
                    console.error(`無法讀取檔案 ${filePath}:`, err);
                    return;
                }

                if (stats.isDirectory()) {
                    convertDirectory(filePath);
                } else if (stats.isFile() && path.extname(file) === '.md') {
                    fs.readFile(filePath, 'utf8', (err, data) => {
                        if (err) {
                            console.error(`無法讀取檔案 ${filePath}:`, err);
                            return;
                        }

                        converter.convertPromise(data)
                            .then(traditionalText => {
                                fs.writeFile(filePath, traditionalText, 'utf8', err => {
                                    if (err) {
                                        console.error(`無法寫入檔案 ${filePath}:`, err);
                                    } else {
                                        console.log(`已轉換: ${filePath}`);
                                    }
                                });
                            })
                            .catch(err => {
                                console.error(`轉換失敗 ${filePath}:`, err);
                            });
                    });
                }
            });
        });
    });
}

convertDirectory(__dirname);