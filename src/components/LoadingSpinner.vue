<template>
  <div class="flex items-center justify-center p-8">
    <div class="relative">
      <!-- Outer spinning ring -->
      <div class="w-16 h-16 border-4 border-blue-200 dark:border-gray-700 rounded-full animate-spin border-t-blue-600 dark:border-t-blue-400"></div>
      
      <!-- Inner pulsing dot -->
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-blue-600 dark:bg-blue-400 rounded-full animate-pulse"></div>
    </div>
    
    <!-- Loading text -->
    <div class="ml-4" v-if="text">
      <p class="text-gray-700 dark:text-gray-300 font-medium">{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoadingSpinner',
  props: {
    text: {
      type: String,
      default: 'Loading...'
    }
  }
}
</script>
