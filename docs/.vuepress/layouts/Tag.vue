<script setup>
import { useBlogCategory } from '@vuepress/plugin-blog/client'
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'
import { RouteLink, useRoutePath } from 'vuepress/client'
import ArticleList from '../components/ArticleList.vue'

const tagMap = useBlogCategory('tag')
const routePath = useRoutePath()
</script>

<template>
  <ParentLayout>
    <template #page>
      <main class="page">
        <div class="tag-wrapper text-base">
          <div class="tag-container flex flex-wrap gap-3 mb-6">
            <RouteLink
              v-for="({ items, path }, name) in tagMap.map"
              :key="name"
              :to="path"
              :active="routePath === path"
              class="tag inline-flex items-center px-3 py-2 rounded-md text-base font-medium cursor-pointer transition-all duration-300 border border-transparent dark:border-transparent hover:border-slate-300 dark:hover:border-slate-600 hover:shadow-md"
            >
              {{ name }}
              <span class="tag-count flex items-center justify-center min-w-6 h-6 ml-2 px-1.5 rounded-full text-sm font-medium bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300">
                {{ items.length }}
              </span>
            </RouteLink>
          </div>

          <div class="mt-8">
            <ArticleList :items="tagMap.currentItems ?? []" />
          </div>
        </div>
      </main>
    </template>
  </ParentLayout>
</template>

<style lang="scss">
@use '@vuepress/theme-default/styles/mixins';

.tag-wrapper {
  @include mixins.content-wrapper;
  padding-top: 4rem !important; // 增加更多顶部内边距防止被遮挡
  margin-top: 0 !important;
  position: relative !important;
  z-index: 1 !important;
  
  .route-link {
    color: inherit;
    text-decoration: none;
  }
  
  .route-link-active {
    background-color: var(--vp-c-accent) !important;
    color: white !important;
    border-color: transparent !important;
    box-shadow: 0 4px 12px rgba(124, 58, 237, 0.3) !important;
  }
  
  .route-link-active .tag-count {
    background-color: rgba(255, 255, 255, 0.3) !important;
    color: white !important;
  }
}

// 响应式设计
@media (max-width: 640px) {
  .tag-container {
    gap: 0.5rem !important;
  }
  
  .tag {
    padding: 0.4rem 0.6rem !important;
    font-size: 0.9rem !important;
  }
  
  .tag-count {
    min-width: 1.2rem !important;
    height: 1.2rem !important;
    font-size: 0.7rem !important;
  }
}
</style>
