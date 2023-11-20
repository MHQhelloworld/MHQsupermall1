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

/*5.设置双位数*/
const getTwoNum = (num: any) => {
  if (num < 10) {
    return '0' + num
  }
  return '' + num
}

/*6.获取当天00:00:00*/
const getTodayStr = () => {
  const year = new Date().getFullYear()
  const month = new Date().getMonth() + 1
  const day = new Date().getDate()

  // "YYYY-MM-DD 00:00:00"
  return year + '-' + getTwoNum(month) + '-' + getTwoNum(day) + ' ' + '00:00:00'
}

/*7.获取第二天00:00:00*/
const getTomorrowStr = () => {
  let year = new Date().getFullYear()
  let month = new Date().getMonth() + 1
  let day = new Date().getDate()
  // 当年2月份的天数
  const date = new Date(2022, 2)
  date.setDate(0)
  const FebraryDates = date.getDate()
  const day31 = [1, 3, 5, 7, 8, 10, 12]
  const day30 = [4, 6, 9, 11]
  if (month < 12) {
    if (day31.indexOf(month) !== -1 && day === 31 || day30.indexOf(month) !== -1 && day === 30 || month === 2 && day === FebraryDates) {
      month += 1
      day = 1
    } else {
      day += 1
    }
  }
  if (month === 12) {
    if (day31.indexOf(month) !== -1 && day === 31 || day30.indexOf(month) !== -1 && day === 30) {
      year += 1
      month = 1
      day = 1
    }
  }
  // "YYYY-MM-DD 00:00:00"
  return year + '-' + getTwoNum(month) + '-' + getTwoNum(day) + ' ' + '00:00:00'
}
