<script setup>
import ActivityPageLayout from '../components/ActivityPageLayout.vue';
import SlideShow from '../components/SlideShow.vue';

import logo from '../assets/images/peer/psm.png';
import slide1 from '../assets/images/peer/spring-soudankai.jpg';
import slide2 from '../assets/images/peer/reply-boxes.jpg';
import slide3 from '../assets/images/peer/toukeidai.jpg';
import slide4 from '../assets/images/peer/training.png';
import slide5 from '../assets/images/peer/fig4.jpg';
import slide6 from '../assets/images/peer/fig5.jpg';
import slide7 from '../assets/images/peer/fig6.jpg';

const slides = [
  { imgSrc: slide1, altText: '春の新入生相談会の様子', caption: '春の新入生相談会の様子' },
  { imgSrc: slide2, altText: 'ピアちゃんのリプライ箱', caption: 'ピアちゃんのリプライ箱' },
  { imgSrc: slide3, altText: '他大学からの来訪対応', caption: '他大学からの来訪対応' },
  { imgSrc: slide4, altText: '研修会', caption: '研修会' },
  { imgSrc: slide5, altText: 'ぐるっと！！ぴあノート（大岡山）', caption: 'ぐるっと！！ぴあノート（大岡山）' },
  { imgSrc: slide6, altText: 'ぐるっと！！ぴあノート（すずかけ台）', caption: 'ぐるっと！！ぴあノート（すずかけ台）' },
  { imgSrc: slide7, altText: 'ぐるっと！！ぴあノート（湯島）', caption: 'ぐるっと！！ぴあノート（湯島）' },
];

const pageData = {
  title: '理工学系ピアサポーター',
  description: `東京科学大学理工学系ピアサポーターでは、学生による学生のための相談活動を行なっています。主に学士課程新入生を対象に、履修を始めとする大学生活についての 様々な相談対応をしています。オープンキャンパスでは受験生の相談も受けています。
          <br />また、Taki Plaza地下1階にて「ピアちゃんのリプライ箱」活動を実施しています。この活動は、日常のつぶやきや悩みを匿名で投書する場を提供し、投函された投書に対してピアサポーターがお返事を記し掲示板に掲載するという形式の活動です。
          <br />2025年には<a href="./news/peer-note-20250716">「ぐるっと！！ぴあノート」活動<span class="material-symbols-outlined open_in_new_icon">
open_in_new
</span></a>も始めました。ぐるっと！！ぴあノートとは大岡山、すずかけ台、湯島の3つのキャンパス間をめぐるつぶやき帳です。ピアちゃんのリプライ箱とは違って、ピアサポーターからのおへんじはありません。思ったことを自由に書いてみてください。`,
  logo: logo
};
</script>

<template>
  <ActivityPageLayout :title="pageData.title" :description="pageData.description" :logo="pageData.logo">
    <template #slideshow>
      <SlideShow :slides="slides" />
    </template>
    <template #details>
      <h3>◇メンバー構成</h3>
      <p>
        19名(学士10名、修士7名、博士2名)<br />※毎年12月～1月に募集があります。詳細は、<a
          href="https://www.titech.ac.jp/student-support/students/extracurricular/jobs-campus/peersupporter"
          >ピアサポーター募集ページ（大学HP）<span class="material-symbols-outlined open_in_new_icon">
open_in_new
</span></a
        >をご確認ください。
      </p>
      <h3>◇大学生活なんでも相談随時受付中</h3>
      <p>
        随時、在学生からの個別相談依頼を受け付けています。<br />
        オンライン相談（zoom）、対面相談、どちらも可能です。希望をお知らせください。
        <br />相談希望者とピアサポーターとの日程調整をおこない、個別に相談日時を設定します。<br />
        ※メール相談は実施しておりません。 <br />個別相談申込URLは<a
          href="https://docs.google.com/forms/d/e/1FAIpQLSeduu8tofnTrfjj2XYPL9LfVXCk2w-vKNNfagnyUQKGvEVp0Q/viewform"
          >こちら<span class="material-symbols-outlined open_in_new_icon">
open_in_new
</span></a
        >
      </p>
      <h3>◇連絡先・リンク</h3>
      <ul>
        <li>
          <a
            href="https://www.titech.ac.jp/student-support/students/counseling/peer"
            >ピアサポートについて（大学HP）</a
          >
        </li>
        <li>
          <a
            href="https://www.titech.ac.jp/enrolled/extracurricular/jobs_campus/peersupporter.html"
            >ピアサポーター募集ページ（大学HP）</a
          >
        </li>
        <li><a href="https://x.com/titech_peer_s">X(旧twitter)</a></li>
        <li>
          <a href="https://www.tmd.ac.jp/peer/"
            >東京科学大学医歯学系ピアサポーター</a
          >
        </li>
      </ul>
    </template>
  </ActivityPageLayout>
</template>