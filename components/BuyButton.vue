<script setup lang="ts">
const props = defineProps<{
  link: string
}>()

const buyLink = computed(() => props.link)
function buy() {
  window.open(buyLink.value, '_blank')
}

function onMouseOver(e: MouseEvent) {
  ;(e.currentTarget as HTMLButtonElement).style.backgroundColor = '#369e8e'
}
function onMouseLeave(e: MouseEvent) {
  ;(e.currentTarget as HTMLButtonElement).style.backgroundColor = '#40c1ad'
}
</script>

<template>
  <div>
    <button
      type="button"
      flex="~ gap2"
      items-center
      p="x6 y3"
      :style="{
        backgroundColor: '#40c1ad',
        color: '#fff',
        border: 'none',
        borderRadius: '3px',
        cursor: 'pointer',
        transition: 'background 0.2s',
      }"
      :title="$t('Buy')"
      @click="buy"
      @mouseover="onMouseOver"
      @mouseleave="onMouseLeave"
    >
      <div i-ph-shopping-cart />
      {{ $t('Buy') }}
    </button>
  </div>
</template>
