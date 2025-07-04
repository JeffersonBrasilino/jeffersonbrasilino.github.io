<script setup lang="ts">
import { QUERY_LIST } from '~/constants/lists'

const queries = computed(() => QUERY_LIST.movie)
</script>

<template>
  <div>
    <CarouselAutoQuery
      v-for="query of queries"
      :key="query.type + query.query"
      :query="query"
    />
    <TheFooter />
  </div>
</template>
