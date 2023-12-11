/*公共原始模板*/
// @ts-ignore
import BreadCrumb from "@/layouts/content/components/breadcrumb"
// @ts-ignore
import {defineComponent, onMounted, reactive, ref, toRefs, toRaw} from 'vue';
// @ts-ignore
import styles from './index.module.scss'

export default defineComponent({
  name: "",
  setup() {
    onMounted(() => {
    })

    return {

    };
  },
  render() {
    return (
      <div>
        <style>{
          `
          `
        }
        </style>
        <BreadCrumb/>

      </div>
    )
  }
})
