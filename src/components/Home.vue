<template>
  <div class="Home">
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
    <h3>questions: {{ questions }}</h3>
    <h3>categories: {{ categories }}</h3>
    <input type="text" v-model.lazy="homeArg">
    
    <button @click="randQuestion(homeArg)">randQuestion</button>

    <button @click="getCategories">getCategories</button>
    
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { mapActions } from 'vuex'
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'
export default {
  name: 'Home',
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
      questions: state => state.home.questions,
      categories: state => state.home.categories,
      homeMsg: state => state.home.msg, //访问modules.home的state
      // homeMsg: 'home/msg' 不能这么访问，只有mutations, actions, getters才可以
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
      randQuestion: 'home/randQuestion',
      getCategories: 'home/getCategories'
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
