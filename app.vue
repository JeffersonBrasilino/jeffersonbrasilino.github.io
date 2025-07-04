<script setup>
import '@unocss/reset/tailwind.css'

useHead({
  htmlAttrs: {
    lang: 'pt-BR',
  },
  charset: 'utf-8',
  title: 'Nuxt Movies',
  titleTemplate: () => 'Catálogo',
  link: [
    {
      rel: 'icon',
      type: 'image/webp',
      href: '/movies.webp',
    },
  ],
})
</script>

<template>
  <NuxtLoadingIndicator />
  <div
    h-full
    w-full
    font-sans
    grid="~ lt-lg:rows-[1fr_max-content] lg:cols-[max-content_1fr]"
    of-hidden
    view-transition-app
    transition
    duration-0
  >
    <div id="app-scroller" of-x-hidden of-y-auto relative>
      <NuxtPage />
    </div>
    <!--  <NavBar lg:order-first /> -->
    <IframeModal />
    <PhotoModal />
  </div>
</template>

<style>
html,
body,
#__nuxt {
  height: 100vh;
  margin: 0;
  padding: 0;
  background: #111;
  color: white;
  color-scheme: dark;
}
</style>
