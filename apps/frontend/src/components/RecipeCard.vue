<template>
  <div class="card">
    <p class="text-body-sm">Lorem Ipsum - Sub Title</p>
    <h2 class="text-heading-md">Lorem ipsum dolor sit amet</h2>
    <p class="text-caption flex justify-between mt-1">
      <span> <span>12 Minutes</span><span> - </span><span>Easy</span> </span>
      <span class="underline more" @click="toggleExpand()">show more...</span>
    </p>
    <AnimatePresence>
      <Motion
        v-if="isExpanded"
        :initial="{ opacity: 0, height: 0 }"
        :animate="{ opacity: 1, height: 'auto' }"
        :exit="{ opacity: 0, height: 0 }"
        :transition="{ duration: 0.3 }"
        style="overflow: hidden"
      >
        <div class="mt-4">
          <p class="text-body-sm text-justify">
            <span>Ingridents: </span> Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Nullam nec sapien vel sapien rutrum congue auctor
            pharetra est.
          </p>
        </div>
        <div class="grid grid-cols-2 text-body-sm mt-4">
          <div>
            <p>Nutrition</p>
            <p>Type</p>
            <p class="mt-2">Calories</p>
            <p>Fat</p>
            <p>Carbohydrates</p>
            <p>Fibers</p>
            <p>Protein</p>
            <p>Salt</p>
          </div>
          <div class="text-end">
            <p>Per Serving</p>
            <p>Amount</p>
            <p class="mt-2">250 kcal</p>
            <p>10 g</p>
            <p>30 g</p>
            <p>5 g</p>
            <p>15 g</p>
            <p>0.5 g</p>
          </div>
        </div>
      </Motion>
    </AnimatePresence>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, ref } from 'vue';
import { AnimatePresence, Motion } from 'motion-v';

defineComponent({
  name: 'RecipeCard',
});

const isExpanded = ref(false);

const toggleExpand = () => {
  isExpanded.value = !isExpanded.value;
};
</script>

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
