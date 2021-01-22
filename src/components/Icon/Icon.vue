<template>
  <i
    :class="[`mdi mdi-${name}`, className]"
    :style="{
      color,
      fontSize: size
    }"
  />
</template>

<script>
// more icons in https://materialdesignicons.com/
export default {
  props: {
    name: String,
    className: String,
    color: String,
    size: {
      type: String,
      default: "1.5rem"
    }
  }
};
</script>
