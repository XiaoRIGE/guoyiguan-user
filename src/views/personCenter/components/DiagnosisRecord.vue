<!-- =========================================================================================
     File Name: DiagnosisRecord
     Description: 就诊记录
     Component Name: DiagnosisRecord
     ----------------------------------------------------------------------------------------
     Item Name:
     Author: srj
     Creation time:  2020-11-21 10:55:30
     Change time:  2020-11-21 10:55:30
========================================================================================== -->
<template>
  <div class="DiagnosisRecord">
    <div class="container-wrap">
      <el-form ref="form" :model="form">
        <el-row :gutter="20">
          <el-col :span="4">
            <el-form-item>
              <el-select v-model="form.region" placeholder="请选择类型">
                <el-option label="全部类型" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item>
              <el-select v-model="form.region" placeholder="请选择状态">
                <el-option label="全部状态" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item>
              <el-date-picker
                v-model="value1"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
              >
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-button type="primary">查询</el-button>
          </el-col>
        </el-row>
      </el-form>
      <div class="list">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="序号"> </el-table-column>
          <el-table-column prop="name" label="诊所"> </el-table-column>
          <el-table-column prop="address" label="就诊医师"> </el-table-column>
          <el-table-column prop="type" label="就诊方式"> </el-table-column>
          <el-table-column prop="time" label="就诊时间"> </el-table-column>
          <el-table-column prop="status" label="就诊状态"> </el-table-column>
          <el-table-column label="操作">
            <template>
              <el-button type="text">查看</el-button>
            </template>
          </el-table-column>
        </el-table>
        <Nodata v-if="false"></Nodata>
        <Pagination
          :paginationConfig="paginationConfig"
          @pageChange="pageChange"
        ></Pagination>
      </div>
    </div>
  </div>
</template>

<script>
import Pagination from '@/components/common/Pagination'
import Nodata from '@/components/common/Nodata'
export default {
  name: 'DiagnosisRecord',
  components: { Pagination, Nodata },
  data () {
    return {
      form: {
        name: 'shanghai',
        region: 'shanghai'
      },
      paginationConfig: {
        total: 4,
        currentPage: 1,
        pageSize: 10
      },
      tableData: [
        {
          date: '1',
          name: 'xx诊所',
          address: 'xx医师',
          type: '线上就诊',
          time: '2020-01-05',
          status: '已就诊'
        },
        {
          date: '1',
          name: 'xx诊所',
          address: 'xx医师',
          type: '线上就诊',
          time: '2020-01-05',
          status: '已就诊'
        },
        {
          date: '1',
          name: 'xx诊所',
          address: 'xx医师',
          type: '线上就诊',
          time: '2020-01-05',
          status: '已就诊'
        },
        {
          date: '1',
          name: 'xx诊所',
          address: 'xx医师',
          type: '线上就诊',
          time: '2020-01-05',
          status: '已就诊'
        }
      ]
    }
  },
  created () {},
  methods: {
    pageChange (index) {
      this.paginationConfig.currentPage = index
    }
  }
}
</script>

<style scoped lang="scss">
.DiagnosisRecord {
}
</style>
