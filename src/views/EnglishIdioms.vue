<template>
  <div class="category-page">
    <h2>英語のイディオム</h2>
      <ul>
        <li><strong>Break the ice</strong> - 会話を始める <button @click="speak('Break the ice')">発音</button></li>
        <li><strong>Bite the bullet</strong> - 辛いことを我慢する <button @click="speak('Bite the bullet')">発音</button></li>
        <li><strong>Hit the sack</strong> - 寝る <button @click="speak('Hit the sack')">発音</button></li>
        <li><strong>Under the weather</strong> - 体調が悪い <button @click="speak('Under the weather')">発音</button></li>
        <li><strong>Break a leg</strong> - 幸運を祈る（演技をする前など） <button @click="speak('Break a leg')">発音</button></li>
        <li><strong>Burn the midnight oil</strong> - 夜遅くまで働く <button @click="speak('Burn the midnight oil')">発音</button></li>
        <li><strong>Once in a blue moon</strong> - ごく稀に <button @click="speak('Once in a blue moon')">発音</button></li>
        <li><strong>Hit the nail on the head</strong> - まさにその通り <button @click="speak('Hit the nail on the head')">発音</button></li>
        <li><strong>Spill the beans</strong> - 秘密をばらす <button @click="speak('Spill the beans')">発音</button></li>
        <li><strong>Let the cat out of the bag</strong> - 秘密を漏らす <button @click="speak('Let the cat out of the bag')">発音</button></li>
        <li><strong>Piece of cake</strong> - 簡単なこと <button @click="speak('Piece of cake')">発音</button></li>
        <li><strong>When pigs fly</strong> - 絶対にあり得ないこと <button @click="speak('When pigs fly')">発音</button></li>
        <li><strong>It's a small world</strong> - 世界は狭い <button @click="speak('It\'s a small world')">発音</button></li>
        <li><strong>Take it with a grain of salt</strong> - 眉に唾をつけて聞く <button @click="speak('Take it with a grain of salt')">発音</button></li>
        <li><strong>Don't cry over spilled milk</strong> - 過ぎたことを悔やむな <button @click="speak('Don\'t cry over spilled milk')">発音</button></li>
        <li><strong>In hot water</strong> - 困った状況にある <button @click="speak('In hot water')">発音</button></li>
        <li><strong>At the drop of a hat</strong> - すぐに、即座に <button @click="speak('At the drop of a hat')">発音</button></li>
        <li><strong>Break the ice</strong> - 初対面の緊張を解く <button @click="speak('Break the ice')">発音</button></li>
        <li><strong>By the skin of your teeth</strong> - かろうじて、ギリギリで <button @click="speak('By the skin of your teeth')">発音</button></li>
        <li><strong>Cost an arm and a leg</strong> - 非常に高価である <button @click="speak('Cost an arm and a leg')">発音</button></li>
        <li><strong>Hit the sack</strong> - 寝る <button @click="speak('Hit the sack')">発音</button></li>
        <li><strong>It's not rocket science</strong> - 難しいことではない <button @click="speak('It\'s not rocket science')">発音</button></li>
        <li><strong>Jump on the bandwagon</strong> - 流行に乗る <button @click="speak('Jump on the bandwagon')">発音</button></li>
        <li><strong>Let sleeping dogs lie</strong> - 触らぬ神に祟りなし <button @click="speak('Let sleeping dogs lie')">発音</button></li>
        <li><strong>Put all your eggs in one basket</strong> - 一か八かにかける <button @click="speak('Put all your eggs in one basket')">発音</button></li>
        <li><strong>Read between the lines</strong> - 行間を読む <button @click="speak('Read between the lines')">発音</button></li>
        <li><strong>Raining cats and dogs</strong> - 土砂降りの雨 <button @click="speak('Raining cats and dogs')">発音</button></li>
        <li><strong>Steal someone's thunder</strong> - 他人の手柄を奪う <button @click="speak('Steal someone\'s thunder')">発音</button></li>
        <li><strong>Throw in the towel</strong> - 諦める <button @click="speak('Throw in the towel')">発音</button></li>
        <li><strong>Take the bull by the horns</strong> - 困難に立ち向かう <button @click="speak('Take the bull by the horns')">発音</button></li>
        <li><strong>Back to the drawing board</strong> - 初めからやり直す <button @click="speak('Back to the drawing board')">発音</button></li>
        <li><strong>Burn the candle at both ends</strong> - 無理をする <button @click="speak('Burn the candle at both ends')">発音</button></li>
        <li><strong>Every cloud has a silver lining</strong> - 悪いことにも良い面がある <button @click="speak('Every cloud has a silver lining')">発音</button></li>
        <li><strong>Hit the books</strong> - 勉強する <button @click="speak('Hit the books')">発音</button></li>
        <li><strong>In a nutshell</strong> - 簡潔に言うと <button @click="speak('In a nutshell')">発音</button></li>
        <li><strong>It takes two to tango</strong> - 物事には双方の責任がある <button @click="speak('It takes two to tango')">発音</button></li>
        <li><strong>Let the cat out of the bag</strong> - 秘密を暴露する <button @click="speak('Let the cat out of the bag')">発音</button></li>
        <li><strong>On cloud nine</strong> - 幸せで浮かれている <button @click="speak('On cloud nine')">発音</button></li>
        <li><strong>Put the cart before the horse</strong> - 物事を順番が逆に進める <button @click="speak('Put the cart before the horse')">発音</button></li>
        <li><strong>Take it with a pinch of salt</strong> - 話を鵜呑みにしない <button @click="speak('Take it with a pinch of salt')">発音</button></li>
        <li><strong>Hit the jackpot</strong> - 大当たりを引く <button @click="speak('Hit the jackpot')">発音</button></li>
        <li><strong>Blow off steam</strong> - ストレスを発散する <button @click="speak('Blow off steam')">発音</button></li>
        <li><strong>Burn your bridges</strong> - 後戻りできない状況にする <button @click="speak('Burn your bridges')">発音</button></li>
        <li><strong>Cut to the chase</strong> - 要点を言う <button @click="speak('Cut to the chase')">発音</button></li>
        <li><strong>Get cold feet</strong> - 怖気づく <button @click="speak('Get cold feet')">発音</button></li>
        <li><strong>Go the extra mile</strong> - 期待以上に頑張る <button @click="speak('Go the extra mile')">発音</button></li>
        <li><strong>In the blink of an eye</strong> - 一瞬で <button @click="speak('In the blink of an eye')">発音</button></li>
        <li><strong>Keep your fingers crossed</strong> - 成功を祈る <button @click="speak('Keep your fingers crossed')">発音</button></li>
        <li><strong>Out of the blue</strong> - 突然 <button @click="speak('Out of the blue')">発音</button></li>
        <li><strong>Put your money where your mouth is</strong> - 言葉だけでなく行動する <button @click="speak('Put your money where your mouth is')">発音</button></li>
        <li><strong>Spill the beans</strong> - 秘密を漏らす <button @click="speak('Spill the beans')">発音</button></li>
        <li><strong>Take it easy</strong> - 落ち着く <button @click="speak('Take it easy')">発音</button></li>
        <li><strong>Take the cake</strong> - 最も素晴らしいもの <button @click="speak('Take the cake')">発音</button></li>
        <li><strong>That’s the last straw</strong> - 我慢の限界 <button @click="speak('That’s the last straw')">発音</button></li>
        <li><strong>The ball is in your court</strong> - あなた次第 <button @click="speak('The ball is in your court')">発音</button></li>
        <li><strong>The elephant in the room</strong> - 誰もが気づいている問題 <button @click="speak('The elephant in the room')">発音</button></li>
        <li><strong>Under the table</strong> - 秘密に（不正に） <button @click="speak('Under the table')">発音</button></li>
        <li><strong>When the chips are down</strong> - 危機的状況で <button @click="speak('When the chips are down')">発音</button></li>
        <li><strong>Wild goose chase</strong> - 無駄な追求 <button @click="speak('Wild goose chase')">発音</button></li>
        <li><strong>Wrap your head around something</strong> - 何かを理解する <button @click="speak('Wrap your head around something')">発音</button></li>
        <li><strong>You're on fire!</strong> - 最高調だね！ <button @click="speak('You\'re on fire!')">発音</button></li>
        <li><strong>At the end of your rope</strong> - 限界に達している <button @click="speak('At the end of your rope')">発音</button></li>
        <li><strong>Back in the saddle</strong> - 再び頑張る <button @click="speak('Back in the saddle')">発音</button></li>
        <li><strong>Be all ears</strong> - じっと耳を傾ける <button @click="speak('Be all ears')">発音</button></li>
        <li><strong>Be in hot water</strong> - 困難な状況にある <button @click="speak('Be in hot water')">発音</button></li>
        <li><strong>Call it a day</strong> - 仕事を終わらせる <button @click="speak('Call it a day')">発音</button></li>
        <li><strong>Catch someone red-handed</strong> - 現行犯で捕まえる <button @click="speak('Catch someone red-handed')">発音</button></li>
        <li><strong>Cross that bridge when you come to it</strong> - 問題が発生したら対処する <button @click="speak('Cross that bridge when you come to it')">発音</button></li>
        <li><strong>Don't count your chickens before they hatch</strong> - 確実なことを前提にしない <button @click="speak('Don\'t count your chickens before they hatch')">発音</button></li>
        <li><strong>Don't put all your eggs in one basket</strong> - 一つの選択肢に頼りきらない <button @click="speak('Don\'t put all your eggs in one basket')">発音</button></li>
        <li><strong>Get a taste of your own medicine</strong> - 自業自得 <button @click="speak('Get a taste of your own medicine')">発音</button></li>
        <li><strong>Give someone the cold shoulder</strong> - 冷たくあしらう <button @click="speak('Give someone the cold shoulder')">発音</button></li>
      </ul>
  </div>
</template>
  
  <script>
  export default {
    name: 'EnglishIdioms',
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
  