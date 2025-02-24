<template>
  <div class="flex gap-2">
    <Button
      variant="outline"
      @click="colorMode.preference = 'light'"
    >
      <Icon icon="radix-icons:sun" />Light
    </Button>
    <Button
      variant="outline"
      @click="colorMode.preference = 'dark'"
    >
      <Icon icon="radix-icons:moon" /> Dark
    </Button>
    <Button
      variant="outline"
      @click="colorMode.preference = 'system'"
    >
      <Icon icon="radix-icons:desktop" /> System
    </Button>
  </div>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue'

const colorMode = useColorMode()
</script>
