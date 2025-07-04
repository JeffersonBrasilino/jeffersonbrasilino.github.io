<script setup lang="ts">
import type { CatalogItem, Media, MediaType, QueryItem } from '~/types'

defineProps<{
  item: CatalogItem
}>()
</script>

<template>
  <NuxtLink pb2>
    <div
      block
      bg-gray4:10
      p1
      class="aspect-10/16"
      transition
      duration-400
      hover="scale-105 z10"
    >
      <NuxtImg
        v-if="item.purchaseLink"
        width="400"
        height="600"
        format="webp"
        :src="`${item.image}`"
        :alt="item.name"
        w-full
        h-full
        object-cover
      />
      <div v-else h-full op10 flex>
        <div i-ph:question ma text-4xl />
      </div>
    </div>
    <div mt-2>
      {{ item.name }}
    </div>
    <div mt-2 flex text gap-2 items-center>
      <BuyButton :link="item.purchaseLink || ''" />
    </div>
  </NuxtLink>
</template>
