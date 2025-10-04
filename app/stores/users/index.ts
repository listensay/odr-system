import type { IResponse, ListData } from "~/types/common"
import type { TUsers } from "./types"

const useUserStore = defineStore('users', () => {
  const list: Ref<TUsers[]> = ref([])
  const currentPage = ref(1)
  const pageSize = ref(10)
  const total = ref(0)
  const totalPages = ref(0)

  const getData = async ()  => {
    const result = <IResponse<ListData<TUsers>>> await useRequestGet('/users')
    if(result) {
      list.value = result.data.list
      currentPage.value = result.data.currentPage
      pageSize.value = result.data.pageSize
      total.value = result.data.total
      totalPages.value = result.data.totalPages
    }
  }

  return {
    getData,
    list,
    currentPage,
    pageSize,
    total,
    totalPages
  }
})

export default useUserStore