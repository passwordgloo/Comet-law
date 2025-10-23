<script setup lang="ts">
import VPNavbar from '@theme/VPNavbar.vue'
import { useData } from '@theme/useData'
import { useScrollPromise } from '@theme/useScrollPromise'
import { useSidebarItems } from '@theme/useSidebarItems'
import type { Slot } from '@vuepress/helper/client'
import { computed, ref } from 'vue'
import { onContentUpdated } from 'vuepress/client'

defineSlots<{
  'navbar'?: Slot
  'navbar-before'?: Slot
  'navbar-after'?: Slot
  'sidebar'?: Slot
  'sidebar-top'?: Slot
  'sidebar-bottom'?: Slot
  'page'?: Slot
  'page-top'?: Slot
  'page-bottom'?: Slot
  'page-content-top'?: Slot
  'page-content-bottom'?: Slot
}>()

const { frontmatter, page, themeLocale, site } = useData()

// navbar
const shouldShowNavbar = computed(
  () => frontmatter.value.navbar ?? themeLocale.value.navbar ?? true,
)

// sidebar
const sidebarItems = useSidebarItems()
const isSidebarOpen = ref(false)
const toggleSidebar = (to?: boolean): void => {
  isSidebarOpen.value = typeof to === 'boolean' ? to : !isSidebarOpen.value
}

// external-link-icon
const enableExternalLinkIcon = computed(
  () =>
    frontmatter.value.externalLinkIcon ??
    themeLocale.value.externalLinkIcon ??
    true,
)

// classes
const containerClass = computed(() => [
  {
    'no-navbar': !shouldShowNavbar.value,
    'no-sidebar': !sidebarItems.value.length,
    'sidebar-open': isSidebarOpen.value,
    'external-link-icon': enableExternalLinkIcon.value,
  },
  frontmatter.value.pageClass,
])

// close sidebar when content changes
onContentUpdated(() => {
  toggleSidebar(false)
})

const heroText = computed(() => {
  if (frontmatter.value.heroText === null) {
    return null
  }
  return frontmatter.value.heroText || themeLocale.value.title || 'Hello'
})
const tagline = computed(() => {
  if (frontmatter.value.tagline === null) {
    return null
  }

  return (
    frontmatter.value.tagline ||
    themeLocale.value.description ||
    'Welcome to your VuePress site'
  )
})

const heroAlt = computed(
  () => frontmatter.value.heroAlt || heroText.value || 'hero',
)

// handle scrollBehavior with transition
const scrollPromise = useScrollPromise()
const onBeforeEnter = scrollPromise.resolve
const onBeforeLeave = scrollPromise.pending

// 添加缺失的触摸事件处理函数
const onTouchStart = () => {}
const onTouchEnd = () => {}
</script>

<template>
  <div
    class="vp-theme-container"
    :class="containerClass"
    vp-container
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <slot name="navbar">
      <VPNavbar v-if="shouldShowNavbar" @toggle-sidebar="toggleSidebar">
        <template #before>
          <slot name="navbar-before" />
        </template>
        <template #after>
          <slot name="navbar-after" />
        </template>
      </VPNavbar>
    </slot>

<slot name="Hero">
    <div class="container px-6 py-16 mx-auto">
        <div class="items-center lg:flex">
            <div class="w-full lg:w-1/2">
                <div class="lg:max-w-lg">
                    <h1 class="text-4xl font-semibold lg:text-4xl">{{ heroText }}</h1>
                    <p class="mt-3">{{ tagline }}</p>
                    <form method="get" action="/constitution/">
                        <button class="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-pink-600 rounded-lg lg:w-auto hover:bg-pink-500 focus:outline-none focus:bg-blue-500">快速访问</button>             
                    </form>
                </div>
            </div>
            <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                <img class="h-100 w-100 lg:max-w-3xl" src="https://file.iglooblog.top/comet_law/comet.svg" alt="Catalogue-pana.svg">
            </div>
        </div>
    </div>
