import axios from 'axios'
/**
 * 获取一个新的自定义的axios实例
 */
// 定义拦截器
let ajax = axios.create({
    baseURL: 'http://cdn.z-os.cn:801/api/',
    timeout: 5000,
    withCredentials: false
})
ajax.interceptors.response.use(
  function(response) {
  // 请求成功
    return response
}, function(error) {
    // 请求失败
    console.log('网络请求失败！请检查您的网络设置！')
    return Promise.reject(error)
})

export default ajax