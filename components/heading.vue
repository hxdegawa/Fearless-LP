<template lang="pug">
.heading
  h1: slot
</template>

<style lang="scss" scoped>
.heading {
  margin-bottom: 60px;

  @media screen and (max-width: 480px) {
    margin-bottom: 20px;
  }

  h1 {
    display: block;
    text-align: center;
    font-weight: 600;
    font-size: 22px;
    letter-spacing: 2px;
    margin: 0;
  }
}
</style>
