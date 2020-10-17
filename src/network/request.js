import axios from 'axios'
export function request(config){

  //1.创建axios实例
  const instance=axios.create({
    baseURL:'http://152.136.185.210:8000/api/w6',
    timeout:5000,
  })

  // 2.拦截器
  //2.1请求拦截器
  instance.interceptors.request.use((config)=>{
    // console.log(config)
    return config
  },err =>{
    return Promise.reject(err)
  });
  //2.2响应拦截器
  instance.interceptors.response.use(response =>{
    // console.log(response)
    return response
  }, err =>{
    return Promise.reject(err)
  })

  //3.axios实例的返回值原本就是一个Promise对象，可以直接 retuen出去 then调用
  return  instance(config)
}
