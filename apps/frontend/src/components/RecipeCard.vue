<template>
  <div class="card">
    <p class="text-body-sm">Lorem Ipsum - Sub Title</p>
    <h2 class="text-heading-md">Lorem ipsum dolor sit amet</h2>
    <p class="text-caption flex justify-between mt-1">
      <span> <span>12 Minutes</span><span> - </span><span>Easy</span> </span>
      <span class="underline more">show more...</span>
    </p>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid var(--gray-500);
  background-color: var(--bg-primary);
  border-radius: 20px;
  padding: 14px 12px;
}

.more {
  cursor: pointer;
}
</style>
