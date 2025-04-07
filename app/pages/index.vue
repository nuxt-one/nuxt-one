<script setup lang="ts">
import { User2, ArrowRight } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { authClient } from '@/lib/auth-client'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

import LanguageSwitcher from '~/components/LanguageToggle.vue'
import DarkModeToggle from '~/components/DarkModeToggle.vue'

const session = authClient.useSession()

const { t } = useI18n()

const loginWithGithub = async () => {
  authClient.signIn.social({
    provider: 'github'
  })
}

const logout = async () => {
  authClient.signOut()
}

const recentPostId = '123'
const postTitle = ref('')

const submitPost = () => {
  console.log('提交帖子:', postTitle.value)
  postTitle.value = ''
}
</script>

<template>
  <div class="min-h-screen p-4">
    <div class="w-full flex justify-end mb-6 sm:mb-8 space-x-4">
      <LanguageSwitcher />
      <DarkModeToggle />
    </div>

    <div class="flex flex-col items-center justify-center">
      <h1 class="text-4xl sm:text-6xl font-bold mb-6 sm:mb-16 text-center">
        Create <span class="text-green-500">Nuxt</span> One
      </h1>

      <h2 class="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mb-6 sm:mb-16 text-center">
        {{ t('description') }}
      </h2>

      <div class="flex flex-col sm:flex-row w-full max-w-4xl gap-3 sm:gap-6 mb-6 sm:mb-16">
        <Card class="p-2 sm:p-4 flex-1">
          <CardHeader>
            <CardTitle class="text-lg sm:text-xl font-bold flex items-center">
              {{ t('firstSteps') }}
              <span class="ml-2">
                <ArrowRight class="w-8 h-4" />
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent class="text-sm sm:text-base">
            {{ t('firstStepsDescription') }}
          </CardContent>
        </Card>

        <Card class="p-2 sm:p-4 flex-1">
          <CardHeader>
            <CardTitle class="text-lg sm:text-xl font-bold flex items-center">
              {{ t('documentation') }}
              <span class="ml-2">
                <ArrowRight class="w-8 h-4" />
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent class="text-sm sm:text-base">
            {{ t('documentationDescription') }}
          </CardContent>
        </Card>
      </div>

      <div class="text-center mb-4">
        <div
          v-if="session?.data"
          class="mb-4"
        >
          <p>{{ t('welcome') }}</p>

          <Button
            class="mt-2 border py-2 px-6 rounded-full transition"
            @click="logout"
          >
            {{ t('signOut') }}
          </Button>
        </div>

        <div
          v-else
          class="mb-4"
        >
          <Button
            class="border py-2 px-6 rounded-full flex items-center justify-center transition"
            @click="loginWithGithub"
          >
            <User2 class="w-4 h-4 mr-2" /> {{ t('signIn') }}
          </Button>
        </div>
      </div>

      <div
        v-if="session?.data"
        class="w-full max-w-md"
      >
        <p class="mb-2">
          {{ t('yourMostRecentPost') }}: {{ recentPostId }}
        </p>

        <Input
          v-model="postTitle"
          type="text"
          class="w-full p-3 rounded-lg border mb-3 placeholder-gray-400"
          :placeholder="t('title')"
        />

        <Button
          class="w-full border py-2 px-4 rounded-lg transition"
          @click="submitPost"
        >
          {{ t('submit') }}
        </Button>
      </div>
    </div>
  </div>
</template>
