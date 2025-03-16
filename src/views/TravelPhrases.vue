<template>
  <div class="category-page">
    <h2>お店や困ったときに使える英語</h2>
    <ul>
      <li><strong>How much is this?</strong> - これはいくらですか？ <button @click="speak('How much is this?')">発音</button></li>
      <li><strong>Do you have this in another size?</strong> - これの別のサイズはありますか？ <button @click="speak('Do you have this in another size?')">発音</button></li>
      <li><strong>Can I try it on?</strong> - 試着してもいいですか？ <button @click="speak('Can I try it on?')">発音</button></li>
      <li><strong>Where is the fitting room?</strong> - 試着室はどこですか？ <button @click="speak('Where is the fitting room?')">発音</button></li>
      <li><strong>Can I return this?</strong> - これを返品できますか？ <button @click="speak('Can I return this?')">発音</button></li>
      <li><strong>Is this on sale?</strong> - これはセール品ですか？ <button @click="speak('Is this on sale?')">発音</button></li>
      <li><strong>Can I get a discount?</strong> - 割引してもらえますか？ <button @click="speak('Can I get a discount?')">発音</button></li>
      <li><strong>Do you have a smaller size?</strong> - もっと小さいサイズはありますか？ <button @click="speak('Do you have a smaller size?')">発音</button></li>
      <li><strong>Do you have a larger size?</strong> - もっと大きいサイズはありますか？ <button @click="speak('Do you have a larger size?')">発音</button></li>
      <li><strong>Where can I find the cash register?</strong> - レジはどこですか？ <button @click="speak('Where can I find the cash register?')">発音</button></li>
      <li><strong>Can I pay with a credit card?</strong> - クレジットカードで支払えますか？ <button @click="speak('Can I pay with a credit card?')">発音</button></li>
      <li><strong>Where can I find a store nearby?</strong> - 近くの店はどこにありますか？ <button @click="speak('Where can I find a store nearby?')">発音</button></li>
      <li><strong>Do you have a receipt?</strong> - 領収書はありますか？ <button @click="speak('Do you have a receipt?')">発音</button></li>
      <li><strong>How much do I owe you?</strong> - いくら支払えばいいですか？ <button @click="speak('How much do I owe you?')">発音</button></li>
      <li><strong>Do you have change?</strong> - お釣りはありますか？ <button @click="speak('Do you have change?')">発音</button></li>
      <li><strong>Can you wrap this up for me?</strong> - これを包装してもらえますか？ <button @click="speak('Can you wrap this up for me?')">発音</button></li>
      <li><strong>Where is the nearest pharmacy?</strong> - 一番近い薬局はどこですか？ <button @click="speak('Where is the nearest pharmacy?')">発音</button></li>
      <li><strong>Is there a restroom around here?</strong> - ここにトイレはありますか？ <button @click="speak('Is there a restroom around here?')">発音</button></li>
      <li><strong>Can you help me find something?</strong> - 何か探すのを手伝ってもらえますか？ <button @click="speak('Can you help me find something?')">発音</button></li>
      <li><strong>Do you have anything cheaper?</strong> - もっと安いものはありますか？ <button @click="speak('Do you have anything cheaper?')">発音</button></li>
      <li><strong>Can I pay in cash?</strong> - 現金で支払えますか？ <button @click="speak('Can I pay in cash?')">発音</button></li>
      <li><strong>Is this the final price?</strong> - これが最終価格ですか？ <button @click="speak('Is this the final price?')">発音</button></li>
      <li><strong>Can I have the bill, please?</strong> - お勘定をお願いします。 <button @click="speak('Can I have the bill, please?')">発音</button></li>
      <li><strong>Where can I find a taxi?</strong> - タクシーはどこで拾えますか？ <button @click="speak('Where can I find a taxi?')">発音</button></li>
      <li><strong>Can you call a taxi for me?</strong> - タクシーを呼んでもらえますか？ <button @click="speak('Can you call a taxi for me?')">発音</button></li>
      <li><strong>How long will it take?</strong> - どのくらい時間がかかりますか？ <button @click="speak('How long will it take?')">発音</button></li>
      <li><strong>What time do you close?</strong> - 何時に閉店しますか？ <button @click="speak('What time do you close?')">発音</button></li>
      <li><strong>Are you open on weekends?</strong> - 週末は営業していますか？ <button @click="speak('Are you open on weekends?')">発音</button></li>
      <li><strong>Do you accept foreign currency?</strong> - 外国通貨を受け取りますか？ <button @click="speak('Do you accept foreign currency?')">発音</button></li>
      <li><strong>Do you have Wi-Fi?</strong> - Wi-Fiはありますか？ <button @click="speak('Do you have Wi-Fi?')">発音</button></li>
      <li><strong>Where is the nearest ATM?</strong> - 一番近いATMはどこですか？ <button @click="speak('Where is the nearest ATM?')">発音</button></li>
      <li><strong>Can I use my debit card?</strong> - デビットカードは使えますか？ <button @click="speak('Can I use my debit card?')">発音</button></li>
      <li><strong>Is there a discount for students?</strong> - 学生割引はありますか？ <button @click="speak('Is there a discount for students?')">発音</button></li>
      <li><strong>Can I get a gift receipt?</strong> - ギフト用の領収書をもらえますか？ <button @click="speak('Can I get a gift receipt?')">発音</button></li>
      <li><strong>Can I pay in installments?</strong> - 分割払いはできますか？ <button @click="speak('Can I pay in installments?')">発音</button></li>
      <li><strong>Is there a warranty on this?</strong> - これは保証がありますか？ <button @click="speak('Is there a warranty on this?')">発音</button></li>
      <li><strong>Can I exchange this?</strong> - これを交換できますか？ <button @click="speak('Can I exchange this?')">発音</button></li>
      <li><strong>Do you have a customer service desk?</strong> - カスタマーサービスデスクはありますか？ <button @click="speak('Do you have a customer service desk?')">発音</button></li>
      <li><strong>Is there a sale on this item?</strong> - この商品はセール中ですか？ <button @click="speak('Is there a sale on this item?')">発音</button></li>
      <li><strong>How do I use this?</strong> - これはどう使うんですか？ <button @click="speak('How do I use this?')">発音</button></li>
      <li><strong>Can you show me how it works?</strong> - 使い方を教えてもらえますか？ <button @click="speak('Can you show me how it works?')">発音</button></li>
      <li><strong>Is this a popular item?</strong> - これは人気の商品ですか？ <button @click="speak('Is this a popular item?')">発音</button></li>
      <li><strong>Do you have this in another color?</strong> - これの他の色はありますか？ <button @click="speak('Do you have this in another color?')">発音</button></li>
      <li><strong>Do you have a loyalty card?</strong> - ポイントカードはありますか？ <button @click="speak('Do you have a loyalty card?')">発音</button></li>
      <li><strong>Is this item in stock?</strong> - この商品は在庫がありますか？ <button @click="speak('Is this item in stock?')">発音</button></li>
      <li><strong>Can I order this online?</strong> - これをオンラインで注文できますか？ <button @click="speak('Can I order this online?')">発音</button></li>
      <li><strong>Can I try another store?</strong> - 他の店で試すことはできますか？ <button @click="speak('Can I try another store?')">発音</button></li>
      <li><strong>Do you accept returns?</strong> - 返品は受け付けていますか？ <button @click="speak('Do you accept returns?')">発音</button></li>
      <li><strong>Is this fresh?</strong> - これは新鮮ですか？ <button @click="speak('Is this fresh?')">発音</button></li>
      <li><strong>Do you have organic products?</strong> - オーガニック製品はありますか？ <button @click="speak('Do you have organic products?')">発音</button></li>
      <li><strong>Can I get a refund?</strong> - 返金してもらえますか？ <button @click="speak('Can I get a refund?')">発音</button></li>
      <li><strong>Where can I find souvenirs?</strong> - お土産はどこで買えますか？ <button @click="speak('Where can I find souvenirs?')">発音</button></li>
      <li><strong>Are there any special promotions?</strong> - 特別なプロモーションはありますか？ <button @click="speak('Are there any special promotions?')">発音</button></li>
      <li><strong>How do I get a loyalty card?</strong> - ポイントカードはどうやって手に入れますか？ <button @click="speak('How do I get a loyalty card?')">発音</button></li>
      <li><strong>Can I pay with Apple Pay?</strong> - Apple Payで支払えますか？ <button @click="speak('Can I pay with Apple Pay?')">発音</button></li>
      <li><strong>Can I reserve a table?</strong> - テーブルを予約できますか？ <button @click="speak('Can I reserve a table?')">発音</button></li>
      <li><strong>Can you deliver this?</strong> - これを配達してもらえますか？ <button @click="speak('Can you deliver this?')">発音</button></li>
      <li><strong>Do you offer gift wrapping?</strong> - ギフトラッピングはありますか？ <button @click="speak('Do you offer gift wrapping?')">発音</button></li>
      <li><strong>Is it possible to pre-order this?</strong> - これは事前注文できますか？ <button @click="speak('Is it possible to pre-order this?')">発音</button></li>
      <li><strong>Do you have a return policy?</strong> - 返品ポリシーはありますか？ <button @click="speak('Do you have a return policy?')">発音</button></li>
      <li><strong>Can you change the price?</strong> - 価格を変更できますか？ <button @click="speak('Can you change the price?')">発音</button></li>
      <li><strong>How long does the delivery take?</strong> - 配達にはどのくらい時間がかかりますか？ <button @click="speak('How long does the delivery take?')">発音</button></li>
      <li><strong>Do you offer express shipping?</strong> - 速達配送はありますか？ <button @click="speak('Do you offer express shipping?')">発音</button></li>
      <li><strong>Can I use a coupon?</strong> - クーポンは使えますか？ <button @click="speak('Can I use a coupon?')">発音</button></li>
      <li><strong>Do you have vegetarian options?</strong> - ベジタリアン向けのメニューはありますか？ <button @click="speak('Do you have vegetarian options?')">発音</button></li>
      <li><strong>Can I modify my order?</strong> - 注文を変更できますか？ <button @click="speak('Can I modify my order?')">発音</button></li>
      <li><strong>Can you send me a catalog?</strong> - カタログを送ってもらえますか？ <button @click="speak('Can you send me a catalog?')">発音</button></li>
      <li><strong>Do you have this item in stock?</strong> - この商品は在庫がありますか？ <button @click="speak('Do you have this item in stock?')">発音</button></li>
      <li><strong>Do you have this in a different style?</strong> - これの違うスタイルはありますか？ <button @click="speak('Do you have this in a different style?')">発音</button></li>
      <li><strong>Do you accept reservations?</strong> - 予約は受け付けていますか？ <button @click="speak('Do you accept reservations?')">発音</button></li>
      <li><strong>Can I return this item?</strong> - この商品を返品できますか？ <button @click="speak('Can I return this item?')">発音</button></li>
      <li><strong>Do you have a store in the city?</strong> - 市内に店舗はありますか？ <button @click="speak('Do you have a store in the city?')">発音</button></li>
      <li><strong>What’s the opening time?</strong> - 営業開始時間は何時ですか？ <button @click="speak('What’s the opening time?')">発音</button></li>
      <li><strong>Is there a free gift with purchase?</strong> - 購入時に無料のギフトはありますか？ <button @click="speak('Is there a free gift with purchase?')">発音</button></li>
      <li><strong>What’s the store's policy on returns?</strong> - 店舗の返品ポリシーはどうなっていますか？ <button @click="speak('What’s the store\'s policy on returns?')">発音</button></li>
      <li><strong>How do I use the self-checkout?</strong> - セルフチェックアウトの使い方はどうですか？ <button @click="speak('How do I use the self-checkout?')">発音</button></li>
      <li><strong>Do you accept mobile payments?</strong> - モバイル決済は受け付けていますか？ <button @click="speak('Do you accept mobile payments?')">発音</button></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ShopPhrases',
  methods: {
    speak(text) {
      const utterance = new SpeechSynthesisUtterance(text);  
      utterance.lang = 'en-US';  
      utterance.pitch = 1; 
      utterance.rate = 1;   
      speechSynthesis.speak(utterance);  
    }
  }
}
</script>

<style scoped>
.category-page {
  padding: 20px;
  text-align: center;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  font-size: 1.2em;
  margin: 10px 0;
}
strong {
  color: #ff7e5f;
}
</style>
