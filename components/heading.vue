<template lang="pug">
.heading
  h1: slot
</template>

<style lang="scss" scoped>
.heading {
  h1 {
    display: block;
    text-align: center;
    font-weight: 600;
    font-size: 22px;
    letter-spacing: 2px;
  }
}
</style>
