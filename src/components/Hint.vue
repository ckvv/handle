<script setup lang="ts">
import { t } from '~/i18n'
import { answer, dayNoHanzi, hint, parseWord } from '~/state'
import { meta } from '~/storage'

const parsed = computed(() => parseWord(hint.value, answer.value.word)[0])
const masked = computed(() => ({
  ...parsed.value,
  char: '?',
}))
</script>

<template>
  <div p8 flex="~ col gap-4" items-center>
    <p><b>{{ dayNoHanzi }}</b></p>
    <div>{{ t('hint-note') }} <b>{{ meta.hintLevel === 2 ? t('hanzi') : t('ziyin') }}</b></div>
    <CharBlock :char="meta.hintLevel === 2 ? parsed : masked" />
    <button
      v-if="meta.hintLevel !== 2"
      class="btn bg-mis"
      @click="meta.hintLevel = 2"
    >
      {{ t('more-hint') }}
    </button>
  </div>
</template>
