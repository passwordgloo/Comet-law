<script setup>
import { useBlogType } from '@vuepress/plugin-blog/client'
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'
import ArticleList from '../components/ArticleList.vue'

const articles = useBlogType('article')
</script>

<template>
  <ParentLayout>
    <template #page>
      <main class="page">
        <!-- 添加文章列表标题 -->
        <div class="pt-[calc(var(--navbar-height)+1rem)] pb-6 px-4 max-w-4xl mx-auto">
          <h1 class="text-3xl font-bold text-center text-gray-800 dark:text-white mb-2">
            文章列表
          </h1>
          <p class="text-center text-gray-500 dark:text-gray-400">
            共 {{ articles.items.length }} 篇文章
          </p>
        </div>
        
        <!-- 使用 Tailwind 样式容器包裹文章列表 -->
        <div class="px-4 max-w-4xl mx-auto">
          <ArticleList :items="articles.items" />
        </div>
      </main>
    </template>
  </ParentLayout>
</template>

<style lang="scss">
// 保留必要的样式，大部分已用 Tailwind CSS 类替换
</style>
