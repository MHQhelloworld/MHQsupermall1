 // @ts-ignore
import {axios} from "@/service/service";

//通过零代码调用策略管理的接口
export function zeroCodeCall(data: any): any {
  return axios({
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    transformRequest: (data) => JSON.stringify(data),
    url: `/api/get_access`,
    method: 'post',
    data:data
  })
}
