<script setup lang="ts">
import RecipeCard from '@/components/RecipeCard.vue';
</script>

<template>
  <div class="flex flex-col gap-4">
    <RecipeCard v-for="i in 5" :key="i" />
  </div>
</template>

<style scoped></style>
