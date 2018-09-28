<template>
  <div>
    <h1>about</h1>
    
    <router-link :to="{name:'us'}">us</router-link>
    <router-link to="/about/us">us</router-link>

    <router-link to="/about/you">you</router-link>

    <router-link to="/about/both">both</router-link>

    <router-link to="/products/18">shoes</router-link>
    <router-link :to="{name:'prod', params:{id:18}}">shoes</router-link>

    <router-view name="default"></router-view>
    <router-view name="another"></router-view>
  </div>
</template>

