<script setup lang="ts">
import { t } from '~/i18n'
import { showShareDialog } from '~/state'

function open() {
  showShareDialog.value = true
}
</script>

<template>
  <button
    btn flex="~ wrap gap-x-2 center" ws-nowrap text-lg font-serif
    p="x3 y1"
    @click="open()"
  >
    <div i-carbon-share text-base />
    {{ t('share') }}
  </button>
</template>
