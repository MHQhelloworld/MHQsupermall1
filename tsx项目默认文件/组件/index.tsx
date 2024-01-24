// 组件
// @ts-ignore
import {defineComponent, watch} from 'vue'

const props = {}
const index = defineComponent({
  name: 'index',
  props: [''],
  setup(props: any, cxt: any) {
    watch(() => props, (value: any) => {
    }, {immediate: true, deep: true})

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

export default index
