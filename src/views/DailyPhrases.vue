<template>
  <div class="category-page">
    <h2>日常英会話フレーズ集</h2>
    <ul>
      <li>
        <strong>Good morning!</strong> - おはようございます
        <button @click="speak('Good morning!')">発音</button>
      </li>
      <li>
        <strong>How are you?</strong> - 元気ですか？
        <button @click="speak('How are you?')">発音</button>
      </li>
      <li>
        <strong>I'm fine, thank you!</strong> - 元気です、ありがとう！
        <button @click="speak('I\'m fine, thank you!')">発音</button>
      </li>
      <li>
        <strong>What's your name?</strong> - あなたの名前は何ですか？
        <button @click="speak('What\'s your name?')">発音</button>
      </li>
      <li>
        <strong>Nice to meet you!</strong> - 初めまして！
        <button @click="speak('Nice to meet you!')">発音</button>
      </li>
      <li>
        <strong>Can you help me?</strong> - 手伝ってもらえますか？
        <button @click="speak('Can you help me?')">発音</button>
      </li>
      <li>
        <strong>Where are you from?</strong> - どこから来ましたか？
        <button @click="speak('Where are you from?')">発音</button>
      </li>
      <li>
        <strong>I'm from Japan.</strong> - 日本から来ました。
        <button @click="speak('I\'m from Japan.')">発音</button>
      </li>
      <li>
        <strong>What time is it?</strong> - 今何時ですか？
        <button @click="speak('What time is it?')">発音</button>
      </li>
      <li>
        <strong>I'm hungry.</strong> - お腹が空いた。
        <button @click="speak('I\'m hungry.')">発音</button>
      </li>
      <li>
        <strong>Let's go!</strong> - 行こう！
        <button @click="speak('Let\'s go!')">発音</button>
      </li>
      <li>
        <strong>How old are you?</strong> - あなたは何歳ですか？
        <button @click="speak('How old are you?')">発音</button>
      </li>
      <li>
        <strong>Where do you live?</strong> - どこに住んでいますか？
        <button @click="speak('Where do you live?')">発音</button>
      </li>
      <li>
        <strong>What do you do?</strong> - あなたの仕事は何ですか？
        <button @click="speak('What do you do?')">発音</button>
      </li>
      <li>
        <strong>I'm a student.</strong> - 私は学生です。
        <button @click="speak('I\'m a student.')">発音</button>
      </li>
      <li>
        <strong>It's nice weather today.</strong> - 今日は良い天気ですね。
        <button @click="speak('It\'s nice weather today.')">発音</button>
      </li>
      <li>
        <strong>What’s your favorite color?</strong> - あなたの好きな色は何ですか？
        <button @click="speak('What\'s your favorite color?')">発音</button>
      </li>
      <li>
        <strong>Do you like music?</strong> - 音楽は好きですか？
        <button @click="speak('Do you like music?')">発音</button>
      </li>
      <li>
        <strong>I like playing sports.</strong> - スポーツをするのが好きです。
        <button @click="speak('I like playing sports.')">発音</button>
      </li>
      <li>
        <strong>Can you speak English?</strong> - 英語を話せますか？
        <button @click="speak('Can you speak English?')">発音</button>
      </li>
      <li>
        <strong>Yes, a little.</strong> - はい、少しだけ。
        <button @click="speak('Yes, a little.')">発音</button>
      </li>
      <li>
        <strong>No, I can't.</strong> - いいえ、話せません。
        <button @click="speak('No, I can\'t.')">発音</button>
      </li>
      <li>
        <strong>Where can I find a taxi?</strong> - タクシーはどこで見つけられますか？
        <button @click="speak('Where can I find a taxi?')">発音</button>
      </li>
      <li>
        <strong>Can you recommend a good restaurant?</strong> - おすすめのレストランを教えてもらえますか？
        <button @click="speak('Can you recommend a good restaurant?')">発音</button>
      </li>
      <li>
        <strong>What’s your favorite food?</strong> - あなたの好きな食べ物は何ですか？
        <button @click="speak('What\'s your favorite food?')">発音</button>
      </li>
      <li>
        <strong>I'm thirsty.</strong> - 喉が渇いた。
        <button @click="speak('I\'m thirsty.')">発音</button>
      </li>
      <li>
        <strong>Can I have some water?</strong> - 水をもらえますか？
        <button @click="speak('Can I have some water?')">発音</button>
      </li>
      <li>
        <strong>Excuse me, where is the station?</strong> - すみません、駅はどこですか？
        <button @click="speak('Excuse me, where is the station?')">発音</button>
      </li>
      <li>
        <strong>How much does it cost?</strong> - いくらですか？
        <button @click="speak('How much does it cost?')">発音</button>
      </li>
      <li>
        <strong>Do you have Wi-Fi?</strong> - Wi-Fiはありますか？
        <button @click="speak('Do you have Wi-Fi?')">発音</button>
      </li>
      <li>
        <strong>Can I use your phone?</strong> - あなたの電話を使ってもいいですか？
        <button @click="speak('Can I use your phone?')">発音</button>
      </li>
      <li>
        <strong>What time does the train leave?</strong> - 電車は何時に出発しますか？
        <button @click="speak('What time does the train leave?')">発音</button>
      </li>
      <li>
        <strong>Where is the nearest hospital?</strong> - 一番近い病院はどこですか？
        <button @click="speak('Where is the nearest hospital?')">発音</button>
      </li>
      <li>
        <strong>Can you write it down?</strong> - 書いてもらえますか？
        <button @click="speak('Can you write it down?')">発音</button>
      </li>
      <li>
        <strong>I'm lost.</strong> - 道に迷いました。
        <button @click="speak('I\'m lost.')">発音</button>
      </li>
      <li>
        <strong>Can you show me the way?</strong> - 道を教えてもらえますか？
        <button @click="speak('Can you show me the way?')">発音</button>
      </li>
      <li>
        <strong>Can you take a picture of me?</strong> - 私の写真を撮ってもらえますか？
        <button @click="speak('Can you take a picture of me?')">発音</button>
      </li>
      <li>
        <strong>I'm looking for my friend.</strong> - 友達を探しています。
        <button @click="speak('I\'m looking for my friend.')">発音</button>
      </li>
      <li>
        <strong>Can you help me with this?</strong> - これを手伝ってもらえますか？
        <button @click="speak('Can you help me with this?')">発音</button>
      </li>
      <li>
        <strong>Is it far from here?</strong> - ここから遠いですか？
        <button @click="speak('Is it far from here?')">発音</button>
      </li>
      <li>
        <strong>I'm sorry, I don't understand.</strong> - ごめんなさい、わかりません。
        <button @click="speak('I\'m sorry, I don\'t understand.')">発音</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'DailyPhrases',
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
