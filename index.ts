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

/*8.获取user_id*/
/*
import {useUserStore} from "@/store/user/user";
const userStore = useUserStore()
(userStore.getUserInfo as UserInfoRes).id
*/

/**
 * 9.空置转换自定义值
 * @param item 待转换值
 * @param returnData 空置时转换的自定义值
 * @example
 * let a = null
 * emptyDataChange(a, '123')
 * 结果 a === 123
 */
const emptyDataChange = (item: any, returnData: any) => {
  if (item === '' || item === null || item === undefined) {
    return returnData
  } else {
    return item
  }
}

/*10.vue3 watch深度监听*/
// watch(监听的数据, 副作用函数, 配置对象)
// watch(() => obj, (newVal: any, oldVal: any) => {}, {immediate: true, deep: true})

/*11.下载*/
const downloadFn = (xlsxData: any, name: any) => {
  // 将 XLSX 数据转化为 Blob 对象
  // const blob = new Blob([xlsxData], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  const blob = new Blob([xlsxData], { type: 'application/pdf' });

  // 创建下载链接
  const downloadLink = document.createElement('a');
  downloadLink.href = URL.createObjectURL(blob);
  downloadLink.download = `${name}`; // 下载文件名

  // 点击下载链接触发下载
  downloadLink.click();

  // 清理创建的临时对象
  URL.revokeObjectURL(downloadLink.href);
}

/*12.剔除数组中重复的元素*/
const deleteSameArr = (returnArr, sameArr) => {
  for (let i1 = 0, len1 = returnArr.length; i1 < len1; i1++) {
    for (let i2 = 0, len2 = sameArr.length; i2 < len2; i2++) {
      if (returnArr[i1] === sameArr[i2]) {
        returnArr.splice(i1, 1)
        i1--
      }
    }
  }
}

/*13.生成二维码*/
/*import QRCode from 'qrcode';
QRCode.toDataURL(
  'https://www.baidu.com/',{
    // color: {
    //   dark:"#010599FF",
    //   light:"#FFBF60FF"
    // }
  }
).then((url:any) => {
  // 获取到url后即可在页面使用--二维码图片
  console.log('url', url)
  data.decodedImageData = url
}).catch((e:any) => {
    console.log('e', e)
  })*/
/*<div>
  <img src={this.data.decodedImageData} />
</div>*/

/*14.数值判断是否从MB0转换成GB (四舍五入, 保留两位小数)*/
const MB_TO_GB = (v) => {
  let num = +v
  if (num < 1024) {
    if (num.toString().indexOf('.') !== -1) {
      let n1 = num.toString().split(".")[1].length
      if (n1 > 2) {
        return +num.toFixed(2) + 'MB'
      }
    }
    return num + 'MB'
  } else {
    let n2 = (num / 1024).toString()
    if (n2.indexOf('.') !== -1) {
      if (n2.split(".")[1].length > 2) {
        return (num / 1024).toFixed(2) + 'GB'
      }
    }
    return (num / 1024) + 'GB'
  }
}

/*15.js复制*/
const copyLink = (link) => {
  navigator.clipboard.writeText(link)
    .then(function() {
      console.error('已复制到剪贴板');
    })
    .catch(function(error) {
      console.error('Failed to copy link: ', error);
    });
}
/*使用示例：copyLink('https://example.com')
请注意，使用 navigator.clipboard.writeText() 方法需要用户授权，只能在用户交互（例如点击按钮）后调用。这可以提高安全性，避免恶意网站滥用剪贴板功能。*/


/*16.null校验*/
const isNullOrNot = (v, r) => {
  return v === null ? null : r
}



