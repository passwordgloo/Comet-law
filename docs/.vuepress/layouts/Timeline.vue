<script setup>
import { useBlogType } from '@vuepress/plugin-blog/client'
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'
import ArticleList from '../components/ArticleList.vue'

const timelines = useBlogType('timeline')
</script>

<template>
  <ParentLayout>
    <template #page>
      <main class="page">
        <!-- 美化时间线标题 -->
        <div class="pt-[calc(var(--navbar-height)+1rem)] pb-6 px-4">
          <h1 class="timeline-title text-3xl font-bold text-center text-gray-800 dark:text-white mb-2">
            时间线
          </h1>
          <p class="text-center text-gray-500 dark:text-gray-400">
            共 {{ timelines.items.length }} 条记录
          </p>
        </div>
        
        <!-- 使用 Tailwind 样式容器包裹时间线列表 -->
        <div class="px-4 max-w-4xl mx-auto">
          <div class="relative">
            <!-- 添加时间线装饰线 -->
            <div class="absolute left-4 top-0 bottom-0 w-0.5 bg-pink-300 dark:bg-pink-700 hidden sm:block"></div>
            
            <!-- 时间线内容 -->
            <ArticleList :items="timelines.items" is-timeline />
          </div>
        </div>
      </main>
    </template>
  </ParentLayout>
</template>

<style lang="scss">
// 简化样式，大部分已用 Tailwind CSS 类替换
.timeline-title {
  text-align: center;
}
</style>
