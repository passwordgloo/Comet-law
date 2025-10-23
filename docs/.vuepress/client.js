import { defineClientConfig } from 'vuepress/client'
import Article from './layouts/Article.vue'
import Banner from './layouts/Banner.vue'
import Category from './layouts/Category.vue'
import Home from './layouts/Home.vue'
import Tag from './layouts/Tag.vue'
import Timeline from './layouts/Timeline.vue'
// 导入 Tailwind CSS 样式
import './styles/tailwind.css'

export default defineClientConfig({
  // we provide some blog layouts
  layouts: {
    Article,
    Banner,
    Category,
    Home,
    Tag,
    Timeline,
  },
})
