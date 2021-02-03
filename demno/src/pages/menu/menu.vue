<template>
  <div>
    <el-button type="primary" @click="add()">添加</el-button>
    <v-add :info="info" ref="add"></v-add>
    <v-list @edit="edit($event)"></v-list>
  </div>
</template>

<script>
import vAdd from "./components/add.vue";
import vList from "./components/list.vue";
export default {
  components: {
    vAdd,
    vList
  },
  data() {
    return {
      info: {
        show: false,
        title: "",
        isAdd: true
      }
    };
  },
  methods: {
    add() {
      this.info.show = true;
      this.info.title = "添加菜单";
      this.isAdd = true;
    },
    edit(id) {
      this.info.show = true;
      this.info.title = "修改菜单";
      this.info.isAdd = false;
      this.$refs.add.getDetail(id);
    }
  }
};
</script>

<style>
</style>