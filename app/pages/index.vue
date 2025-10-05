<script setup>
import dayjs from '#build/dayjs.imports.mjs'
import useUserStore from '~/stores/users';

const userStore = useUserStore()
await userStore.getData()
const { list, loading } = storeToRefs(userStore)

// 搜索
const searchText = ref('')

// // 表头
const columns = [
  { name: 'avatar', align: 'center', label: '头像', field: 'avatar' },
  { name: 'username', align: 'center', label: '用户名', field: 'username' },
  { name: 'nickname', align: 'center', label: '昵称', field: 'nickname' },
  { name: 'email', align: 'center', label: '邮箱', field: 'email' },
  { name: 'createdAt', align: 'center', label: '创建时间', field: 'createdAt' },
  { name: 'source', align: 'center', label: '来源', field: 'source' },
  { name: 'actions', align: 'center', label: '操作', field: 'actions' },
]

// 多选表格
const selected = ref([])

const handleBatchDelete = async () => {
  const ids = selected.value.map(item => item.id)
  await userStore.delDatas(ids)
}
</script>

<template>
  <div>
    <q-inner-loading :showing="loading" class="absolute z-[999]" />
    <div class="q-pa-md">
      <!-- 工具栏 -->
      <div class="row q-mb-md q-gutter-sm">
        <q-input
          v-model="searchText"
          outlined
          dense
          placeholder="搜索用户名、昵称或邮箱"
          style="width: 300px"
          clearable
        >
          <template #prepend>
            <q-icon name="search" />
          </template>
        </q-input>

        <q-space />

        <q-btn color="primary" label="添加用户" icon="add" @click="handleAdd" />
        <q-btn
          :disable="selected.length === 0"
          color="negative"
          label="批量删除"
          icon="delete"
          @click="handleBatchDelete"
        />
        

      </div>

      <!-- 表格 -->
      <q-table
        v-model:selected="selected"
        flat
        bordered
        :rows="list"
        :columns="columns"
        row-key="id"
        selection="multiple"
      >

        <template #body-cell-avatar="props">
          <q-td :props="props">
            <q-avatar>
              <img src="/default_avatar.png">
            </q-avatar>
          </q-td>
        </template>

        <template #body-cell-createdAt="props">
          <q-td :props="props">
            {{ dayjs(props.row.createdAt).format('YYYY-MM-DD HH:mm:ss')}}
          </q-td>
        </template>

        <template #body-cell-source="props">
          <q-td :props="props">
            {{ props.row.source === '' ? '系统' : props.row.source}}
          </q-td>
        </template>

        <template #body-cell-actions="props">
          <q-td :props="props" style="width: 200px;">
            <q-btn
              flat
              color="primary"
              @click="handleEdit(props.row)"
            >
              编辑
            </q-btn>
            <q-btn
              flat
              color="negative"
              @click="handleDelete(props.row)"
            >
              删除
            </q-btn>
          </q-td>
        </template>
      </q-table>
    </div>
  </div>
</template>