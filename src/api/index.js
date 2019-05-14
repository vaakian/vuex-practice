import ajax from './ajax'
// 导入已经封装好的ajax请求

function randQuestion(params) {
  return ajax({
    url: 'randQuestion', 
    method: 'get',
    params: params
  })
}

function getCategories() {
  return ajax({
    url: 'getCategories',
    method: 'get'
  })
}

export default {
  randQuestion,
  getCategories
}