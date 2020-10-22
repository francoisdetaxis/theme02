<template>
  <div>
    <h1>TODO: page clocking...</h1>
    <hr>
    <h1>Username = {{ user.username }}</h1>
    <h1>email = {{ user.email }}</h1>
    <h1>id = {{ user.id }}</h1>
  </div>
</template>

<script>
export default {
  name: "Clocking",
  props: {
    user: Object
  }
}
</script>

<style scoped>

</style>