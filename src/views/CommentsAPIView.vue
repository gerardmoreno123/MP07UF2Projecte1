<script setup>
import { ref, onMounted } from 'vue'

const comments = ref([])
const loading = ref(true)
const error = ref(null)

onMounted(async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments')
    comments.value = await response.json()
  } catch (e) {
    error.value = e
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="min-h-[calc(100vh-8rem)] bg-base-200 p-6">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-3xl font-bold mb-6">Comments</h1>

      <div v-if="loading" class="text-center py-8">
        <span class="loading loading-spinner loading-lg"></span>
      </div>

      <div v-if="error" class="alert alert-error">
        <div class="flex-1">
          <label>Error:</label>
          <p>{{ error }}</p>
        </div>

      <div class="space-y-4">
        <div v-for="comment in comments" :key="comment.id"
             class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">{{ comment.name }}</h2>
            <p class="text-sm opacity-70">{{ comment.email }}</p>
            <p>{{ comment.body }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>