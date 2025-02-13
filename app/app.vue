<script setup lang="ts">
const { $client } = useNuxtApp()

const { data: hello } = await $client.sayHello.hello.useQuery({ text: 'world' })
</script>

<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <p class="text-2xl font-bold">
      {{ hello?.greeting }}
    </p>
    <NuxtPage />
  </div>
</template>
