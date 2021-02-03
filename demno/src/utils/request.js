import axios from 'axios'
import qs from 'qs'

const baseUrl = '/api'

axios.interceptors.response.use(res => {
    console.group('本次响应的路径为' + res.config.url)
    console.log(res);
    return res
})

// 添加菜单
export const requestAddMenu = (data) => {
    return axios({
        method: 'post',
        url: baseUrl + '/api/menuadd',
        data: qs.stringify(data)
    })
}
// 菜单列表
export const requestMenuList = (params) => {
    return axios({
        method: 'get',
        url: baseUrl + '/api/menulist',
        params: params
    })
}
//菜单详情
export const requestMenuOne = (params) => {
    return axios({
        method: 'get',
        url: baseUrl + '/api/menuinfo',
        params: params
    })
};
// 修改菜单
export const requestUpdateMenu = (data) => {
    return axios({
        method: 'post',
        url: baseUrl + '/api/menuedit',
        data: qs.stringify(data)
    })
}
// 删除菜单
export const requestDelMenu = (data) => {
    return axios({
        method: 'post',
        url: baseUrl + '/api/menudelete',
        data: data
    })
}