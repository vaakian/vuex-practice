<template>
  <div>
    i am avatar.
    <slot name="sloter" :data="this">
      default content
    </slot>
  </div>
</template>
<script>
export default {
  data() { 
    return {
      age: 123,
      msg:'我是avatar组件'
    }
  },
  methods: {
    sayHello() {
      console.log(this.age);
    }
  }
}
</script>
