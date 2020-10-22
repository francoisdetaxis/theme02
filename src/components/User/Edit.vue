<template>
  <div>
    <h1>{{ currentUser }}</h1>
    <h2>Edit your personal information</h2>
  </div>
</template>

<script>
export default {
  name: "Edit",
  props: {
    currentUser: String
  }
}
</script>

<style scoped>

</style>