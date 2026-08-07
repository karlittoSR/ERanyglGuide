<script setup>
import { useData } from 'vitepress'
import { computed } from 'vue'

const { page, lang } = useData()

const text = computed(() => {
  const ts = page.value.lastUpdated
  if (!ts) return ''
  const iso = new Date(ts).toISOString().slice(0, 10)
  return lang.value.startsWith('fr')
    ? `Dernière modification au ${iso}`
    : `Last updated on ${iso}`
})
</script>

<template>
  <div v-if="text" class="stale-notice">{{ text }}</div>
</template>
