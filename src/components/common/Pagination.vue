<template>
  <!-- 分页组件 -->
  <div class="pagination">
    <span class="page-info">共{{paginationConfig.total}}条记录 第{{pageNum}}页</span>
    <el-pagination
      @current-change="currentChange"
      background
      :current-page.sync="paginationConfig.currentPage"
      :page-size="paginationConfig.pageSize"
      layout="prev, pager, next, jumper"
      :total="paginationConfig.total"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  props: {
    paginationConfig: {
      type: Object,
      required: true
    }
  },
  methods: {
    currentChange (page) {
      this.$emit('pageChange', page)
    }
  },
  computed: {
    pageNum () {
      return (
        this.paginationConfig.currentPage +
        '/' +
        Math.ceil(this.paginationConfig.total / this.paginationConfig.pageSize)
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  margin-top: 40px;
  .page-info {
    font-size: 14px;
    font-weight: 400;
    color: rgba(148, 158, 168, 1);
    line-height: 20px;
  }
  ::v-deep.el-input {
    width: 50px;
  }
  ::v-deep.el-input__inner {
    width: 30px;
  }
}
</style>
