import Vue from 'vue'
const vm = new Vue()
export const successAlert = (msg) => {
    vm.$message({
        message: msg,
        type: 'success'
    });
}
// 警告消失提示
export const warningAlert = (msg)=>{
    vm.$message({
      message: msg,
      type: 'warning'
    });
  }
  
  // 错误提示
  export const errorAlert = (msg)=>{
    vm.$message.error(msg);
  }