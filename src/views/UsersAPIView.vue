<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const users = ref([])
const loading = ref(true)
const error = ref(null)

onMounted(async () => {
  try {
    const response = await axios.get('https://dummyjson.com/users')
    users.value = response.data.users
  } catch (e) {
    error.value = 'Error loading users'
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="min-h-[calc(100vh-8rem)] bg-base-200 p-6">
    <div class="max-w-6xl mx-auto">
      <h1 class="text-3xl font-bold mb-6">Users</h1>

      <div v-if="loading" class="text-center py-8">
        <span class="loading loading-spinner loading-lg"></span>
      </div>

      <div v-else-if="error" class="alert alert-error">
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span>{{ error }}</span>
      </div>

      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div v-for="user in users" :key="user.id"
             class="card bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <div class="avatar">
              <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img :src="user.image" :alt="user.firstName" />
              </div>
            </div>
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">{{ user.firstName }} {{ user.lastName }}</h2>
            <div class="text-sm opacity-70">
              <p><strong>Email:</strong> {{ user.email }}</p>
              <p><strong>Age:</strong> {{ user.age }}</p>
              <p><strong>Company:</strong> {{ user.company.name }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>