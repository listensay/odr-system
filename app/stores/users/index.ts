import type { IResponse, ListData } from "~/types/common"
import type { TUsers } from "./types"

const useUserStore = defineStore('users', () => {
  const list: Ref<TUsers[]> = ref([])
  const page = ref(1)
  const pageSize = ref(10)
  const total = ref(0)
  const totalPages = ref(1)
  const loading = ref(false)


  // 获取列表数据
  const getData = async ()  => {
    loading.value = true
    const result = <IResponse<ListData<TUsers>>> await useRequestGet('/api/users', {
      page: page.value,
      pageSize: pageSize.value
    })
    if(result) {
      list.value = result.data.list
      page.value = Number(result.data.page)
      pageSize.value = Number(result.data.pageSize)
      total.value = result.data.total
      totalPages.value = result.data.totalPages
    }
    loading.value = false
  }

  // 删除数据
  const delDatas = async (ids: number[]) => {
    loading.value = true
    await useRequestDelete('/api/users', {
      ids: [...ids]
    })
    await getData()
  }

  watch([page, pageSize], async () => {
    await getData()
  })

  return {
    getData,
    list,
    page,
    pageSize,
    total,
    totalPages,
    delDatas,
    loading
  }
})

export default useUserStore