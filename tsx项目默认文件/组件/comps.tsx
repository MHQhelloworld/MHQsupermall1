// 组件
// @ts-ignore
import {defineComponent, watch} from 'vue'

const comps = defineComponent({
  name: 'comps',
  props: [''],
  setup(props: any, context: any) {
    watch(() => props.logRecord, (newValue: any) => {
      // 监听父组件数据改变后操作
    })

    return {
    }
  },
  render() {
    return (
      <div>
        <style>
          {
            `
            `
          }
        </style>
        <div>
        </div>
      </div>
    )
  }
})

export default comps
