import Vue from 'vue';
Vue.config.devtools = true;//devツールが表示されない時

/* コンポーネントの作成 */
Vue.component('calculator', {
  template: `
    <div class="calc">
      <input type="text" readonly class="result">
      <div class ="num_wrap">
        <span class="num" v-on:click="inputNum(1)">1</span>
        <span class="num" v-on:click="inputNum(2)">2</span>
        <span class="num" v-on:click="inputNum(3)">3</span>
        <span class="num" v-on:click="inputNum(4)">4</span>
        <span class="num" v-on:click="inputNum(5)">5</span>
        <span class="num" v-on:click="inputNum(6)">6</span>
        <span class="num" v-on:click="inputNum(7)">7</span>
        <span class="num" v-on:click="inputNum(8)">8</span>
        <span class="num" v-on:click="inputNum(9)">9</span>
        <span class="num" v-on:click="inputNum('+')">+</span>
        <span class="num" v-on:click="inputNum('-')">-</span>
        <span class="num" v-on:click="inputNum('*')">*</span>
        <span class="num" v-on:click="inputNum('/')">/</span>
        <span class="num" v-on:click="calculate()">=</span>
        <span class="num" v-on:click="clearNum()">C</span>
      </div>
    </div>
  `,
  methods: {
    /* 数字をクリック */
    inputNum: function (int) {
      let result = document.querySelector('.result');
      result.value += int;
    },
    /* clearにするメソッド */
    clearNum: function () {
      let result = document.querySelector('.result');
      result.value = "";//valueを""にする
    },
    /* =を押した時の処理 */
    calculate: function () {
      let result = document.querySelector('.result');
      result.value = new Function('return ' + result.value)();
    }

  }
})

new Vue({ el: '.wrap' })
