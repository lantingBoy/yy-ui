<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <InputSearch
      tips="请输入用户名"
      :searchValue="searchValue"
      :selectValue="selectValue"
      @click="search"
      @change="typeChange"
      :searchCondition="searchCondition"
    ></InputSearch>
    <Input placeholder="nihao"/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import SearchInput from '../packages/SearchInput'

// import {Input} from '../lib/index.umd.min.js'
export default {
  name: 'App',
  components: {
    // HelloWorld,
    // SearchInput,
    // Input
  },data(){
    return{
       searchValue: '', // 查询条件
      selectValue: '0', // 初始化查询条件
      searchCondition: [
        {
          label: '新增待审批',
          value: '0'
        },
        {
          label: '新增已通过',
          value: '1'
        },
        {
          label: '新增已驳回',
          value: '2'
        }
      ]
    }
  },
  methods:{
      search (val) {
      console.log('点击查询按钮', val)
    },
    typeChange (val) {
      this.searchValue = ''
      this.selectValue = val
    }
  }


}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
