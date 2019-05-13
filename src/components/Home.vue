<template>
  <div class="hello">
    <h2>
      {{ $store.state.home.msg }}
      <br>
      {{ homeMsg }}
      <br>
      getters: {{ homeUpperMsg }}
      <!-- <br>
      getters with arg: {{ $store.getters['home/withArg'](home) }} -->
      <br>
      mapGetters with arg: 
      <ul>
        <li v-for="(item, key) in withArg(homeArg)" :key="key">
          {{ key }}: {{ item.name }} -> {{ item.age }}
        </li>
      </ul>
    </h2>
    <input type="text" v-model="homeArg">
    
    <button @click="randQuestion('5')">randQuestion</button>
    
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { mapActions } from 'vuex'
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'
export default {
  name: 'HelloWorld',
  data() {
    return {
      homeArg: 5,
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created() {
    console.log(this.$store)
  },
  computed: {
    ...mapGetters({
      homeUpperMsg: 'home/upperMsg',
      withArg: 'home/withArg'
    }),
    // 方法1 
    ...mapState({
      homeMsg: state => state.home.msg, //访问modules.home的state
      // homeMsg: 'home/msg' 不能这么访问，只有mutations, actions才可以
    })
    /* 
    方法2 以home为根
    ...mapState('home', {
      homeMsg: state => state.msg
    })
    */
  },
  methods: {
    ...mapActions({
      randQuestion: 'home/randQuestion'
    }),
    ...mapMutations({
      homeShowMsg: 'home/showMsg'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
/* li {
  display: inline-block;
  margin: 0 10px;
} */
a {
  color: #42b983;
}
</style>
