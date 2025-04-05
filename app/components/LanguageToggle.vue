<script setup lang="ts">
import { Languages } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

const { setLocale } = useI18n()

const switchLanguage = async (lang: 'en-US' | 'zh-CN') => {
  await setLocale(lang)
}
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="outline">
        <Languages class="h-(1.2rem) w-(1.2rem)" />
        <span class="sr-only">切换语言</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuItem @click="switchLanguage('en-US')">
        English
      </DropdownMenuItem>
      <DropdownMenuItem @click="switchLanguage('zh-CN')">
        中文
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