</slot>
    <section class=" container mx-auto px-4 py-16">
        <h2 class="font-bold text-3xl">法律部门</h2>
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 mt-12 xl:grid-cols-3">
            <div>
                <img class="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="https://file.iglooblog.top/comet_law/constitution.jpg" alt="">
                <div class="mt-8">
                    <span class="text-sky-500 uppercase tracking-wider">简介</span>

                    <p class="mt-2 text-gray-500 dark:text-gray-400">
                        宪法相关法是与宪法相配套、直接保障宪法实施和国家政权运作等方面的法律规范，调整国家政治关系……
                    </p>
                        <a href="/constitution/" class="inline-block text-sky-500 underline hover:text-sky-400">了解更多</a>
                </div>
            </div>
            <div>
                <img class="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="https://file.iglooblog.top/comet_law/criminal.jpg" alt="">
                <div class="mt-8">
                    <span class="text-sky-500 uppercase tracking-wider">简介</span>
                    <p class="mt-2 text-gray-500 dark:text-gray-400">
                        刑法是规定犯罪与刑罚的法律规范。它通过规范国家的刑罚权，惩罚犯罪，保护人民，维护社会秩序和公共安全，保障国家安全。 
                    </p>
                        <a href="/criminal/" class="inline-block text-sky-500 underline hover:text-sky-400">了解更多</a>
                </div>
            </div>
            <div>
                <img class="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="https://file.iglooblog.top/comet_law/civillaw.jpg" alt="">
                <div class="mt-8">
                    <span class="text-sky-500 uppercase tracking-wider">简介</span>

                    <p class="mt-2 text-gray-500 dark:text-gray-400">
                        规范社会民事和商事活动的法律规范的总和。民法商法调整的是自然人、法人和其他组织之间以平等地位而发生的各种法律关系。
                    </p>
                        <a href="/civillaw/" class="inline-block text-sky-500 underline hover:text-sky-400">了解更多</a>
                </div>
            </div>
            <div>
                <img class="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="https://file.iglooblog.top/comet_law/economic.jpg" alt="">
                <div class="mt-8">
                    <span class="text-sky-500 uppercase tracking-wider">简介</span>
                    <p class="mt-2 text-gray-500 dark:text-gray-400">
                        经济法是调整国家从社会整体利益出发，对经济活动实行干预、管理或者调控所产生的社会经济关系的法律规范。
                    </p>
                        <a href="/economic" class="inline-block text-sky-500 underline hover:text-sky-400">了解更多</a>
                </div>
            </div>
            <div>
                <img class="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="https://file.iglooblog.top/comet_law/proceeding.jpg" alt="">
                <div class="mt-8">
                    <span class="text-sky-500 uppercase tracking-wider">简介</span>
                    <p class="mt-2 text-gray-500 dark:text-gray-400">
                        诉讼与非诉讼程序法是规范解决社会纠纷的诉讼活动与非诉讼活动的法律规范。
                    </p>
                        <a href="/proceeding/" class="inline-block text-sky-500 underline hover:text-sky-400">了解更多</a>
                </div>
            </div>
            <div>
                <img class="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="https://file.iglooblog.top/comet_law/sociallaw.jpg" alt="">
                <div class="mt-8">
                    <span class="text-sky-500 uppercase tracking-wider">简介</span>
                    <p class="mt-2 text-gray-500 dark:text-gray-400">
                        社会法，是指规范劳动关系、社会保障、特殊群体权益保障、社会组织等方面的法律规范的总和。
                    </p>
                        <a href="/sociallaw/" class="inline-block text-sky-500 underline hover:text-sky-400">了解更多</a>
                </div>
            </div>
            <div>
                <img class="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="https://file.iglooblog.top/comet_law/administrative.jpg" alt="">
                <div class="mt-8">
                    <span class="text-sky-500 uppercase tracking-wider">简介</span>
                    <p class="mt-2 text-gray-500 dark:text-gray-400">
                        行政法是关于行政权的授予、行政权的行使以及对行政权的监督的法律规范
                    </p>
                        <a href="/administrative/" class="inline-block text-sky-500 underline hover:text-sky-400">了解更多</a>
                </div>
            </div> 
        </div>
    </section>
    <section class=" container mx-auto px-4 py-10 lg:py-16">
        <h2 class="font-bold text-3xl">党政公文</h2>
            <div class="grid grid-cols-1 gap-8 md:grid-cols-2 mt-12 xl:grid-cols-3">
            <div>
                <img class="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="https://file.iglooblog.top/comet_law/regulation.JPG" alt="">
                <div class="mt-8">
                    <span class="text-sky-500 uppercase tracking-wider">简介</span>
                    <p class="mt-2 text-gray-500 dark:text-gray-400">
                        行政法规是国务院为领导和管理国家各项行政工作制定的政治、经济、教育、科技、文化、外事等各类法规的总称
                    </p>
                        <a href="/council/1.1" class="inline-block text-sky-500 underline hover:text-sky-400">了解更多</a>
                </div>
            </div>
            <div>
                <img class="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="https://file.iglooblog.top/comet_law/depart.JPG" alt="">
                <div class="mt-8">
                    <span class="text-sky-500 uppercase tracking-wider">简介</span>
                    <p class="mt-2 text-gray-500 dark:text-gray-400">
                        部门规章是指国务院各组成部门以及具有行政管理职能的直属机构根据法律和国务院的行政法规、决定、命令制定的规范性文件总称
                    </p>
                        <a href="/department/1.1.1" class="inline-block text-sky-500 underline hover:text-sky-400">了解更多</a>
                </div>
            </div>
            <div>
                <img class="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="https://file.iglooblog.top/comet_law/party.jpg" alt="">
                <div class="mt-8">
                    <span class="text-sky-500 uppercase tracking-wider">简介</span>
                    <p class="mt-2 text-gray-500 dark:text-gray-400">
                        党政机关公文是党政机关实施领导、履行职能、处理公务的具有特定效力和规范体式的文书
                    </p>
                        <a href="/party/1" class="inline-block text-sky-500 underline hover:text-sky-400">了解更多</a>
                </div>
            </div>
            <div>
                <img class="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="https://file.iglooblog.top/comet_law/policy.jpg" alt="">
                <div class="mt-8">
                    <span class="text-sky-500 uppercase tracking-wider">简介</span>
                    <p class="mt-2 text-gray-500 dark:text-gray-400">
                        政策性文件是指国家政权机关、政党组织和其他社会政治集团内为实现应该达到的奋斗目标任务采取的一般步骤和具体措施的文件
                    </p>
                        <a href="/policy/1.1" class="inline-block text-sky-500 underline hover:text-sky-400">了解更多</a>
                </div>
            </div>
            <div>
                <img class="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="https://file.iglooblog.top/comet_law/explain.jpg" alt="">
                <div class="mt-8">
                    <span class="text-sky-500 uppercase tracking-wider">简介</span>
                    <p class="mt-2 text-gray-500 dark:text-gray-400">
                        司法解释是指最高人民法院、最高人民检察院依法制定的涉及具体法律应用的规范性文件
                    </p>
                        <a href="/explain/1.1" class="inline-block text-sky-500 underline hover:text-sky-400">了解更多</a>
                </div>
            </div>
        </div>
    </section>

    <footer class="mt-12">
        <div class="container px-4 py-12 mx-auto">
            <span class="flex items-center">
                <span class="h-px flex-1 bg-gradient-to-r from-transparent to-gray-300"></span>
                <span class="shrink-0 px-4">我是法律底线</span>
                <span class="h-px flex-1 bg-gradient-to-l from-transparent to-gray-300"></span>
            </span>
            <div class="flex flex-col items-center justify-between sm:flex-row">
                <a class="text-2xl font-medium text-sky-500 transition-colors flex items-center duration-300 transform dark:text-sky-400 hover:text-sky-400 dark:hover:text-sky-300" href="#">
                        <img class="h-10 w-10 lg:max-w-3xl" src="https://file.iglooblog.top/comet_law/comet.svg" alt="Catalogue-pana.svg">
                        <h3 class="mx-2">彗星法律法规资料库</h3>
                </a>
                <p class="mt-4 text-sm sm:mt-0">MIT Licensed | © Copyright 2025. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
  </div>

 
</template>

<style lang="scss">

.vp-theme-container {
  // navbar is disabled
  &.no-navbar {
    .vp-sidebar {
      top: 0;

    }

    .vp-page {
      padding-top: 0;
    }

    // adjust heading margin and padding;
    [vp-content] {
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        margin-top: 1.5rem;
        padding-top: 0;
      }
    }
  }
}
</style>
