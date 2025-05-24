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

const { frontmatter, page, themeLocale } = useData()

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

// handle scrollBehavior with transition
const scrollPromise = useScrollPromise()
const onBeforeEnter = scrollPromise.resolve
const onBeforeLeave = scrollPromise.pending
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
                    <h1 class="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Best place to choose <br> your <span class="text-pink-500 ">Comet Legislation Library</span></h1>
                    
                    <p class="mt-3 text-gray-600 dark:text-gray-400">In the legal field, one person's obligation is always based on another person's right. The concept of rights, rather than that of obligations, is the starting point of legal thought..</p>
                    
                    <button class="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-pink-600 rounded-lg lg:w-auto hover:bg-pink-500 focus:outline-none focus:bg-blue-500">Quick start</button>
                </div>
            </div>

            <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                <img class="h-100 w-100 lg:max-w-3xl" src="/comet.svg" alt="Catalogue-pana.svg">
            </div>
        </div>
    </div>
</slot>
    <section class=" container mx-auto px-4 py-16">
        <h2 class="font-bold text-3xl">Legal department</h2>
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 mt-12 xl:grid-cols-3">
            <div>
                <img class="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="/constitution.jpg" alt="">
                <div class="mt-8">
                    <span class="text-sky-500 uppercase tracking-wider">abstract</span>

                    <p class="mt-2 text-gray-500 dark:text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est asperiores vel, ab animi
                        recusandae nulla veritatis id tempore sapiente
                    </p>
                        <a href="#" class="inline-block text-sky-500 underline hover:text-sky-400">Read more</a>
                </div>
            </div>
            <div>
                <img class="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="/criminal.jpg" alt="">
                <div class="mt-8">
                    <span class="text-sky-500 uppercase tracking-wider">abstract</span>

                    <p class="mt-2 text-gray-500 dark:text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est asperiores vel, ab animi
                        recusandae nulla veritatis id tempore sapiente
                    </p>
                        <a href="#" class="inline-block text-sky-500 underline hover:text-sky-400">Read more</a>
                </div>
            </div>
            <div>
                <img class="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="/civillaw.jpg" alt="">
                <div class="mt-8">
                    <span class="text-sky-500 uppercase tracking-wider">abstract</span>

                    <p class="mt-2 text-gray-500 dark:text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est asperiores vel, ab animi
                        recusandae nulla veritatis id tempore sapiente
                    </p>
                        <a href="#" class="inline-block text-sky-500 underline hover:text-sky-400">Read more</a>
                </div>
            </div>
            <div>
                <img class="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="/economic.jpg" alt="">
                <div class="mt-8">
                    <span class="text-sky-500 uppercase tracking-wider">abstract</span>

                    <p class="mt-2 text-gray-500 dark:text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est asperiores vel, ab animi
                        recusandae nulla veritatis id tempore sapiente
                    </p>
                        <a href="#" class="inline-block text-sky-500 underline hover:text-sky-400">Read more</a>
                </div>
            </div>
            <div>
                <img class="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="/proceeding.jpg" alt="">
                <div class="mt-8">
                    <span class="text-sky-500 uppercase tracking-wider">abstract</span>

                    <p class="mt-2 text-gray-500 dark:text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est asperiores vel, ab animi
                        recusandae nulla veritatis id tempore sapiente
                    </p>
                        <a href="#" class="inline-block text-sky-500 underline hover:text-sky-400">Read more</a>
                </div>
            </div>
            <div>
                <img class="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="/sociallaw.jpg" alt="">
                <div class="mt-8">
                    <span class="text-sky-500 uppercase tracking-wider">abstract</span>

                    <p class="mt-2 text-gray-500 dark:text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est asperiores vel, ab animi
                        recusandae nulla veritatis id tempore sapiente
                    </p>
                        <a href="#" class="inline-block text-sky-500 underline hover:text-sky-400">Read more</a>
                </div>
            </div>
            <div>
                <img class="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="/administrative.jpg" alt="">
                <div class="mt-8">
                    <span class="text-sky-500 uppercase tracking-wider">abstract</span>

                    <p class="mt-2 text-gray-500 dark:text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est asperiores vel, ab animi
                        recusandae nulla veritatis id tempore sapiente
                    </p>
                        <a href="#" class="inline-block text-sky-500 underline hover:text-sky-400">Read more</a>
                </div>
            </div> 
        </div>
    </section>

    <section class=" container mx-auto px-4 py-10 lg:py-16">
        <h2 class="font-bold text-3xl">Official Document</h2>
            <div class="grid grid-cols-1 gap-8 md:grid-cols-2 mt-12 xl:grid-cols-3">
            <div>
                <img class="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="/regulate.jpg" alt="">
                <div class="mt-8">
                    <span class="text-sky-500 uppercase tracking-wider">abstract</span>
                    <p class="mt-2 text-gray-500 dark:text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est asperiores vel, ab animi
                        recusandae nulla veritatis id tempore sapiente
                    </p>
                        <a href="#" class="inline-block text-sky-500 underline hover:text-sky-400">Read more</a>
                </div>
            </div>

            <div>
                <img class="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="/party.jpg" alt="">
                <div class="mt-8">
                    <span class="text-sky-500 uppercase tracking-wider">abstract</span>
                    <p class="mt-2 text-gray-500 dark:text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est asperiores vel, ab animi
                        recusandae nulla veritatis id tempore sapiente
                    </p>
                        <a href="#" class="inline-block text-sky-500 underline hover:text-sky-400">Read more</a>
                </div>
            </div>
            <div>
                <img class="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="/policy.jpg" alt="">
                <div class="mt-8">
                    <span class="text-sky-500 uppercase tracking-wider">abstract</span>
                    <p class="mt-2 text-gray-500 dark:text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est asperiores vel, ab animi
                        recusandae nulla veritatis id tempore sapiente
                    </p>
                        <a href="#" class="inline-block text-sky-500 underline hover:text-sky-400">Read more</a>
                </div>
            </div>
            <div>
                <img class="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="/explain.jpg" alt="">
                <div class="mt-8">
                    <span class="text-sky-500 uppercase tracking-wider">abstract</span>
                    <p class="mt-2 text-gray-500 dark:text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est asperiores vel, ab animi
                        recusandae nulla veritatis id tempore sapiente
                    </p>
                        <a href="#" class="inline-block text-sky-500 underline hover:text-sky-400">Read more</a>
                </div>
            </div>
        </div>
    </section>

    <footer class="mt-12 dark:bg-gray-900">
        <div class="container px-4 py-12 mx-auto">
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div>
                    <p class="font-semibold text-gray-800 dark:text-white">Quick Link</p>

                    <div class="flex flex-col items-start mt-5 space-y-2">
                        <a href="#" class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Home</a>
                        <a href="#" class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Who We Are</a>
                        <a href="#" class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Our Philosophy</a>
                    </div>
                </div>

                <div>
                    <p class="font-semibold text-gray-800 dark:text-white">Industries</p>

                    <div class="flex flex-col items-start mt-5 space-y-2">
                        <a href="#" class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Retail & E-Commerce</a>
                        <a href="#" class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Information Technology</a>
                        <a href="#" class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Finance & Insurance</a>
                    </div>
                </div>

                <div>
                    <p class="font-semibold text-gray-800 dark:text-white">Services</p>

                    <div class="flex flex-col items-start mt-5 space-y-2">
                        <a href="#" class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Translation</a>
                        <a href="#" class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Proofreading & Editing</a>
                        <a href="#" class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Content Creation</a>
                    </div>
                </div>

                <div>
                    <p class="font-semibold text-gray-800 dark:text-white">Contact Us</p>

                    <div class="flex flex-col items-start mt-5 space-y-2">
                        <a href="#" class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">1943888301</a>
                        <a href="#" class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">flyigloo@gmail.com</a>
                    </div>
                </div>
            </div>
            
            <hr class="my-6 border-gray-200 md:my-10 dark:border-gray-700">
            
            <div class="flex flex-col items-center justify-between sm:flex-row">
                <a class="text-2xl font-medium text-sky-500 transition-colors flex items-center duration-300 transform dark:text-sky-400 hover:text-sky-400 dark:hover:text-sky-300" href="#">
                    <img class="h-10 w-10 lg:max-w-3xl" src="/comet.svg" alt="Catalogue-pana.svg">
                    <h3 class="mx-2">Comet Legislation</h3>
                </a>
                <p class="mt-4 text-sm text-gray-500 sm:mt-0 dark:text-gray-300">MIT Licensed | © Copyright 2025. All Rights Reserved.</p>
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
