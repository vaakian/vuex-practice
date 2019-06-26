<template>
  <div>
    <Avatar>
      <template v-slot:sloter="props">
        <button @click="show(props.data)">console</button>
      </template>
    </Avatar>
    <strong style="color: red;">我来自store.user->&nbsp;&nbsp;{{ msg }}</strong>
    <input v-model="name" />
    <button @click="SayHello(name)">sayHello</button>
  </div>
</template>
<script>
import { mapMutations, mapActions, mapState } from 'vuex';
import Avatar from './Avatar';
export default {
  data() {
    return {
      name: null
    }
  },
  
  components: {
    Avatar
  },

  computed: {
    ...mapState({
      msg: state => state.user.msg
    })
  },

  methods: {
    ...mapActions({
      SayHello: 'user/SayHello'
    }),
    show(props) {
      console.log(props);
    }
  }
}
</script>

