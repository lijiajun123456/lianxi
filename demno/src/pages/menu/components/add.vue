<template>
  <div>
    <el-dialog :title="info.title" :visible.sync="info.show">
      <el-form :model="form">
        <!-- 菜单名称 -->
        <el-form-item label="菜单名称" :label-width="formLabelWidth">
          <el-input v-model="form.title"></el-input>
        </el-form-item>
        <!-- 上级菜单 -->
        <el-form-item label="上级菜单" :label-width="formLabelWidth">
          <el-select v-model="form.pid">
            <el-option label="--请选择--" value disabled></el-option>
            <el-option label="顶级菜单" :value="0"></el-option>
          </el-select>
        </el-form-item>
        <!-- 菜单类型 -->

        <el-form-item label="菜单类型" :label-width="formLabelWidth">
          <el-radio v-model="form.type" :label="1">目录</el-radio>
          <el-radio v-model="form.type" :label="2">菜单</el-radio>
        </el-form-item>
        <!-- 菜单图标 -->
        <el-form-item label="菜单图标" :label-width="formLabelWidth" v-if="form.type==1">
          <el-select v-model="form.icon" placeholder="请选择">
            <el-option v-for="item in icons" :key="item" :value="item"></el-option>
          </el-select>
        </el-form-item>
        <!-- 菜单地址 -->
        <el-form-item label="菜单地址" :label-width="formLabelWidth" v-else>
          <el-select v-model="form.url" placeholder="请选择">
            <el-option v-for="item in urls" :key="item" :value="item"></el-option>
          </el-select>
        </el-form-item>
        <!-- 状态 -->
        <el-form-item label="状态" :label-width="formLabelWidth">
          <el-switch
            v-model="form.status"
            active-color="blue"
            inactive-color="grey"
            :active-value="1"
            :inactive-value="2"
          ></el-switch>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancel()">取消</el-button>
        <el-button type="primary" @click="confirm" v-if="info.isAdd">确 定</el-button>
        <el-button type="primary" @click="update" v-else>修 改</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {
  requestAddMenu,
  requestMenuOne,
  requestUpdateMenu
} from "../../../utils/request";
import { successAlert, warningAlert } from "../../../utils/alert";
import { mapGetters, mapActions } from "vuex";

export default {
  props: ["info"],
  data() {
    return {
      form: {
        pid: 0,
        title: "",
        icon: "",
        type: 1,
        url: "",
        status: 1
      },
      icons: [
        "el-icon-s-tools",
        "el-icon-goods",
        "el-icon-picture-outline-round",
        "el-icon-s-home",
        "el-icon-s-shop",
        "el-icon-menu"
      ],
      urls: [
        "home",
        "menu",
        "role",
        "manager",
        "category",
        "specs",
        "goods",
        "member",
        "banner",
        "seckill"
      ],
      formLabelWidth: "120px"
    };
  },
  computed: {
    ...mapGetters({
      list: "menu/list"
    })
  },
  methods: {
    ...mapActions({
      requestMenuList: "menu/listActions"
    }),
    cancel() {
      this.info.show = false;
      this.form = {
        pid: 0,
        title: "",
        icon: "",
        type: 1,
        url: "",
        status: 1
      };
    },
    confirm() {
      requestAddMenu(this.form).then(res => {
        if (res.data.code == 200) {
          successAlert(res.data.msg);
          this.cancel();
          this.requestMenuList();
        } else {
          warningAlert(res.data.masg);
        }
      });
    },
    getDetail(id) {
      requestMenuOne({ id: id }).then(res => {
        this.form = res.data.list;
        this.form.id = id;
      });
    },
    update() {
      requestUpdateMenu(this.form).then(res => {
        if (res.data.code == 200) {
          successAlert(res.data.msg);
          this.cancel();
          this.requestMenuList();
        } else {
          warningAlert(res.data.masg);
        }
      });
    }
  },
  mounted() {
    this.requestMenuList();
  }
};
</script>

<style>
</style>