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

const shouldShowNavbar = computed(
  () => frontmatter.value.navbar ?? themeLocale.value.navbar ?? true,
)

const sidebarItems = useSidebarItems()
const isSidebarOpen = ref(false)
const toggleSidebar = (to?: boolean): void => {
  isSidebarOpen.value = typeof to === 'boolean' ? to : !isSidebarOpen.value
}

const enableExternalLinkIcon = computed(
  () =>
    frontmatter.value.externalLinkIcon ??
    themeLocale.value.externalLinkIcon ??
    true,
)

const containerClass = computed(() => [
  {
    'no-navbar': !shouldShowNavbar.value,
    'no-sidebar': !sidebarItems.value.length,
    'sidebar-open': isSidebarOpen.value,
    'external-link-icon': enableExternalLinkIcon.value,
  },
  frontmatter.value.pageClass,
])

onContentUpdated(() => {
  toggleSidebar(false)
})

const heroText = computed(() => {
  if (frontmatter.value.heroText === null) return null
  return frontmatter.value.heroText || themeLocale.value.title || 'Hello'
})
const tagline = computed(() => {
  if (frontmatter.value.tagline === null) return null
  return (
    frontmatter.value.tagline ||
    themeLocale.value.description ||
    'Welcome to your VuePress site'
  )
})

const scrollPromise = useScrollPromise()
const onBeforeEnter = scrollPromise.resolve
const onBeforeLeave = scrollPromise.pending

const onTouchStart = () => {}
const onTouchEnd = () => {}

const PRIMARY = '236, 94, 114'

// ============ 手电筒动效（卡片 + 按钮共用） ============
type SpotlightMap = Record<string, { x: number; y: number; active: boolean }>
const lawSpotlights = ref<SpotlightMap>({})
const docSpotlights = ref<SpotlightMap>({})
const btnSpotlights = ref<SpotlightMap>({})

const initSpotlight = (map: SpotlightMap, key: string) => {
  if (!map[key]) map[key] = { x: 50, y: 50, active: false }
}

const onMove = (map: SpotlightMap, key: string, e: MouseEvent) => {
  initSpotlight(map, key)
  const target = e.currentTarget as HTMLElement
  const rect = target.getBoundingClientRect()
  map[key] = {
    x: ((e.clientX - rect.left) / rect.width) * 100,
    y: ((e.clientY - rect.top) / rect.height) * 100,
    active: true,
  }
}
const onEnter = (map: SpotlightMap, key: string) => {
  initSpotlight(map, key)
  map[key].active = true
}
const onLeave = (map: SpotlightMap, key: string) => {
  initSpotlight(map, key)
  map[key].active = false
}

const spotlightStyle = (state: { x: number; y: number; active: boolean } | undefined) => {
  if (!state) return {}
  return {
    '--sp-x': `${state.x}%`,
    '--sp-y': `${state.y}%`,
    '--sp-opacity': state.active ? '1' : '0',
  } as Record<string, string>
}

const lawCategories = [
  { title: '宪法相关法', desc: '与宪法相配套、直接保障宪法实施和国家政权运作等方面的法律规范。', link: '/constitution/' },
  { title: '刑法', desc: '规定犯罪与刑罚的法律规范，惩罚犯罪，保护人民，维护社会秩序和公共安全。', link: '/criminal/' },
  { title: '民法商法', desc: '规范社会民事和商事活动的法律规范总和，调整平等主体间的法律关系。', link: '/civillaw/' },
  { title: '经济法', desc: '调整国家从社会整体利益出发，对经济活动实行干预、管理或调控的社会经济关系。', link: '/economic' },
  { title: '诉讼与非诉讼程序法', desc: '规范解决社会纠纷的诉讼活动与非诉讼活动的法律规范。', link: '/proceeding/' },
  { title: '社会法', desc: '规范劳动关系、社会保障、特殊群体权益保障、社会组织等方面的法律规范。', link: '/sociallaw/' },
  { title: '行政法', desc: '关于行政权的授予、行政权的行使以及对行政权的监督的法律规范。', link: '/administrative/' },
]

