/*1 接口报错提示窗*/
// import { notification } from 'ant-design-vue';
const APINo200 = (res: any, type: any) => {
  if (res.code < 200 || res.code > 299) {
    // @ts-ignore
    notification[type]({
      message: res.data,
      description: res.msg,
    });
  }
}
export { APINo200 }
// import {APINo200} from "xxxx";
// APINo200(res, 'error')


/*2 时间戳转换*/
// import {format} from "date-fns";
// import {parseTime} from "@/common/common";
// format(parseTime(item.create_time), 'yyyy-MM-dd HH:mm:ss')


/**/
