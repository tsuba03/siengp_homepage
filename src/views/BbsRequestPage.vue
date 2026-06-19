<script setup>
import kotira from '../assets/files/bbs/202604_siengp_bbs_format.pptx?url';
import framePattern from '../assets/images/bbs_request/frame_pattern.png';
import slideExample from '../assets/images/bbs_request/slide_example.jpg';
import BadSlide from '../assets/images/bbs_request/bad_slide.PNG';
import GoodSlide from '../assets/images/bbs_request/good_slide.PNG';
</script>
<template>
  <div class="main">
    <h3 style="color: #e97142">配信の依頼方法・配信情報の制作について</h3>
    <p>
      ※2026年4月14日より、フレームサイズがW1227×H910 ピクセルに、データは1MBまでに変更になりました。
      <br>ご依頼は、ssc-bbs [at] ssc.isct.ac.jp までお願いします。（メール送信の際には [at] を小文字の@に変更して下さい。）
    </p>
    <div class="item">
      <h3 class="title">電子掲示板の配信について</h3>
      <ul>
        <li>配信希望の際は、大岡山学生支援センター未来人材育成支援室（学生活動支援）まで配信ファイルをお送りください。<br/><b>Email : ssc-bbs [at] ssc.isct.ac.jp</b><br/>
          （メール送信の際には [at] を小文字の@に変更して下さい。）
        </li>
        <li>配信依頼受付は、配信を希望する１週間前の月曜〆切とさせていただきます。</li>
        <li>配信希望の際は、配信希望期間をお知らせ下さい。<br/>配信期間は1週間単位（月曜～金曜）とし、最大4週間を目安にご依頼ください。</li>
        <li>ディスプレイ画面右側に「今日の配信情報」として配信画像一覧を掲載しています。
            <br/>「今日の配信情報」に掲載する画像タイトルを25文字以内でお知らせください。</li>
        <li>1回の配信枠は最大16枠（16ファイル）です。<br/>
            先着順で受付を行いますが、同一部局で複数配信依頼の場合、配信枠を調整させていただく事がございます。
            <br/>複数ファイルをご依頼の場合は、優先順位をお知らせください。</li>
        <li>配信に関しましては他部門との調整をさせていただきます。</li>
        <li>土日祝は配信しておりません。</li>
      </ul>
    </div>

    <div class="item">
      <h3 class="title">○ 配信情報の制作について</h3>
      <ul>
        <li>フレームサイズ：W1227×H910（ピクセル）
            <br/>※下記フレームパターンのH1 ※当室の電子掲示板用フォーマットは<a :href="kotira">こちら</a>
        </li>
        <li>データの保存形式：JPEG形式（パワーポイント形式ですと当室にてファイルを開いた際にレイアウトがずれてしまうことがあります。かならずJPEG形式で保存したファイルをご送付ください）</li>
        <li>データは、1MBまでが望ましいです。超えた場合は、配信できないことがあります。</li>
        <li>日本語表記版と英語表記版など、内容が同一の配信情報は一枚にまとめてご依頼ください。</li>
      </ul>
    </div>
    <div class="item">
      <h3 class="title">その他注意事項</h3>
        <ul>
          <li>制作していただいた情報は、フレームパターンのH1部分に配信されます。<br/>（H2には「今日の配信情報一覧」が、S1にはテロップで大岡山学生支援センター未来人材育成支援室（学生活動支援）連絡先等が配信されます）。</li>
        </ul>
        <div class="frame_images">
          <div class="frame_image">
            <p>フレームパターン</p>
            <img :src="framePattern" alt="フレームパターン" />
          </div>
          <div class="frame_image">
            <p>サンプル</p>
            <img :src="slideExample" alt="サンプル" />
          </div>
        </div>
        <ul>
          <li>配信情報は、1枚につき15秒で配信されます。15秒の配信では、詳細な文字情報を読みとることは非常に難しいです。1枚に掲載される文字情報は少ないことが望まれます</li>
          <li>ディスプレイでは、小さい文字、薄い文字は、かすれたり歪んだり、非常に読みづらくなります。<br/>フォントは太字が使用されていることが望まれます。</li>
          <li>配信ファイルには、主催者名を入れてください。<br/>主催が外部の団体の場合は、共催、協賛などに本学の部署名を入れてください。</li>
          <li>お送りいただいた配信情報が、サイズや保存形式が不適切だったり、文字情報が多すぎたり、文字が小さすぎたり等する場合には、修正をお願いします。</li>
        </ul>
        <p>配信情報見本</p>
                <div class="frame_images">
          <div class="frame_image">
            <p>良い例</p>
            <img :src="GoodSlide" alt="良い例" />
          </div>
          <div class="frame_image">
            <p>悪い例</p>
            <img :src="BadSlide" alt="悪い例" />
          </div>
        </div>
    </div>
  </div>
</template>

<style scoped>
.item {
  margin-top: 2rem;
}
.title {
  border-bottom: 0.5px solid #455b86;
}
ol, ul {
  margin-left: 2rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
li {
  line-height: 1.5rem;
  list-style-type: disc;
}
ol > li {
  list-style-type: decimal;
}
.frame_images {
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin: 1rem 0;
}
.frame_image {
  width: calc(50% - 10px);
  text-align: center;
  border: 1px solid #ccc;
  padding: 10px;
  box-sizing: border-box;
}
.frame_image p {
  margin: 0 0 0.5rem;
  font-weight: bold;
}
.frame_image img {
  width: 100%;
  height: auto;
  border: 1px solid #eee;
}
@media screen and (max-width: 670px) {
  .frame_images {
    width: 100%;
  }  
}
</style>