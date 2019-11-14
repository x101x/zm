<template>
  <div id="app">
    <el-button :plain="true" @click="openVn">VNode</el-button>
    <el-row tag="div" :jiang='20'>
      <el-col :span='4'>col-1</el-col>
      <el-col :span='16' :offset='4'>col-2</el-col>
    </el-row>

    <!-- <HelloWorld></HelloWorld> -->
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import ElRow from "./components/el-row";
import ElCol from "./components/el-col";
export default {
  name: "App",
  components: {
    HelloWorld,
    ElRow,
    ElCol
  },
  methods: {
    openVn() {
      const h = this.$createElement;
      this.$message({
        message: h("p", null, [
          h("span", null, "内容可以是 "),
          h("i", { style: "color: teal" }, "VNode")
        ])
      });
    }
  }
};
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
</style>
