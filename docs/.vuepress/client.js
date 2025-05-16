import { defineClientConfig } from 'vuepress/client'
import Banner from './layouts/Banner.vue'
import Article from './layouts/Article.vue'
import Category from './layouts/Category.vue'
import Tag from './layouts/Tag.vue'
import Timeline from './layouts/Timeline.vue'

export default defineClientConfig({
  // we provide some blog layouts
  layouts: {
    Banner,
    Article,
    Category,
    Tag,
    Timeline,
  },
})
