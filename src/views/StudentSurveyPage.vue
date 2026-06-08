<script setup>
import ActivityPageLayout from '../components/ActivityPageLayout.vue';
import SlideShow from '../components/SlideShow.vue';

import logo from '../assets/images/studentsurvey/logo.png';
import slide1 from '../assets/images/studentsurvey/pr_2026.png';
import slide2 from '../assets/images/studentsurvey/houtei.jpg';
import slide3 from '../assets/images/studentsurvey/houtei-chu.jpg';
import slide4 from '../assets/images/studentsurvey/teigen-sho.png';
import slide5 from '../assets/images/studentsurvey/meeting.png';


const slides = [
  { imgSrc: slide1, altText: '学勢調査2026 7/7まで！', caption: '学勢調査2026 7/7まで！' },
  { imgSrc: slide2, altText: '提言書の内容についての意見交換', caption: '提言書の内容についての意見交換' },
  { imgSrc: slide3, altText: '学勢調査2024 提言書奉呈式', caption: '学勢調査2024 提言書奉呈式' },
  { imgSrc: slide4, altText: '学勢調査2024提言書表紙', caption: '学勢調査2024提言書表紙' },
  { imgSrc: slide5, altText: 'ミーティングの様子', caption: 'ミーティングの様子' },
];


const pageData = {
  title: '学勢調査',
  description: '本学学生に対し、全学的アンケート調査「学勢調査」を2年に1度実施しています。調査項目の設定、調査結果の集計・解析・提言書作成を学生スタッフ主導で実施しています。学生の視点で読み解いたアンケート結果を建設的な提言書として作成し、理事長・学長をはじめとする大学上層部に直接奉呈します。',
  logo: logo
};
</script>

<template>
  <ActivityPageLayout :title="pageData.title" :description="pageData.description" :logo="pageData.logo">
    <template #slideshow>
      <SlideShow :slides="slides" />
    </template>
    <template #details>
      <p>
        <b>7/7まで、学勢調査2026が実施中です！</b><br />
        教務webシステムのアンケート欄から回答できるので、ご協力をお願いします。<br />
        <i>願わなければ、叶いません</i><br />
        みなさんの意見をぜひお寄せください。お待ちしています！
      </p>
      <p>
        学勢調査2024提言書は<a
          href="https://www.siengp.titech.ac.jp/gakuseichousa/2024/teigensho/index.html"
          >こちら</a
        >からご覧いただけます。<br />
        2024年3月28日に、奉呈式を行い、学勢調査2024学生スタッフの代表7人が、大岡山キャンパスにて大竹理事長、田中学長、
        若林理事・副学長（教育担当）、関口執行役副学長（教育担当）に今回の調査概要と各提言を説明しました。詳細については、<a
          href="https://www.isct.ac.jp/ja/news/k3o6hi6mbfy4"
          >こちら</a
        >
        をご確認ください。
      </p>
      <h3>◇メンバー構成</h3>
      <p>10名程度(2025.4現在)</p>
      <h3>◇学生スタッフ募集</h3>
      <p>
        学勢調査2026実施に向け、現在設問検討中です。<br />
        学年問わず募集しています！<br />
        下記の申込書に必要事項をご記入の上、<a
          href="https://docs.google.com/forms/d/e/1FAIpQLSd89pmP_DgFuZaGS4RXO5h2BPOVJ4cpQDsYeHnI4RwB9pKBRQ/viewform"
          >応募フォーム</a
        >か、下記のメールからご応募ください。<br />
        申込書(<a href="https://www.siengp.titech.ac.jp/gakuseichousa/assets/file/application2025.docx">Word版</a>、<a href="https://www.siengp.titech.ac.jp/gakuseichousa/assets/file/application2025.pdf"
          >PDF版</a
        >)<br />
        Email: studentsurvey＠ssc.isct.ac.jp<br />
        （メール送信の際には〔＠〕を@に変更して下さい。）<br />
      </p>
      <h3>◇学勢調査HP・SNS</h3>
      <ul>
        <li>
          学勢調査のHPは<a
            href="http://www.siengp.titech.ac.jp/gakuseichousa/"
            >こちら</a
          >をご覧ください。
        </li>
        <li>
          <a href="https://www.instagram.com/studentsurvey_sciencetokyo/"
            >Instagram</a
          >
        </li>
        <li>
          <a href="https://x.com/gakuseichousa">X（旧Twitter）</a>
        </li>
      </ul>
    </template>
  </ActivityPageLayout>
</template>