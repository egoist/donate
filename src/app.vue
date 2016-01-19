<style src="./style"></style>

<style>
  .home {
    padding-top: 50px;
    .title {
      font-size: 14px;
      text-transform: uppercase;
    }
    .answer {
      padding: 10px;
      border-radius: 2px;
      background-color: #eee;
      font-size: 17px;
      color: #778087;
    }
  }
</style>

<style>
  .intro {
    background-color: #f0f0f0;
    padding: 20px;
    margin-top: 80px;
    .site-title {
      margin-bottom: 10px;
    }
  }
  .footer {
    margin-top: 50px;
    color: #999;
    .container {
      padding-top: 30px;
      border-top: 1px solid #e2e2e2;
      line-height: 28px;
    }
    .heart {
      color: #F74444;
      font-family: cursive;
      font-size: 18px;
      vertical-align: -1px;
      margin-right: 3px;
    }
    .fl {
      float: left;
    }
    .fr {
      float: right;
    }
  }
</style>

<style>
  .payments {
    margin-top: 40px;
    .show-payment {
      cursor: pointer;
    }
  }
</style>

<template>
  <div class="app">
    <div class="intro">
      <div class="container">
        <h2 class="site-title">Donate to the lovely
          <a href="https://github.com/egoist">@egoist</a>
        </h2>
        <h3>Take a little, give a little</h3>
      </div>
    </div>
    <div class="container">
      <div class="payments">
        <span class="show-payment" @click="currentPayment = 'paypal'">{{{ paypalButton }}}</span>
        <span class="show-payment" @click="currentPayment = 'wechat'">{{{ wechatPayButton }}}</span>
      </div>
      <div class="paypal" v-if="currentPayment === 'paypal'">
        <paypal-form></paypal-form>
      </div>
      <div></div>
      <div class="wechat" v-if="currentPayment === 'wechat'">
        <wechat-qrcode></wechat-qrcode>
      </div>
      <div class="home">
        <h3 class="title">What good will my money do?</h3>
        <p class="answer">
          Your money will help me (now a college student) get through school.<br>
          Your money will also be spent in buying coffee, cola and some other foods or drinks to make me feel energetic when coding.
        </p>
      </div>
    </div>
    <div class="footer">
      <div class="container">
        <div class="fr">
          <a href="https://github.com/egoist">GitHub</a>
          ·
          <a href="https://egoist.github.io">My Blog</a>
        </div>
        <div class="fl">
          <span class="heart">♥</span> Thanks for your love :)
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import paypalButton from './media/paypal.svg'
  import wechatPayButton from './media/wechat-pay.svg'

  export default {
    data() {
      return {
        paypalButton,
        wechatPayButton,
        currentPayment: ''
      }
    },
    components: {
      paypalForm: require('./paypalForm'),
      wechatQrcode: require('./wechatQrcode')
    }
  }
</script>
