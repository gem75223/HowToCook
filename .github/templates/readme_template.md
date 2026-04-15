# 程序員做飯指南

[![build](https://github.com/Anduin2017/HowToCook/actions/workflows/build.yml/badge.svg)](https://github.com/Anduin2017/HowToCook/actions/workflows/build.yml)
[![License](https://img.shields.io/github/license/Anduin2017/HowToCook)](./LICENSE)
[![GitHub contributors](https://img.shields.io/github/contributors/Anduin2017/HowToCook)](https://github.com/Anduin2017/HowToCook/graphs/contributors)
[![npm](https://img.shields.io/npm/v/how-to-cook)](https://www.npmjs.com/package/how-to-cook)
![Man hours](https://manhours.aiursoft.cn/r/github.com/anduin2017/howtocook.svg)
[![Docker](https://img.shields.io/badge/docker-latest-blue?logo=docker)](https://github.com/Anduin2017/HowToCook/pkgs/container/how-to-cook)
[![Join the AnduinOS Community on Revolt](https://img.shields.io/badge/Revolt-Join-fd6671?style=flat-square)](https://rvlt.gg/ndApqZEs)

最近宅在家做飯，作爲程序員，我偶爾在網上找找菜譜和做法。但是這些菜譜往往寫法千奇百怪，經常中間莫名出來一些材料。對於習慣了形式語言的程序員來說極其不友好。

所以，我計劃自己搜尋菜譜並結合實際做菜的經驗，準備用更清晰精準的描述來整理常見菜的做法，以方便程序員在家做飯。

同樣，我希望它是一個由社區驅動和維護的開源項目，使更多人能夠一起做一個有趣的倉庫。所以非常歡迎大家貢獻它~

## 本地部署

如果需要在本地部署菜譜 Web 服務，可以在安裝 Docker 後運行下面命令：

```bash
docker pull ghcr.io/anduin2017/how-to-cook:latest
docker run -d -p 5000:5000 ghcr.io/anduin2017/how-to-cook:latest
```

如需下載 PDF 版本，可以在瀏覽器中訪問 [/document.pdf](https://cook.aiursoft.cn/document.pdf)

## 如何貢獻

針對發現的問題，直接修改並提交 Pull request 即可。

在寫新菜譜時，請複製並修改已有的菜譜模板: [示例菜](https://github.com/Anduin2017/HowToCook/blob/master/dishes/template/%E7%A4%BA%E4%BE%8B%E8%8F%9C/%E7%A4%BA%E4%BE%8B%E8%8F%9C.md?plain=1)。

## 搭建環境

{{before}}

## 菜譜

{{index_stars}}

{{main}}

## 進階知識學習

如果你已經做了許多上面的菜，對於廚藝已經入門，並且想學習更加高深的烹飪技巧，請繼續閱讀下面的內容：

{{after}}

## 衍生作品推薦

- [HowToCook-mcp 讓 AI 助手變身私人大廚，爲你的一日三餐出謀劃策](https://github.com/worryzyy/HowToCook-mcp)
- [HowToCook-py-mcp 讓 AI 助手變身私人大廚，爲你的一日三餐出謀劃策 (Python)](https://github.com/DusKing1/howtocook-py-mcp)
