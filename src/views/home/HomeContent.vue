<template>
  <main class="main">
    <section class="appear-animation sec-banner"></section>
    <section class="sec-note">
      <h3 class="title">canvas相关笔记</h3>
      <div class="inner">
        <note-box v-for="note of canvasNoteList" :key="note.id" :note="note"></note-box>
      </div>
      <h3 class="title">其他特效笔记</h3>
      <div class="inner">
        <note-box v-for="note of effectList" :key="note.id" :note="note"></note-box>
      </div>
      <h3 class="title">vue笔记</h3>
      <div class="inner">
        <note-box v-for="note of vueList" :key="note.id" :note="note"></note-box>
      </div>
      <h3 class="title">其他笔记</h3>
      <div class="inner">
        <note-box v-for="note of noteList" :key="note.id" :note="note"></note-box>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NoteBox from './components/NoteBox.vue';

@Component({
  components: {
    NoteBox
  }
})
export default class Content extends Vue {
  private canvasNoteList = [
    {
      id: 1,
      title: 'canvas基础动画',
      subTitle: 'canvas',
      url: '/demo/AnimationBasic',
      code: 'https://github.com/roco2015/blog/blob/master/src/views/demo/AnimationBasic.vue'
    },
    {
      id: 2,
      title: '拖尾效果',
      subTitle: 'canvas',
      url: 'https://8c70426d.wiz03.com/wapp/pages/view/share/s/2cs49J0WR4nJ2Drsge2YCvTd1MFU-y0p2AoU2jEdsA18QJ6M',
      demo: 'TrailingEffect',
      code: 'https://github.com/roco2015/blog/blob/master/src/views/demo/TrailingEffect.vue'
    },
    {
      id: 3,
      title: '线圈波动',
      subTitle: 'canvas',
      url: 'https://8c70426d.wiz03.com/wapp/pages/view/share/s/2cs49J0WR4nJ2Drsge2YCvTd1dlk4q2gQ4Pv274fSi33e2qo',
      demo: 'CoilWave',
      code: 'https://github.com/roco2015/blog/blob/master/src/views/demo/CoilWave.vue'
    },
    {
      id: 4,
      title: '模拟风吹（未完成）',
      subTitle: '主要记录风吹的原理',
      url: 'https://8c70426d.wiz03.com/wapp/pages/view/share/s/2cs49J0WR4nJ2Drsge2YCvTd1dlk4q2gQ4Pv274fSi33e2qo',
      demo: 'WindPrinciple',
      code: 'https://github.com/roco2015/blog/blob/master/src/views/demo/CoilWave.vue'
    }
  ];
  private effectList = [
    {
      id: 1,
      title: '照片墙',
      subTitle: '操作dom了',
      url: 'https://8c70426d.wiz03.com/wapp/pages/view/share/s/2cs49J0WR4nJ2Drsge2YCvTd2ODRC01FDQrn2RyEmE1gppMW',
      demo: 'PicWall',
      code: 'https://github.com/roco2015/blog/blob/master/src/views/demo/PicWall.vue'
    }
  ];
  private vueList = [
    {
      id: 1,
      title: 'v-for为什么不能用index做key',
      subTitle: '附demo',
      url: '/note/vuenote/vforkey',
      code: 'https://github.com/roco2015/blog/blob/master/src/views/note/vuenote/VForKey.vue'
    }
  ];
  private noteList = [
    {
      id: 1,
      title: 'ajax防重复点击',
      subTitle: '通过拦截请求实现',
      url: 'https://8c70426d.wiz03.com/wapp/pages/view/share/s/2cs49J0WR4nJ2Drsge2YCvTd3Y9jPn2MSQoW2daGqh1O7EP0'
    },
    {
      id: 2,
      title: 'webpack添加打包参数，添加环境变量',
      subTitle: 'vue版',
      url: 'https://8c70426d.wiz03.com/wapp/pages/view/share/s/2cs49J0WR4nJ2Drsge2YCvTd0rFAwD08T4zN20JL4g3h1UcB'
    },
    {
      id: 3,
      title: 'webpack打包优化',
      subTitle: 'vue版',
      url: 'https://8c70426d.wiz03.com/wapp/pages/view/share/s/2cs49J0WR4nJ2Drsge2YCvTd2jEO8416uA9F2pNgNP1aCdwI'
    },
    {
      id: 4,
      title: 'v-for中的key，以及key的单独用法',
      subTitle: '·',
      url: 'https://8c70426d.wiz03.com/wapp/pages/view/share/s/2cs49J0WR4nJ2Drsge2YCvTd3cfFKR01JAFx2-XbIR2_aQYt'
    },
    {
      id: 5,
      title: '前端面试题',
      subTitle: '2020整理',
      url: 'https://8c70426d.wiz03.com/wapp/pages/view/share/s/2cs49J0WR4nJ2Drsge2YCvTd2ko3um2xWAuO2Qh7EX3rp3NW'
    },
    {
      id: 6,
      title: '代码优化',
      subTitle: '令人头疼的代码中的常见问题',
      url: '/note/content/codingbetter'
    }
  ];
}
</script>

<style lang="less" scoped>
.main {
  width: 950px;
  margin: 0 auto;
  padding: 0 15px;
  line-height: 34px;
}
.sec-banner {
  position: relative;
  height: 250px;
  background: url('~@/assets/images/home/banner1.png') no-repeat center;
  background-size: contain;
  border-radius: 20px;
  box-shadow: 0 12px 50px -30px rgba(0, 0, 0, 0.6);
  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 10px;
    width: 30px;
    height: 30px;
  }
  &::before {
    left: 10px;
    background: url('~@/assets/images/pin2.png') no-repeat center;
    background-size: contain;
    transform: rotateY(180deg);
  }
  &::after {
    right: 10px;
    background: url('~@/assets/images/pin1.png') no-repeat center;
    background-size: contain;
  }
}
.sec-note {
  margin-top: 60px;
  .title {
    margin-top: 20px;
  }
  .inner {
    display: flex;
    position: relative;
    flex-flow: row wrap;
    align-items: flex-start;
    margin: 0 -15px;
  }
}
@media (max-width: 950px) {
  .main {
    width: 100%;
  }
}
</style>
