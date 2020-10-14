<!-- @format -->

<template>
<div>
  <input class="form-input" :class="variant" :placeholder="placeholder" v-model="value"  @change="$emit('change')" />
  <p>{{value}}</p>
</div>
</template>
<script>
  export default {
    name: 'Input',
    props: {
      variant: {
        type: String,
        default: 'default',
      },
      placeholder: {
        type: String,
        default: 'Input Here',
      },
    },
    data() {
        return {
            value: this.value,
        };
    },
  };
</script>
