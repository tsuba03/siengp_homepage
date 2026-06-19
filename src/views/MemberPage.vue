<template>
  <div class="main">
    <div class="contents">
      <div class="txt full-width">
        <h3 class="title">学生支援センター自律支援実施委員会<br />委員名簿</h3>
      </div>
    </div>
    <h3 class="year-title">2026年度</h3>

    <div class="member-table">
      <h3 class="sub_title">担当教員</h3>
      <table>
        <thead>
          <tr>
            <th>名前</th>
            <th>主な役割</th>
            <th>所属</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>伊東　幸子</td>
            <td>未来人材育成支援室長/学勢調査</td>
            <td>学生支援センター　教授</td>
          </tr>
          <tr>
            <td>山田　恵美子</td>
            <td>委員長/学勢調査/ピアサポート/ボランティア/電子掲示板/学生クラウドファンディング</td>
            <td>学生支援センター　マネジメント准教授</td>
          </tr>
          <tr>
            <td>鍵　直樹</td>
            <td>学勢調査主査</td>
            <td>環境・社会理工学院　教授　（建築学系）</td>
          </tr>
          <tr>
            <td>弓山　達也</td>
            <td>ボランティア/学勢調査</td>
            <td>リベラルアーツ研究教育院　教授<br />（社会・人間科学系）</td>
          </tr>
          <tr>
            <td>猪原　健弘</td>
            <td>学勢調査</td>
            <td>リベラルアーツ研究教育院　教授<br />（社会・人間科学系）</td>
          </tr>
          <tr>
            <td>長谷川　純</td>
            <td>相談役/学勢調査/電子掲示板/<br />学生クラウドファンディング</td>
            <td>総合研究院　准教授<br />（ゼロカーボンエネルギー研究所）</td>
          </tr>
          <tr>
            <td>太田　絵里</td>
            <td>FLAP/学勢調査</td>
            <td>アントレプレナーシップ教育機構　特任教授</td>
          </tr>
          <tr>
            <td>高田　純</td>
            <td>ピアサポート/学勢調査</td>
            <td>保健管理センター　准教授</td>
          </tr>
          <tr>
            <td>岡村 哲至</td>
            <td>学勢調査</td>
            <td>学生支援センター　特命教授</td>
          </tr>
        </tbody>
      </table>

      <h3 class="sub_title">事務担当</h3>
      <table>
        <thead>
          <tr>
            <th>名前</th>
            <th>所属</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>田中　功一</td>
            <td>学生支援課長</td>
          </tr>
          <tr>
            <td>加藤　美和子</td>
            <td>学生支援課支援企画グループ長</td>
          </tr>
          <tr>
            <td>秋葉　俊平</td>
            <td>学生支援課支援企画グループ専門職</td>
          </tr>
          <tr>
            <td>奈須野　美穂</td>
            <td>学生支援センター事務支援員（2026年4月末日まで）</td>
          </tr>
          <tr>
            <td>安藤　教子</td>
            <td>学生支援センター事務支援員</td>
          </tr>
          <tr>
            <td>樋口　恵美</td>
            <td>学生支援センター事務支援員（2026年6月1日着任）</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="note">
      2024年度9月末日までの委員名簿に関しましては<a href="http://www.siengp.titech.ac.jp/team.html" target="_blank" rel="noopener noreferrer">こちら</a>をご覧ください。
    </p>
  </div>
</template>

<style scoped>
.txt.full-width {
  width: 100%;
}

.year-title {
  /* text-align: center; */
  font-weight: normal;
  margin-top: 2rem;
}
.member-table {
  margin: 2rem auto 0;
  width: 100%;
}
.sub_title {
  border-bottom: 1px solid #ccc;
  padding-bottom: 0.5rem;
  margin-top: 2rem;
  font-size: 1.2rem;
}
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  border: 1px solid #ccc;
}
th, td {
  padding: 0.8rem;
  border: 1px solid #ccc;
  text-align: left;
  vertical-align: top;
}
th {
  background-color: #f2f2f2;
  font-weight: bold;
}
tbody tr:nth-child(odd) {
  background-color: #f9f9f9;
}
td:nth-child(1) {
  width:20%;
}
td:nth-child(2) {
  width:40%;
}
.note {
  margin-top: 2rem;
}
</style>