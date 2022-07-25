<template>
  <div class="inputComponents">
    <h3>input组件使用示例</h3>

    <Input inputType="percent" appendTitle="%" />
    <InputSearch
      :searchValue="searchValue"
      :searchCondition = "searchCondition"
      :selectValue = "selectValue"
      tips="请输入用户名"
      placeholder="请输入"
      @change="typeChange"
      @click="search"
    ></InputSearch>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchValue: '',
      selectValue: '0',
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
        }]
    }
  },
  methods: {
    search() {

    },
    typeChange (val) {
      this.searchValue = ''
      this.selectValue = val
    }
  }
}
</script>

<style lang="scss" scoped>
.inputComponents {
  width: 100%;
  height: 700px;
  padding: 20px;
}
</style>
