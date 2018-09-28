<template>
  <div>
    <div>
      <router-link to="/about">About</router-link>
      <router-link to="/products">Products</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>