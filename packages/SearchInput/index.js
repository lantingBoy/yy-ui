import InputSearch from './src'

/* istanbul ignore next */
InputSearch.install = function (Vue) {
  Vue.component(InputSearch.name, InputSearch)
}

export default InputSearch
