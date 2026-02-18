<template>
  <v-btn
    :append-icon="appendIcon"
    :variant="variant"
    :disabled="disabled"
    :loading="loading"
    :intent="intent"
    :rounded="rounded"
    :color="colorBtn"
    @click="$emit('click')"
  >
    {{ title }}
  </v-btn>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  appendIcon: {
    type: String,
    default: 'undefined'
  },
  variant: {
    type: String,
    default: 'tonal'
  },
  intent: {
    type: String,
    default: 'primary'
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false
  },
  title: String,
  rounded: String,
});

defineEmits(['click']);

const colorBtn = computed(() => {
  if(props.intent === 'primary') return 'indigo-darken-3';
});
</script>

<style>

</style>