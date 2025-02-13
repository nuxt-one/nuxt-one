<script setup lang="ts">
const { $client } = useNuxtApp()

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
</script>

<template>
  <div>
    <h1>用户列表</h1>
    <button @click="createUser">
      创建用户
    </button>

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
