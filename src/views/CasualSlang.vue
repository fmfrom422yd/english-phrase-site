<template>
  <div class="category-page">
    <h2>スラング&カジュアル英語</h2>
    <ul>
      <li>
        <strong>What's up?</strong> - どうしたの？
        <button @click="speak('What\'s up?')">発音</button>
      </li>
      <li>
        <strong>Chill out!</strong> - 落ち着いて！
        <button @click="speak('Chill out!')">発音</button>
      </li>
      <li>
        <strong>I'm broke.</strong> - お金がない。
        <button @click="speak('I\'m broke.')">発音</button>
      </li>
      <li>
        <strong>It's a piece of cake.</strong> - とても簡単だ。
        <button @click="speak('It\'s a piece of cake.')">発音</button>
      </li>
      <li>
        <strong>Hang out</strong> - 一緒に時間を過ごす
        <button @click="speak('Hang out')">発音</button>
      </li>
      <li>
        <strong>Take it easy</strong> - ゆっくりして
        <button @click="speak('Take it easy')">発音</button>
      </li>
      <li>
        <strong>What's the deal?</strong> - どういうこと？
        <button @click="speak('What\'s the deal?')">発音</button>
      </li>
      <li>
        <strong>I'm down</strong> - 行くよ、やるよ
        <button @click="speak('I\'m down')">発音</button>
      </li>
      <li>
        <strong>I'm in</strong> - 参加するよ
        <button @click="speak('I\'m in')">発音</button>
      </li>
      <li>
        <strong>That's lit!</strong> - それはすごい！
        <button @click="speak('That\'s lit!')">発音</button>
      </li>
      <li>
        <strong>Hit me up</strong> - 連絡して
        <button @click="speak('Hit me up')">発音</button>
      </li>
      <li>
        <strong>On point</strong> - 完璧だ
        <button @click="speak('On point')">発音</button>
      </li>
      <li>
        <strong>I'm starving.</strong> - お腹がすいている。
        <button @click="speak('I\'m starving.')">発音</button>
      </li>
      <li>
        <strong>I'm out.</strong> - もう行くよ。
        <button @click="speak('I\'m out.')">発音</button>
      </li>
      <li>
        <strong>What a rip-off!</strong> - なんてひどい！
        <button @click="speak('What a rip-off!')">発音</button>
      </li>
      <li>
        <strong>It's not my thing.</strong> - それは私の好みじゃない。
        <button @click="speak('It\'s not my thing.')">発音</button>
      </li>
      <li>
        <strong>That's a bummer.</strong> - それは残念だね。
        <button @click="speak('That\'s a bummer.')">発音</button>
      </li>
      <li>
        <strong>Get real!</strong> - 現実を見て！
        <button @click="speak('Get real!')">発音</button>
      </li>
      <li>
        <strong>That's tight.</strong> - それはいいね。
        <button @click="speak('That\'s tight.')">発音</button>
      </li>
      <li>
        <strong>What are you up to?</strong> - 何してるの？
        <button @click="speak('What are you up to?')">発音</button>
      </li>
      <li>
        <strong>Catch you later.</strong> - 後でね。
        <button @click="speak('Catch you later.')">発音</button>
      </li>
      <li>
        <strong>It's not a big deal.</strong> - 大したことじゃないよ。
        <button @click="speak('It\'s not a big deal.')">発音</button>
      </li>
      <li>
        <strong>Let's grab a bite.</strong> - ちょっと食べよう。
        <button @click="speak('Let\'s grab a bite.')">発音</button>
      </li>
      <li>
        <strong>I'm all in.</strong> - 私も参加するよ。
        <button @click="speak('I\'m all in.')">発音</button>
      </li>
      <li>
        <strong>Let's roll.</strong> - 行こう。
        <button @click="speak('Let\'s roll.')">発音</button>
      </li>
      <li>
        <strong>I'm beat.</strong> - 疲れた。
        <button @click="speak('I\'m beat.')">発音</button>
      </li>
      <li>
        <strong>I'm good.</strong> - 大丈夫だよ。
        <button @click="speak('I\'m good.')">発音</button>
      </li>
      <li>
        <strong>Take a rain check.</strong> - また今度にしよう。
        <button @click="speak('Take a rain check.')">発音</button>
      </li>
      <li>
        <strong>You're killing it!</strong> - すごいじゃん！
        <button @click="speak('You\'re killing it!')">発音</button>
      </li>
      <li>
        <strong>I'm just messing with you.</strong> - 冗談だよ。
        <button @click="speak('I\'m just messing with you.')">発音</button>
      </li>
      <li>
        <strong>That's fire!</strong> - それはすごい！
        <button @click="speak('That\'s fire!')">発音</button>
      </li>
      <li>
        <strong>I'm down for that.</strong> - それやりたい！
        <button @click="speak('I\'m down for that.')">発音</button>
      </li>
      <li>
        <strong>It's all good.</strong> - 大丈夫だよ。
        <button @click="speak('It\'s all good.')">発音</button>
      </li>
      <li>
        <strong>That’s sick!</strong> - それはかっこいい！
        <button @click="speak('That\'s sick!')">発音</button>
      </li>
      <li>
        <strong>You're the best.</strong> - あなたが最高だ。
        <button @click="speak('You\'re the best.')">発音</button>
      </li>
      <li>
        <strong>Don’t sweat it.</strong> - 気にしないで。
        <button @click="speak('Don\'t sweat it.')">発音</button>
      </li>
      <li>
        <strong>You're awesome.</strong> - あなたは素晴らしい。
        <button @click="speak('You\'re awesome.')">発音</button>
      </li>
      <li>
        <strong>It's up to you.</strong> - あなた次第だよ。
        <button @click="speak('It\'s up to you.')">発音</button>
      </li>
      <li>
        <strong>Let's bounce.</strong> - 出発しよう。
        <button @click="speak('Let\'s bounce.')">発音</button>
      </li>
      <li>
        <strong>It’s a no-brainer.</strong> - これは簡単だ。
        <button @click="speak('It\'s a no-brainer.')">発音</button>
      </li>
      <li>
        <strong>Let's chill.</strong> - まったりしよう。
        <button @click="speak('Let\'s chill.')">発音</button>
      </li>
      <li>
        <strong>I'm just kidding.</strong> - ただの冗談だよ。
        <button @click="speak('I\'m just kidding.')">発音</button>
      </li>
      <li>
        <strong>What’s the catch?</strong> - 何か裏があるの？
        <button @click="speak('What\'s the catch?')">発音</button>
      </li>
      <li>
        <strong>I'm feeling it.</strong> - それいいね。
        <button @click="speak('I\'m feeling it.')">発音</button>
      </li>
      <li>
        <strong>You're so extra.</strong> - あなたは大げさだね。
        <button @click="speak('You\'re so extra.')">発音</button>
      </li>
      <li>
        <strong>Don’t freak out.</strong> - 落ち着いて。
        <button @click="speak('Don\'t freak out.')">発音</button>
      </li>
      <li>
        <strong>Let’s get going.</strong> - 出発しよう。
        <button @click="speak('Let\'s get going.')">発音</button>
      </li>
      <li>
        <strong>I'll pass.</strong> - 遠慮するよ。
        <button @click="speak('I\'ll pass.')">発音</button>
      </li>
      <li>
        <strong>That's whack.</strong> - それは変だ。
        <button @click="speak('That\'s whack.')">発音</button>
      </li>
      <li>
        <strong>I'm stoked!</strong> - めっちゃ楽しみだ！
        <button @click="speak('I\'m stoked!')">発音</button>
      </li>
      <li>
        <strong>That’s savage!</strong> - それは凄い！
        <button @click="speak('That\'s savage!')">発音</button>
      </li>
      <li>
        <strong>It’s a vibe.</strong> - いい感じだね。
        <button @click="speak('It\'s a vibe.')">発音</button>
      </li>
      <li>
        <strong>That's nuts!</strong> - それはすごい！
        <button @click="speak('That\'s nuts!')">発音</button>
      </li>
      <li>
        <strong>No way!</strong> - まさか！
        <button @click="speak('No way!')">発音</button>
      </li>
      <li>
        <strong>I'm not buying it.</strong> - 信じてないよ。
        <button @click="speak('I\'m not buying it.')">発音</button>
      </li>
      <li>
        <strong>That’s lit!</strong> - それは盛り上がる！
        <button @click="speak('That\'s lit!')">発音</button>
      </li>
      <li>
        <strong>Keep it on the down-low.</strong> - 内緒にしておいて。
        <button @click="speak('Keep it on the down-low.')">発音</button>
      </li>
      <li>
        <strong>It's a wrap.</strong> - 終わりだ。
        <button @click="speak('It\'s a wrap.')">発音</button>
      </li>
      <li>
        <strong>You're tripping.</strong> - 君、ちょっと変だよ。
        <button @click="speak('You\'re tripping.')">発音</button>
      </li>
      <li>
        <strong>Don't mess with me.</strong> - ふざけないで。
        <button @click="speak('Don\'t mess with me.')">発音</button>
      </li>
      <li>
        <strong>I'm shook.</strong> - びっくりした。
        <button @click="speak('I\'m shook.')">発音</button>
      </li>
      <li>
        <strong>I'm hyped!</strong> - ワクワクしてる！
        <button @click="speak('I\'m hyped!')">発音</button>
      </li>
      <li>
        <strong>Don’t be shady.</strong> - こそこそしないで。
        <button @click="speak('Don\'t be shady.')">発音</button>
      </li>
      <li>
        <strong>What’s popping?</strong> - 何かあるの？
        <button @click="speak('What\'s popping?')">発音</button>
      </li>
      <li>
        <strong>That’s dope!</strong> - それはかっこいい！
        <button @click="speak('That\'s dope!')">発音</button>
      </li>
      <li>
        <strong>Let’s get this bread.</strong> - 稼ごう！
        <button @click="speak('Let\'s get this bread.')">発音</button>
      </li>
      <li>
        <strong>I’m on fire.</strong> - 調子いいよ。
        <button @click="speak('I\'m on fire.')">発音</button>
      </li>
      <li>
        <strong>That’s sus.</strong> - それは怪しい。
        <button @click="speak('That\'s sus.')">発音</button>
      </li>
      <li>
        <strong>You’re crushing it!</strong> - 君、めっちゃうまくやってる！
        <button @click="speak('You\'re crushing it!')">発音</button>
      </li>
      <li>
        <strong>That's sketchy.</strong> - それは怪しい。
        <button @click="speak('That\'s sketchy.')">発音</button>
      </li>
      <li>
        <strong>I'm down to chill.</strong> - まったりしよう。
        <button @click="speak('I\'m down to chill.')">発音</button>
      </li>
      <li>
        <strong>Don’t be so salty.</strong> - そんなに怒らないで。
        <button @click="speak('Don\'t be so salty.')">発音</button>
      </li>
      <li>
        <strong>That’s tight.</strong> - それいいね。
        <button @click="speak('That\'s tight.')">発音</button>
      </li>
      <li>
        <strong>What a drag!</strong> - それはだるい！
        <button @click="speak('What a drag!')">発音</button>
      </li>
      <li>
        <strong>I’m all set.</strong> - もう準備できてる。
        <button @click="speak('I\'m all set.')">発音</button>
      </li>
      <li>
        <strong>That’s crazy!</strong> - それは信じられない！
        <button @click="speak('That\'s crazy!')">発音</button>
      </li>
      <li>
        <strong>You're a lifesaver!</strong> - あなたは救世主だ！
        <button @click="speak('You\'re a lifesaver!')">発音</button>
      </li>
      <li>
        <strong>I'm vibing.</strong> - めっちゃいい感じ。
        <button @click="speak('I\'m vibing.')">発音</button>
      </li>
      <li>
        <strong>Take a chill pill.</strong> - 落ち着いて。
        <button @click="speak('Take a chill pill.')">発音</button>
      </li>
      <li>
        <strong>Don’t be a buzzkill.</strong> - 空気を悪くしないで。
        <button @click="speak('Don\'t be a buzzkill.')">発音</button>
      </li>
      <li>
        <strong>It’s all good.</strong> - 問題ないよ。
        <button @click="speak('It\'s all good.')">発音</button>
      </li>
      <li>
        <strong>That’s a dealbreaker.</strong> - それは無理だ。
        <button @click="speak('That\'s a dealbreaker.')">発音</button>
      </li>
      <li>
        <strong>I'm losing my mind.</strong> - 頭がオカしくなりそうだ。
        <button @click="speak('I\'m losing my mind.')">発音</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SlangPhrases',
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
