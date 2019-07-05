import axios from 'axios'
/**
 * 获取一个新的自定义的axios实例
 */

let ajax = axios.create({
    baseURL: 'http://cdn.z-os.cn:801/api/',
    timeout: 5000,
    withCredentials: false
})
// request拦截器 => 请求参数处理（请求前），回调函数参数：config, error
ajax.interceptors.request.use(config => {
  // Loading.show() 可以使某个加载窗口显示，在response后隐藏，可以限时
  config.method == 'get' 
    ? console.log('get method')
    : console.log(`${config.method} other method`);
}, error => {
  // Error.show()
  Promise.reject(error);
})
// response拦截器 => 处理响应，回调函数参数：response, error
ajax.interceptors.response.use(
  function(response) {
  // 请求成功，相当于 return Promise.resolve(response)
    console.log('success!');
    return response
}, function(error) {
    // 响应异常
    console.log('网络请求失败！请检查您的网络设置！');
    return Promise.reject(error)
})

export default ajax