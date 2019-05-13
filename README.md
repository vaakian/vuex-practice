# vuex 练习笔记

> create at 2019-5-13 15:58:34

## vuex需要遵守的规则：

  - 应用层级的状态应该集中到单个 `store` 对象中。

  - 提交 `mutation` 是更改状态的唯一方法（通常方法名是使用大写），并且这个过程是同步的。

  - 异步逻辑都应该封装到 `action` 里面。
    - actions进行操作，最后通过mutation修改state
      ```js
        const actions = {
          showMsg({ commit, state, dispatch}) {
            // 1. example: some async request
            axios.get('/api/randQuestion', {
              params:{count: 10}
            })
            .then(res => {
              if(res.status == 200)
                commit('SET_QUESTION', res.data)
                // 使用mutations处理数据后修改state，类似装饰器效果
                // 也可直接state.questions修改，不过需要自己手动处理
              else
                commit('SET_QUESTION', false)
            })
            .catch(err => {
              console.log('error', err)
            })
      
          }
        }
      ```

## 文件之间的关系：

  - store文件夹 - 存放vuex的系列文件

  - store.js（vuex官方使用index.js） - 引入vuex，设置state状态数据，引入getter、mutation和action

  - getters.js - 获取store内的状态

  - mutations.js - 更改store中状态用的函数的存储之地

  - actions.js - 提交mutation以达到委婉地修改state状态，可异步操作
    - actions第一个参数暴露的对象结构
    > commit: 同步操作，mutations
    
    > dispatch: 异步操作，actions -> mutations
    
    > getters: 自己的getters
    
    > rootGetters: 根节点的getters
    
    > rootState: 根节点的状态
    
    > state: 自己的状态


## store中的modules对象

由于使用单一状态树，应用的所有状态会集中到一个比较大的对象。当应用变得非常复杂时，store 对象就有可能变得相当臃肿。

*也就是整个项目所有页面的数据都放在store根里，会导致整个store非常臃肿*

为了解决以上问题，Vuex 允许我们将 store 分割成模块（module）。每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块——从上至下进行同样方式的分割：

假如文件结构如下：
 
- store 
  - modules
    - `home.js`
  - `index.js`
  - `mutations.js`
  - `actions.js`
  - `state.js`
 

`home.js`文件结构

```js
const state = {
  msg: 'i am home'
}
const getters = {}
const actions = {
  // actions 第一个参数暴露了store，使用构
  actionsFunc({state, commit, rootState}, arg) {
    console.log(state, commit, rootState, arg)
  }
}
const mutations = {
  mutationsFunc(state, arg) {
    console.log(state.msg, arg)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
```
`index.js` 文件结构

```js
import home from './modules/home'

// 发现很多项目根部是不写数据的
// import state from './state'
// import actions from './actions'
// import mutations from './mutations'
// import getters from './getters'
export default new Vuex.Store({
  modules: { // 使用store.state.home访问
    home
    // a: home  store.state.a
  },
  // state,
  // actions,
  // mutations,
  // getters
}

```

那么我们可以在组件中使用$store.state.home.msg 访问到`i am home`

2. 辅助函数映射到组件

  - state
    ```js
    import { mapState } from 'vuex'
    import { mapActions } from 'vuex'
    import { mapMutations } from 'vuex'
    import { mapGetters } from 'vuex'
    
    export default {
      data() {
        return { }
      },
      <!-- state -->
      computed: {
        // 方法1 以home为根
        ...mapState('home', {
          homeMsg: state => state.msg
        }),
        // 方法2 常用
        ...mapState({
          homeMsg: state => state.home.msg
        }),
        ...mapGetters({
          someVar: 'home/someVar'
        })
      },
      <!-- mutations or actions -->
      methods: {
        ...mapMutations({
          homeMutationFunc: 'home/mutationFunc',
          rootSomeMutation: 'rootSomeMutation'
        }),
        ...mapActions({
          homeActionFunc: 'home/actionsFunc',
          rootSomeAction: 'rootSomeAction'
        })
      }
    }
    ```
 3. modules中的getters
  
  - mapGetters
    ```js
    import { mapGetters } from 'vuex'
    
    computed: {
      ...mapGetters({
        varName: 'path/varName'
      })
    }
   
    ``` 
    - 调用

        > $store.state&#91;'path/varName'&#93;

        > varNme

 - 使用闭包实现带参数的Getters
    ```js
    const getters = {
      funcName: state => arg => {
        return arg**5
      },
      /*
      funcName: function(state) {
        return function(arg) {
          return arg**5
        }
      }
      */
    }

    export default getters
    ```
    - 调用
      > $store.getters&#91;'path/funcName'&#93;(55)

    ### 其他
    1. 需要处理后返回的数据用`getter`,否则用`mapState`
    2. 需要处理后修改的操作用`commit` > `mutations`
    3. 待续