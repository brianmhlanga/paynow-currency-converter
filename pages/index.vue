
import Section_one from '~/components/section_one.vue';
<template>
    <NuxtLayout name="default">
      <hero />
      <Section_one />
    </NuxtLayout>
  </template>
  
  <style lang="postcss" scoped>
  .badge {
    @apply inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700;
    &:hover {
      @apply bg-gray-300;
    }
  }
  </style>