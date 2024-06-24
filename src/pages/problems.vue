<template>
  <v-card flat>
    <v-card-title class="d-flex align-center pe-2">
      题库
      <v-spacer></v-spacer>
      <v-text-field v-model="search" density="compact" label="Search" prepend-inner-icon="mdi-magnify"
        variant="solo-filled" flat hide-details single-line></v-text-field>
    </v-card-title>
    <v-divider></v-divider>
    <v-data-table-server v-model:items-per-page="itemsPerPage" :headers="headers" :items="showItems"
      :items-length="totalItems" :loading="loading" :search="search" item-value="name"
      @update:options="loadItems"></v-data-table-server>
    <!-- @update:options="loadItems" -->
  </v-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const search = '';
const headers = [
  { title: '状态', key: 'status', align: 'start' as 'start', width: '5%', sortable: false },
  { title: '#', key: 'id', align: 'start' as 'start', sortable: true },
  { title: '题目', key: 'name', align: 'start' as 'start', sortable: true },
  { title: '提交', key: 'count', align: 'start' as 'start', sortable: true },
  { title: '通过', key: 'pass', align: 'start' as 'start', sortable: true },
];
const showItems = ref<problems.ReceiveItems[]>([]);
const itemsPerPage = ref(5);
const totalItems = ref(3);
const loading = ref(true);
import * as problems from '@/api/problems';
async function loadItems({ page, itemsPerPage, sortBy }: problems.SendParam) {
  const { items, total } = await problems.queryTest({ page, itemsPerPage, sortBy });
  showItems.value = items;
  totalItems.value = total;
  loading.value = false;
};

</script>
