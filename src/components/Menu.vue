<template>
  <ul>
    <li>
      <router-link to="/">Home</router-link>
    </li>
    <li>
      <router-link to="/info">Info</router-link>
    </li>
    <li>
      <router-link to="/search">Search</router-link>
    </li>
    <li>
      <router-link to="/user">User</router-link>
    </li>
    <slot name="myslot" :user="user">
      default 
    </slot>

    <slot name="myslot" user="John">
      default 

    </slot>

    <slot name="myslot" user="Cindy">
      default 
    </slot>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      user: 'Angela'
    }
  }
}
</script>
<style scoped>
ul {
  width: 100%;
  background: bisque;
  padding: 10px 0 10px 0;
}
li {
  margin: 0 5px 0 5px;
  list-style: none;
  display: inline-block;
  font-size: 32px;
}
a {
  text-decoration: none;
  color: gray;
}
</style>

