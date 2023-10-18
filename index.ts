/*1.接口报错提示窗*/
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


/*2.时间戳转换*/
// import {format} from "date-fns";
// import {parseTime} from "@/common/common";
// format(parseTime(item.create_time), 'yyyy-MM-dd HH:mm:ss')


/*3.dom中如果文字超出省略展示title*/
let list = []
const domSetTitle = () => {
  let divs: any = []
  list?.forEach((item: any, index: number) => {
    let divDom = document.querySelector(`.tableleft${index}`) as HTMLElement
    if (divDom.scrollWidth > divDom.clientWidth) {
      divDom.title = divDom.innerText; // 或者使用textContent代替innerText
    }
  })
}
/* 搭配的html
* {
    this.list.map((item: any, index: number) => {
      return (
        <div class={tableleft${index}}></div>
      )
    })
   }
* */

/*4.路由守卫*/
/*
setup() {
  return {
  }
},
// beforeRouteEnter路由守卫
beforeRouteEnter(to, from, next) {
  next()
}*/
