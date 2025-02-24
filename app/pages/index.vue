<script setup lang="ts">
import { User2 } from 'lucide-vue-next'

const { loggedIn, clear, user } = useUserSession()
const { $client } = useNuxtApp()
const { t, locale, setLocale } = useI18n()

// 获取用户列表
const { data: userList, refresh } = await useAsyncData('users', () =>
  $client.users.getAll.query()
)

// 创建用户
const createUser = async () => {
  await $client.users.create.mutate({
    name: '测试用户',
    email: 'test@example.com'
  })
  // 刷新列表
  await refresh()
}

// 语言切换
const switchLanguage = async (lang: 'en-US' | 'zh-CN') => {
  await setLocale(lang)
}

// 登录
const loginWithGithub = async () => {
  try {
    // 重定向到 GitHub 登录页面
    await navigateTo('/api/auth/github', {
      external: true
    })
  }
  catch (error) {
    console.error('GitHub 登录失败:', error)
  }
}

// 登出
const logout = async () => {
  await clear()
}
</script>

<template>
  <div>
    <div class="mb-4">
      <button
        :class="{ 'font-bold': locale === 'en-US' }"
        @click="switchLanguage('en-US')"
      >
        English
      </button> |
      <button
        :class="{ 'font-bold': locale === 'zh-CN' }"
        @click="switchLanguage('zh-CN')"
      >
        中文
      </button>
      <p>{{ t('welcome') }} {{ user?.name }}</p>
    </div>

    <DarkModeToggle />

    <!-- 根据登录状态显示不同内容 -->
    <div v-if="loggedIn">
      <Button @click="logout">
        登出
      </Button>
    </div>
    <div v-else>
      <Button @click="loginWithGithub">
        <User2 class="w-4 h-4 mr-2" /> Login with Github
      </Button>
    </div>

    <h1>{{ t('userList') }}</h1>

    <Button @click="createUser">
      {{ t('createUser') }}
    </Button>

    <ul>
      <li
        v-for="item in userList"
        :key="item.id"
      >
        {{ item.name }} - {{ item.email }}
      </li>
    </ul>
  </div>
</template>
