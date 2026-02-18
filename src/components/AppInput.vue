<template>
  <v-text-field
    variant="outlined"
    hide-details="auto"
    :label="label"
    :placeholder="placeholder"
    :type="computedType"
    :hint="computedHint"
    :model-value="modelValue"
    @update:model-value="$emit('update:modelValue', $event)"
    :append-inner-icon="appendIcon"
    :rules="rules"
    :counter="counter"
    @click:append-inner="togglePasswordVisibility"
  ></v-text-field>
</template>

<script setup>
import { computed, ref } from 'vue';

const props = defineProps({
  label: String,
  placeholder: String,
  type: {
    type: String,
    default: 'text',
  },
  modelValue: [String, Number],
  hint: String,
  rules: {
    type: Array,
    default: () => []
  },
  counter: {
    type: Boolean,
    default: false
  },
});

const emit = defineEmits(['update:modelValue']);

const showPassword = ref(false);

const computedType = computed(() => {
  if(props.type === 'password' && showPassword.value) {
    return 'text'
  }
  return props.type;
});

const computedHint = computed(() => {
  if(props.hint) return props.hint;
  if(props.type === 'passowrd') return "Enter your password to access.";
  return '';
});

const appendIcon = computed(() => {
  if(props.type === 'password') {
    return showPassword.value ? 'mdi-eye' : 'mdi-eye-off';
  }
  return undefined;
});

const togglePasswordVisibility = () => {
  if(props.type === 'password') {
    console.log('oi')
    showPassword.value = !showPassword.value;
  }
};
</script>

<style>

</style>