import ajax from './ajax'


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