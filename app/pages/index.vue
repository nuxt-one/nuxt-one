<script setup lang="ts">
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
</script>

<template>
  <div>
    <h1>{{ t('userList') }}</h1>

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
      <p>{{ t('welcome') }}</p>
    </div>

    <Button @click="createUser">
      {{ t('createUser') }}
    </Button>

    <ul>
      <li
        v-for="user in userList"
        :key="user.id"
      >
        {{ user.name }} - {{ user.email }}
      </li>
    </ul>
  </div>
</template>
