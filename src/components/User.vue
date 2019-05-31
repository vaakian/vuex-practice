<template>
  <div>
    {{ msg }}
    <input v-model="name" />
    <button @click="SayHello(name)">sayHello</button>
  </div>
</template>
<script>
import { mapMutations, mapActions, mapState } from 'vuex'
export default {
  data() {
    return {
      name: null
    }
  },
  computed: {
    ...mapState({
      msg: state => state.user.msg
    })
  },
  methods: {
    ...mapActions({
      SayHello: 'user/SayHello'
    })
  }
}
</script>

