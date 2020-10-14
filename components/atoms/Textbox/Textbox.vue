<!-- @format -->

<template>
  <textarea class="textbox" :class="variant" :placeholder="placeholder" :value="value" />
</template>
<script>
  export default {
    name: 'Textbox',
    props: {
      variant: {
        type: String,
        default: 'default',
      },
      placeholder: {
        type: String,
        default: 'Enter text Here',
      },
      value: {
        type: String,
        default: '',
      },
    },
  };
</script>
