# Comet-law

彗星法律法规资料库 - 繁星似海 熠熠生辉

## 项目介绍

Comet-law是一个基于VuePress构建的法律法规资料库，提供中英文双语支持，收录了宪法、民法、刑法、行政法等多个法律领域的内容。项目采用现代化UI设计，结合Tailwind CSS实现响应式布局，并集成搜索功能以便快速检索法律条文。

## 功能特点

- **多语言支持**：同时提供中英文两种语言版本
- **全文搜索**：集成Meilisearch实现高效法律条文检索
- **响应式设计**：采用Tailwind CSS构建适配各种设备的界面
- **文档结构化**：法律条文按部门法分类，层次清晰
- **时间线功能**：按时间顺序展示法律修订历史
- **SEO优化**：自动生成站点地图，提升搜索引擎可见性

## 在线预览

[https://law.iglooblog.top](https://law.iglooblog.top)

## 本地部署

### 环境要求
- Node.js v14.0.0+ 
- pnpm v6.0.0+

### 安装步骤

1. 克隆仓库
```bash
git clone https://github.com/passwordgloo/comet-law.git
cd comet-law
```

2. 安装依赖
```bash
pnpm install
```

3. 配置环境变量（可选，用于搜索功能）
```bash
export HOST_KEY=你的Meilisearch主机地址
export SEARCH_KEY=你的Meilisearch API密钥
```

4. 本地开发
```bash
pnpm run docs:dev
```

5. 构建静态文件
```bash
pnpm run docs:build
```

## 目录结构

```
docs/
├── 宪法/           - 宪法相关内容
├── 民法/           - 民法相关内容
├── 刑法/           - 刑法相关内容
├── 行政法/         - 行政法相关内容
├── 社会法/         - 社会法相关内容
├── 经济法/         - 经济法相关内容
├── 程序法/         - 程序法相关内容
├── 政策/           - 政策文件相关内容
├── 解释/           - 法律解释相关内容
├── en/             - 英文版本内容
└── .vuepress/      - VuePress配置文件
```

## 贡献指南

1. Fork本仓库
2. 创建分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`pnpm run commit` 遵循规范提交信息)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 创建Pull Request

## 许可证

本项目采用MIT许可证 - 详见 [LICENSE](LICENSE) 文件

## 致谢

- [VuePress](https://vuepress.vuejs.org/) - 静态网站生成器
- [Tailwind CSS](https://tailwindcss.com/) - CSS框架
- [Meilisearch](https://www.meilisearch.com/) - 搜索引擎