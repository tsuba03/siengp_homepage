<script setup>
import ookayamaTaiikukan from '../assets/images/bbs/o_monitor1.jpg';
import ookayamaLibrary from '../assets/images/bbs/o_monitor2.jpg';
import ookayamaShokudo from '../assets/images/bbs/o_monitor3.jpg';
import communityLounge from '../assets/images/bbs/o_monitor4.jpg';
import suzukakedaiB1 from '../assets/images/bbs/s_monitor1.jpg';
import suzukakedaiLibrary from '../assets/images/bbs/s_monitor2.jpg';
import suzukakedaiShokudo1 from '../assets/images/bbs/s_monitor3.jpg';
import suzukakedaiShokudo2 from '../assets/images/bbs/s_monitor4.jpg';

const ookayamaMonitors = [
  { name: '大岡山体育館', size: '58インチ(1366×768)', imgSrc: ookayamaTaiikukan },
  { name: '大岡山図書館', size: '58インチ(1366×768)', imgSrc: ookayamaLibrary },
  { name: '大岡山第二食堂', size: '58インチ(1366×768)', imgSrc: ookayamaShokudo },
  { name: 'コミュニティ・ワークラウンジ', size: '55インチ(1209×680)', imgSrc: communityLounge },
];

const suzukakedaiMonitors = [
  { name: 'すずかけ台B1棟', size: '58インチ(1463×838)', imgSrc: suzukakedaiB1 },
  { name: 'すずかけ台図書館', size: '58インチ(1463×838)', imgSrc: suzukakedaiLibrary },
  { name: 'すずかけ台食堂', size: '58インチ(1463×838)', imgSrc: suzukakedaiShokudo1 },
  { name: 'すずかけ台食堂', size: '58インチ(1366×768)', imgSrc: suzukakedaiShokudo2 },
];
</script>

<template>
  <div class="main">
    <router-link to="/bbs/request" class="bbs_request"
      >配信の依頼方法・配信情報の制作について ></router-link
    ><br />
    <p>
      ※2026年4月14日より、フレームサイズがW1227×H910 ピクセルに、データは1MBまでに変更になりました。
      <br>ご依頼は、ssc-bbs [at] ssc.isct.ac.jp までお願いします。（メール送信の際には [at] を小文字の@に変更して下さい。）
    </p>
    <a
      href="https://science-tokyo.app.box.com/folder/286281913755?s=qh7l3avs52e69f4tipnavcmizx1ntbyu"
      class="bbs_request"
      >今週の配信情報 ></a
    >
    <div class="item">
      <h3 class="title">○ 設置個所と放映時間</h3>
      <h5>大岡山キャンパス</h5>
      <div class="display_images">
        <div v-for="monitor in ookayamaMonitors" :key="monitor.name" class="display_image">
          <p>{{ monitor.name }}</p>
          <img :src="monitor.imgSrc" :alt="monitor.name" />
          <p>{{ monitor.size }}</p>
        </div>
      </div>
      <p>
        大岡山図書館　8：45～20：00<br />
        大岡山第二食堂　11：00～20：00<br />
        大岡山体育館　9：00～20：00<br />
        コミュニティ・ワークラウンジ　9：00～20：00
      </p>
      <h5>すずかけ台キャンパス</h5>
      <div class="display_images">
        <div v-for="monitor in suzukakedaiMonitors" :key="monitor.name" class="display_image">
          <p>{{ monitor.name }}</p>
          <img :src="monitor.imgSrc" :alt="monitor.name" />
          <p>{{ monitor.size }}</p>
        </div>
      </div>
      <p>
        すずかけ台B1棟　9：00～20：00
        <br />すずかけ台図書館　8：45～20：00
        <br />すずかけ台食堂　11：00～20：00
      </p>
    </div>
    <div class="item">
      <h3 class="title">○ 設置趣旨</h3>
      <p>
        2005年に実施した学勢調査において、重要情報が思いのほか学生に届いていない、あるいは相互交流のための情報共有が難しいという実態のあることが明らかになりました。
        <br /><br />そこで、2007年度の文部科学省「新たな社会的ニーズに対応した学生支援プログラム（学生支援ＧＰ）」へ申請し採択されたプログラムの一環として、電子掲示板システムを学内各所へ導入する運びとなりました。
        <br />2008年3月、本格的に稼働し始めました。
        従来の掲示板と補完し合いつつ、学生生活に欠かせない情報を迅速に発信することを目的に、履修や授業日程、健康診断などの情報を発信しています。
        <br /><br />学生の皆さんにとっていちばん必要な情報を確実かつ迅速に伝えています。
      </p>
    </div>
  </div>
</template>

<style scoped>
.bbs_request {
  display: inline-block;
  margin-top: 30px;
  color: #fff;
  padding: 10px;
  background-color: #e97142;
  border-radius: 10px;
  border-color: none;
}
.bbs_request:hover {
  color: #e97142;
  border: 0.5px solid #e97142;
  background-color: #fff;
}
.title {
  border-bottom: 0.5px solid #455b86;
}
.display_images {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.display_image {
  width: calc(25% - 10px);
  text-align: center;
  border: 1px solid #455b86;
}
.display_image p {
  font-size: 0.85rem;
}
.display_image img {
  width: 100%;
  height: auto;
  aspect-ratio: 4 / 3;
  object-fit: cover;
}

@media screen and (max-width: 670px) {
  .display_image {
    width: calc(50% - 5px);
  }
}
</style>