const docCategories = [
  { title: '行政法规', desc: '国务院为领导和管理国家各项行政工作制定的各类法规的总称。', link: '/council/1.1' },
  { title: '部门规章', desc: '国务院各组成部门及具有行政管理职能的直属机构制定的规范性文件。', link: '/department/1.1.1' },
  { title: '党政机关公文', desc: '党政机关实施领导、履行职能、处理公务的具有特定效力和规范体式的文书。', link: '/party/1' },
  { title: '政策性文件', desc: '国家政权机关、政党组织为实现奋斗目标采取的步骤和措施的文件。', link: '/policy/1.1' },
  { title: '司法解释', desc: '最高人民法院、最高人民检察院依法制定的涉及具体法律应用的规范性文件。', link: '/explain/1.1' },
]
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
          <slot name="navbar-before"></slot>
        </template>
        <template #after>
          <slot name="navbar-after"></slot>
        </template>
      </VPNavbar>
    </slot>

    <!-- 四周留白 + 顶部避开导航栏 -->
    <div class="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-24 pb-12 md:pt-28 md:pb-16">

      <!-- ============ 标题区：除按钮外，不设置任何文字颜色，沿用主题默认 ============ -->
      <header class="mb-8 md:mb-10">
        <h1 class="text-2xl md:text-3xl font-bold tracking-tight">{{ heroText }}</h1>
        <p class="mt-2 text-sm md:text-base leading-relaxed max-w-3xl">{{ tagline }}</p>

        <div class="mt-4 flex flex-wrap gap-3">
          <!-- ============ 主按钮：手电筒 + 按压 + 强制白字（保留按钮文字颜色） ============ -->
          <a
            href="/constitution/"
            class="btn-wrap btn-primary relative overflow-hidden rounded-full inline-flex items-center justify-center h-10 px-6 text-sm font-bold shadow-md transition-all duration-200 hover:shadow-lg !text-white"
            :style="{
              backgroundColor: `rgb(${PRIMARY})`,
              ...spotlightStyle(btnSpotlights['primary']),
            }"
            @mousemove="onMove(btnSpotlights, 'primary', $event)"
            @mouseenter="onEnter(btnSpotlights, 'primary')"
            @mouseleave="onLeave(btnSpotlights, 'primary')"
          >
            <span class="btn-spotlight" aria-hidden="true"></span>
            <span class="relative z-10">快速访问</span>
          </a>

          <!-- ============ 次按钮：手电筒 + 按压（保留按钮文字颜色） ============ -->
          <a
            href="/article/"
            class="btn-wrap btn-outlined relative overflow-hidden rounded-full inline-flex items-center justify-center h-10 px-6 text-sm font-bold border transition-all duration-200 hover:bg-gray-100 dark:hover:bg-white/5"
            :style="{
              color: `rgb(${PRIMARY})`,
              borderColor: `rgba(${PRIMARY}, 0.7)`,
              ...spotlightStyle(btnSpotlights['outlined']),
            }"
            @mousemove="onMove(btnSpotlights, 'outlined', $event)"
            @mouseenter="onEnter(btnSpotlights, 'outlined')"
            @mouseleave="onLeave(btnSpotlights, 'outlined')"
          >
            <span class="btn-spotlight" aria-hidden="true"></span>
            <span class="relative z-10">浏览文章</span>
          </a>
        </div>
      </header>

      <!-- ============ 法律部门：剔除文字颜色设置 ============ -->
      <section class="mb-8 md:mb-10">
        <h2 class="flex items-center gap-2 text-base md:text-lg font-semibold mb-4">
          <span class="inline-block w-1 h-5 rounded-sm" :style="{ background: `rgb(${PRIMARY})` }"></span>
          法律部门
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
          <a
            v-for="item in lawCategories"
            :key="item.title"
            :href="item.link"
            class="card-wrap group relative block overflow-hidden rounded-xl border bg-white dark:bg-[#1C1C1E] border-black/5 dark:border-white/10 transition-all duration-300 !text-gray-900 dark:!text-gray-100"
            :style="spotlightStyle(lawSpotlights[item.title])"
            @mousemove="onMove(lawSpotlights, item.title, $event)"
            @mouseenter="onEnter(lawSpotlights, item.title)"
            @mouseleave="onLeave(lawSpotlights, item.title)"
          >
            <span class="card-spotlight" aria-hidden="true"></span>
            <div class="relative z-10 p-3 md:p-4">
              <h3 class="text-[15px] font-extrabold mb-1">{{ item.title }}</h3>
              <p class="text-[13px] leading-relaxed line-clamp-2 mb-2 opacity-70">{{ item.desc }}</p>
              <span class="text-xs font-bold" :style="{ color: `rgb(${PRIMARY})` }">进入分类 →</span>
            </div>
          </a>
        </div>
      </section>

      <!-- ============ 党政公文：剔除文字颜色设置 ============ -->
      <section>
        <h2 class="flex items-center gap-2 text-base md:text-lg font-semibold mb-4">
          <span class="inline-block w-1 h-5 rounded-sm" :style="{ background: `rgb(${PRIMARY})` }"></span>
          党政公文
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 md:gap-4">
          <a
            v-for="item in docCategories"
            :key="item.title"
            :href="item.link"
            class="card-wrap group relative block overflow-hidden rounded-xl border bg-white dark:bg-[#1C1C1E] border-black/5 dark:border-white/10 transition-all duration-300 !text-gray-900 dark:!text-gray-100"
            :style="spotlightStyle(docSpotlights[item.title])"
            @mousemove="onMove(docSpotlights, item.title, $event)"
            @mouseenter="onEnter(docSpotlights, item.title)"
            @mouseleave="onLeave(docSpotlights, item.title)"
          >
            <span class="card-spotlight" aria-hidden="true"></span>
            <div class="relative z-10 p-3 md:p-4">
              <h3 class="text-[15px] font-extrabold mb-1">{{ item.title }}</h3>
              <p class="text-[13px] leading-relaxed line-clamp-2 mb-2 opacity-70">{{ item.desc }}</p>
              <span class="text-xs font-bold" :style="{ color: `rgb(${PRIMARY})` }">进入分类 →</span>
            </div>
          </a>
        </div>
      </section>

      <footer class="mt-10 md:mt-12 pt-5 md:pt-6 border-t border-gray-200 dark:border-white/10">
        <div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <a class="text-sm font-semibold transition-colors hover:opacity-80" :style="{ color: `rgb(${PRIMARY})` }" href="#">彗星法律法规资料库</a>
          <p class="text-xs">MIT Licensed | © Copyright 2025. All Rights Reserved.</p>
        </div>
      </footer>

    </div>
  </div>
