<script setup lang="ts">
const { locale, t } = useI18n()

useHead({
  htmlAttrs: { lang: locale.value },
  title: 'Nuxt One',
  meta: [
    { name: 'description', content: t('description') }
  ]
})

useSeoMeta({
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  title: 'Nuxt One',
  description: 'The best way to start a full-stack, typesafe Nuxt.js app.'
})
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
