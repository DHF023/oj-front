<template>
  <v-app-bar app>
    <v-toolbar>
      <v-toolbar-title>Online Judge</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn @click="goto('/')">首页</v-btn>
        <v-btn @click="goto('/problems')">题库</v-btn>
        <v-btn @click="goto('/records')">提交记录</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </v-app-bar>
</template>

<script lang="ts">

import { useRouter } from 'vue-router';
export default defineComponent({
  setup() {
    const router = useRouter();
    function goto(path: string) {
      router.push(path);
    }
    return {
      goto
    }
  }
})
</script>