</template>

<style lang="scss">
/* ============================================================
   只保留 动效 & 阴影 & elevation 相关SCSS
   文字/背景/边框颜色 → 全部用 Tailwind dark: 类 (参见 template class)
   ============================================================ */
:root {
  --c: 236, 94, 114;  /* 主色三元组，手电筒/阴影用CSS var绕开SASS解析 */
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* ============ 卡片 Apple HIG 层次阴影（非颜色类，保留SCSS） ============ */
.card-wrap {
  transform: translateZ(0);
  will-change: transform;
  /* 浅模式：顶微高光 + 双层柔和阴影 */
  box-shadow:
    inset 0 0.5px 0 rgba(255, 255, 255, 0.70),
    0 1px 2px rgba(0, 0, 0, 0.08),
    0 2px 6px rgba(0, 0, 0, 0.05);
}
/* 深模式：更薄的高光 + 更深层黑色阴影（Apple标准轻薄不厚重） */
html.dark .card-wrap {
  box-shadow:
    inset 0 0.5px 0 rgba(255, 255, 255, 0.04),
    0 1px 2px rgba(0, 0, 0, 0.40),
    0 4px 12px rgba(0, 0, 0, 0.25);
}
.card-wrap:hover {
  transform: translateY(-3px);
  box-shadow:
    inset 0 0.5px 0 rgba(255, 255, 255, 0.85),
    0 6px 14px -4px rgba(var(--c), 0.22),
    0 12px 22px -6px rgba(0, 0, 0, 0.08);
}
html.dark .card-wrap:hover {
  box-shadow:
    inset 0 0.5px 0 rgba(255, 255, 255, 0.06),
    0 6px 16px -4px rgba(var(--c), 0.25),
    0 14px 26px -8px rgba(0, 0, 0, 0.50);
}
.card-wrap:active { transform: translateY(-1px) scale(0.995); }

/* ============ 手电筒动效（卡片和按钮共用） ============ */
.card-spotlight,
.btn-spotlight {
  position: absolute;
  inset: -1px;
  pointer-events: none;
  z-index: 1;
  opacity: var(--sp-opacity, 0);
  transition: opacity 0.35s ease;
  background: radial-gradient(
    220px circle at var(--sp-x, 50%) var(--sp-y, 50%),
    rgba(var(--c), 0.24) 0%,
    rgba(var(--c), 0.10) 42%,
    rgba(var(--c), 0)    72%
  );
}
html.dark .card-spotlight,
html.dark .btn-spotlight {
  background: radial-gradient(
    260px circle at var(--sp-x, 50%) var(--sp-y, 50%),
    rgba(var(--c), 0.36) 0%,
    rgba(var(--c), 0.16) 42%,
    rgba(var(--c), 0)    74%
  );
}

/* ============ 按钮动效：上浮 + 按压触感 ============ */
.btn-wrap {
  transform: translateZ(0);
  will-change: transform;
  user-select: none;
}
.btn-wrap:hover   { transform: translateY(-1.5px); }
.btn-wrap:active  { transform: translateY(0px) scale(0.96); transition-duration: 80ms; }

.vp-theme-container {
  &.no-navbar {
    .vp-sidebar { top: 0; }
    .vp-page { padding-top: 0; }
    [vp-content] {
      h1, h2, h3, h4, h5, h6 {
        margin-top: 1.5rem;
        padding-top: 0;
      }
    }
  }
}
</style>
