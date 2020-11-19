<!-- =========================================================================================
     File Name: consult
     Description: 资讯中心
     Component Name: consult
     ----------------------------------------------------------------------------------------
     Item Name:
     Author: srj
     Creation time:  2020-10-26 20:09:08
     Change time:  2020-10-26 20:09:08
========================================================================================== -->
<template>
  <div class="consult">
    <div class="container-wrap">
      <div class="message-type">
        <ul>
          <li @click="current = 1" :class="current === 1 ? 'current' : ''">
            最新消息
          </li>
          <li @click="current = 2" :class="current === 2 ? 'current' : ''">
            健康資訊
          </li>
          <li @click="current = 3" :class="current === 3 ? 'current' : ''">
            媒體報道
          </li>
        </ul>
      </div>
      <div class="message-list">

        <MessageItem v-for="(item,index) in MessageList" :key="index" :itemInfo="item" class="mb-20"></MessageItem>
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
import Nodata from '@/components/common/Nodata'
import Pagination from '@/components/common/Pagination'
import MessageItem from './components/MessageItem'
export default {
  name: 'consult',
  data () {
    return {
      current: 1,
      MessageList: [
        { imgUrl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2311925248,2521631346&fm=26&gp=0.jpg', title: '昨天上海无新增本地新冠肺炎确诊病例，新增4例境外输入病例', date: '2020/06/04 12：22', readNum: 1000 },
        { imgUrl: '', title: '昨天上海无新增本地新冠肺炎确诊病例，新增4例境外输入病例', date: '2020/06/04 12：22', readNum: 1000 },
        { imgUrl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3607060861,4282545411&fm=26&gp=0.jpg', title: '埃及实施公共场所强制戴口罩措施 违者罚款', date: '2020/06/04 12：22', readNum: 1000 },
        { imgUrl: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1237908509,3402766423&fm=26&gp=0.jpg', title: '昨天上海无新增本地新冠肺炎确诊病例，新增4例境外输入病例', date: '2020/06/04 12：22', readNum: 1000 },
        { imgUrl: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3321001490,2413995741&fm=26&gp=0.jpg', title: '昨天上海无新增本地新冠肺炎确诊病例，新增4例境外输入病例新增4例境外输入病例新增4例境外输入病例新增4例境外输入病例  ', date: '2020/06/04 12：22', readNum: 1000 },
        { imgUrl: '', title: '昨天上海无新增本地新冠肺炎确诊病例，新增4例境外输入病例', date: '2020/06/04 12：22', readNum: 1000 }
      ],
      paginationConfig: {
        total: 50,
        currentPage: 1,
        pageSize: 10
      }
    }
  },
  components: { Pagination, Nodata, MessageItem },
  methods: {

    pageChange (index) {
      this.paginationConfig.currentPage = index
    }
  }
}
</script>

<style lang="scss" scoped>
.consult {
  .container-wrap {
    @include flex-center(flex-start,flex-start);
    margin-top: 40px;
    .message-type {
      margin-right: 40px;
      li {
        width: 100px;
        height: 40px;
        border-radius: 2px;
        font-size: 14px;
        font-family: STHeitiSC-Medium, STHeitiSC;
        font-weight: 500;
        color: #222222;
        line-height: 40px;
        text-align: center;
      }
      .current {
        background: #268cff;
        color: #ffffff;
      }
    }
    .message-list {
      // flex: 1;
       width: 860px;
    }
  }
}
</style>
