# Comet-law

彗星法律法规资料库 - 繁星似海 熠熠生辉

## 项目介绍

Comet-law是一个基于VuePress 2 + Tailwind CSS 4 + Meilisearch构建的现代化法律法规资料库，提供中英文双语支持，收录了宪法、民法、刑法、行政法等多个法律领域的内容。项目采用现代化UI设计，实现响应式布局，并集成高效搜索功能以便快速检索法律条文。

## 技术架构

项目采用最新的前端技术栈，主要包括：
- **VuePress 2** - 静态网站生成器，提供强大的文档站点功能
- **Tailwind CSS 4** - 实用优先的CSS框架，实现高效的UI开发和响应式设计
- **Meilisearch** - 轻量级搜索引擎，用于实现全文检索功能

选择Meilisearch的原因是Algolia在免费额度下无法大批量建立法律文本等超大文本索引，而Meilisearch提供了更好的自托管体验和更适合大量文本索引的能力。

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
- Node.js v16.0.0+ 
- pnpm v8.0.0+

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

搜索功能需要在系统环境变量中配置以下参数，这些参数在`Comet-law/docs/.vuepress/config.js`文件的第58-60行被引用：
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

欢迎对本项目进行贡献！如果你有任何想法或改进，欢迎直接提交代码或提出问题。贡献时请确保遵循项目的代码风格和提交规范。

## 许可证

本项目采用MIT许可证 - 详见 [LICENSE](LICENSE) 文件

## 致谢

- [VuePress 2](https://v2.vuepress.vuejs.org/) - 静态网站生成器
- [Tailwind CSS](https://tailwindcss.com/) - CSS框架
- [Meilisearch](https://www.meilisearch.com/) - 搜索引擎