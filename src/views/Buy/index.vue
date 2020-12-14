<template>
  <!-- 结算2：结算组件页面实现 -->
  <div>
    <!-- 收货地址实现：采用element-Dialog自定义内容 -->
    <div class="address">
      <p class="textadd">
        <el-button type="text" @click="dialogFormVisible = true" v-if="false"
          >添加收货地址</el-button
        >
        <ul>
            <li>
                {{form.name}}
            </li>
            <li>
                {{form.iphone}}
            </li>
            <li>
                {{form.address}}
            </li>
        </ul>

        <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
          <el-form :model="form" class="addForm">
            <el-form-item label="姓名" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="手机号码" :label-width="formLabelWidth">
              <el-input v-model="form.iphone" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="详细地址" :label-width="formLabelWidth">
              <el-input v-model="form.address" autocomplete="off"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false"
              >确 定</el-button
            >
          </div>
        </el-dialog>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogFormVisible: false,
      form: {
        name: '',
        iphone: '',
        address: '',
      },
      formLabelWidth: '120px',
    };
  },
};
</script>

<style lang="scss" scoped> // 导入重置样式
// 收货start
.textadd {
  width: 200px;
  height: 200px;
  text-align: center;
  line-height: 200px;
  border: 1px solid black;
}
.addForm {
    margin-top: -100px;
}

.dialog-footer {
    margin-top: -100px;
}
</style>
