<template>
  <div class="mx-auto p-8">
    <div class="mb-8">
      <h2 class="mb-4 text-2xl font-bold">Get All Users</h2>
    </div>
    <button
    class="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
      Get All Users
    </button>

    <div class="text- mb-4 mt-4 grid grid-cols-3 gap-4 font-bold">
      <p>Id</p>
      <p>Name</p>
      <p>Email</p>
    </div>
  </div>
</template>
<script setup lang="ts">
  const prisma = usePrismaClient()

  onMounted(async () => {
    const user = await prisma.user.findMany()
    console.log(user)
  })

</script>
