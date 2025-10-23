<script setup>
defineProps({
  /** Article items */
  items: {
    type: Array,
    required: true,
  },
  /** Whether is timeline or not */
  isTimeline: Boolean,
})
</script>

<template>
  <div class="article-wrapper">
    <div v-if="!items.length" class="text-center py-12 text-gray-500 dark:text-gray-400">Nothing in here.</div>

    <article
      v-for="{ info, path } in items"
      :key="path"
      class="article mx-auto mb-5 p-4 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-md hover:border-gray-300 dark:hover:border-gray-600 cursor-pointer max-w-4xl"
      @click="$router.push(path)"
    >
      <header class="title mb-3 inline-block relative text-xl font-semibold text-gray-800 dark:text-gray-100 pb-1">
        {{ 
          (isTimeline ? `${new Date(info.date).toLocaleDateString()}: ` : '') +
          info.title
        }}
        <span class="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-500 transform scale-x-0 transition-transform duration-300 origin-left hover:scale-x-100"></span>
      </header>

      <hr class="my-3 border-gray-200 dark:border-gray-700" />

      <div class="article-info flex flex-wrap gap-2 text-sm mb-4">
        <span v-if="info.author" class="author inline-flex items-center px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
          <svg class="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
          </svg>
          {{ info.author }}
        </span>

        <span v-if="info.date && !isTimeline" class="date inline-flex items-center px-2 py-0.5 rounded-md bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400">
          <svg class="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path>
          </svg>
          {{ new Date(info.date).toLocaleDateString() }}
        </span>

        <span v-if="info.category" class="category inline-flex items-center px-2 py-0.5 rounded-md bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400">
          <svg class="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
          </svg>
          {{ info.category.join(', ') }}
        </span>

        <span v-if="info.tag" class="tag inline-flex flex-wrap gap-1">
          <span v-for="(tag, index) in info.tag" :key="index" class="inline-flex items-center px-2 py-0.5 rounded-md bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
            <svg class="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
            </svg>
            {{ tag }}
          </span>
        </span>
      </div>

      <div v-if="info.excerpt" class="excerpt text-gray-600 dark:text-gray-300 leading-relaxed" v-html="info.excerpt" />
    </article>
  </div>
</template>

<style lang="scss">
@use '@vuepress/theme-default/styles/mixins';

.article-wrapper {
  padding-top: 4rem !important;
  margin-top: 0 !important;
  position: relative !important;
  z-index: 1 !important;
  @include mixins.content-wrapper;
}

/* 移除原有样式，使用Tailwind CSS */
.excerpt h1 {
  display: none;
}
</style>
