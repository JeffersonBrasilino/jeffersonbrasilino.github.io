<script setup lang="ts">
import type { QueryItem } from '~/types'
import catalogData from '~/catalog.json'

const props = defineProps<{
  query: QueryItem
}>()

const type = props.query.type

// eslint-disable-next-line ts/ban-ts-comment
// @ts-ignore
const itens = catalogData[type]
</script>

<template>
  <CarouselBase>
    <template #title>
      {{ $t(props.query.title) }}
    </template>
    <MediaCard
      v-for="i of itens || []"
      :key="i.purchaseLink"
      :item="i"
      flex-1
      w-40
      md:w-60
    />
  </CarouselBase>
</template>
