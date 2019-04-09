<template>
  <div class="homepage">
    <div class="word-container text">
      <span
        v-for="(letter, index) in letters"
        class="letter"
        :key="index"
        :class="{ alive: letter.alive }"
        @click="flyFn(letter.val)"
      >
        <div class="character">{{letter.val}}</div>
        <span></span>
      </span>
    </div>
    <div class="footer">DESIGN BY XXY</div>
  </div>
</template>


<script>
export default {
  data () {
    return {
      letters: [
        { val: 'L', alive: false },
        { val: 'e', alive: true },
        { val: 'a', alive: false },
        { val: 'y', alive: true },
        { val: 'h', alive: false }
      ]
    }
  },

  methods: {
    flyFn (val) {
      this.letters = this.letters.map(item => {
        if (item.val === val) item.alive = !item.alive
        return item
      })
    }
  }
}
</script>

<style scoped>
.homepage {
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.9);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.word-container {
  color: #fff;
  flex: 1;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  align-items: center;
}
.footer {
  font-size: 0.5em;
  height: 50px;
  line-height: 50px;
  color: #ccc;
}
.text {
  font-size: 8em;
}
.text .letter {
  position: relative;
  display: inline-block;
  -webkit-transition: all 0.4s;
  transition: all 0.4s;
}
.text .letter .character {
  opacity: 0.65;
  -webkit-transition: color 0.4s;
  transition: color 0.4s;
  cursor: pointer;
}
.text .letter span {
  position: absolute;
  bottom: 0.8rem;
  display: block;
  width: 100%;
  height: 15px;
}
.text .letter span::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.25);
}
.text .letter:nth-child(1).alive {
  -webkit-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
  -webkit-animation: poofing1 1.4s ease-in-out infinite alternate;
  animation: poofing1 1.4s ease-in-out infinite alternate;
}
@-webkit-keyframes poofing1 {
  0% {
    -webkit-transform: rotateZ(0deg) rotateY(0) translateY(0px) scale(1);
    transform: rotateZ(0deg) rotateY(0) translateY(0px) scale(1);
  }
  50% {
    -webkit-transform: rotateZ(0deg) rotateY(360deg) translateY(0px) scale(1);
    transform: rotateZ(0deg) rotateY(360deg) translateY(0px) scale(1);
  }
  56% {
    -webkit-transform: rotateZ(459deg) rotateY(360deg) translateY(0px) scale(1);
    transform: rotateZ(459deg) rotateY(360deg) translateY(0px) scale(1);
  }
  100% {
    -webkit-transform: rotateZ(459deg) rotateY(360deg) translateY(-500px)
      scale(0.01);
    transform: rotateZ(459deg) rotateY(360deg) translateY(-500px) scale(0.01);
  }
}
@keyframes poofing1 {
  0% {
    -webkit-transform: rotateZ(0deg) rotateY(0) translateY(0px) scale(1);
    transform: rotateZ(0deg) rotateY(0) translateY(0px) scale(1);
  }
  50% {
    -webkit-transform: rotateZ(0deg) rotateY(360deg) translateY(0px) scale(1);
    transform: rotateZ(0deg) rotateY(360deg) translateY(0px) scale(1);
  }
  56% {
    -webkit-transform: rotateZ(459deg) rotateY(360deg) translateY(0px) scale(1);
    transform: rotateZ(459deg) rotateY(360deg) translateY(0px) scale(1);
  }
  100% {
    -webkit-transform: rotateZ(459deg) rotateY(360deg) translateY(-500px)
      scale(0.01);
    transform: rotateZ(459deg) rotateY(360deg) translateY(-500px) scale(0.01);
  }
}
.text .letter:nth-child(1) .character {
  color: #4e2a84;
  -webkit-animation: wave 1.2s linear infinite;
  animation: wave 1.2s linear infinite;
  -webkit-animation-delay: 0.33333s;
  animation-delay: 0.33333s;
}
.text .letter:nth-child(1) span::before {
  -webkit-animation: shadow 1.2s linear infinite;
  animation: shadow 1.2s linear infinite;
  -webkit-animation-delay: 0.33333s;
  animation-delay: 0.33333s;
}
.text .letter:nth-child(2).alive {
  -webkit-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
  -webkit-animation: poofing2 1.4s ease-in-out infinite alternate;
  animation: poofing2 1.4s ease-in-out infinite alternate;
}
@-webkit-keyframes poofing2 {
  0% {
    -webkit-transform: rotateZ(0deg) rotateY(0) translateY(0px) scale(1);
    transform: rotateZ(0deg) rotateY(0) translateY(0px) scale(1);
  }
  50% {
    -webkit-transform: rotateZ(0deg) rotateY(360deg) translateY(0px) scale(1);
    transform: rotateZ(0deg) rotateY(360deg) translateY(0px) scale(1);
  }
  56% {
    -webkit-transform: rotateZ(540deg) rotateY(360deg) translateY(0px) scale(1);
    transform: rotateZ(540deg) rotateY(360deg) translateY(0px) scale(1);
  }
  100% {
    -webkit-transform: rotateZ(540deg) rotateY(360deg) translateY(-500px)
      scale(0.01);
    transform: rotateZ(540deg) rotateY(360deg) translateY(-500px) scale(0.01);
  }
}
@keyframes poofing2 {
  0% {
    -webkit-transform: rotateZ(0deg) rotateY(0) translateY(0px) scale(1);
    transform: rotateZ(0deg) rotateY(0) translateY(0px) scale(1);
  }
  50% {
    -webkit-transform: rotateZ(0deg) rotateY(360deg) translateY(0px) scale(1);
    transform: rotateZ(0deg) rotateY(360deg) translateY(0px) scale(1);
  }
  56% {
    -webkit-transform: rotateZ(540deg) rotateY(360deg) translateY(0px) scale(1);
    transform: rotateZ(540deg) rotateY(360deg) translateY(0px) scale(1);
  }
  100% {
    -webkit-transform: rotateZ(540deg) rotateY(360deg) translateY(-500px)
      scale(0.01);
    transform: rotateZ(540deg) rotateY(360deg) translateY(-500px) scale(0.01);
  }
}
.text .letter:nth-child(2) .character {
  color: #ff5a5f;
  -webkit-animation: wave 1.2s linear infinite;
  animation: wave 1.2s linear infinite;
  -webkit-animation-delay: 0.66667s;
  animation-delay: 0.66667s;
}
.text .letter:nth-child(2) span::before {
  -webkit-animation: shadow 1.2s linear infinite;
  animation: shadow 1.2s linear infinite;
  -webkit-animation-delay: 0.66667s;
  animation-delay: 0.66667s;
}
.text .letter:nth-child(3).alive {
  -webkit-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
  -webkit-animation: poofing3 1.4s ease-in-out infinite alternate;
  animation: poofing3 1.4s ease-in-out infinite alternate;
}
@-webkit-keyframes poofing3 {
  0% {
    -webkit-transform: rotateZ(0deg) rotateY(0) translateY(0px) scale(1);
    transform: rotateZ(0deg) rotateY(0) translateY(0px) scale(1);
  }
  50% {
    -webkit-transform: rotateZ(0deg) rotateY(360deg) translateY(0px) scale(1);
    transform: rotateZ(0deg) rotateY(360deg) translateY(0px) scale(1);
  }
  56% {
    -webkit-transform: rotateZ(264deg) rotateY(360deg) translateY(0px) scale(1);
    transform: rotateZ(264deg) rotateY(360deg) translateY(0px) scale(1);
  }
  100% {
    -webkit-transform: rotateZ(264deg) rotateY(360deg) translateY(-500px)
      scale(0.01);
    transform: rotateZ(264deg) rotateY(360deg) translateY(-500px) scale(0.01);
  }
}
@keyframes poofing3 {
  0% {
    -webkit-transform: rotateZ(0deg) rotateY(0) translateY(0px) scale(1);
    transform: rotateZ(0deg) rotateY(0) translateY(0px) scale(1);
  }
  50% {
    -webkit-transform: rotateZ(0deg) rotateY(360deg) translateY(0px) scale(1);
    transform: rotateZ(0deg) rotateY(360deg) translateY(0px) scale(1);
  }
  56% {
    -webkit-transform: rotateZ(264deg) rotateY(360deg) translateY(0px) scale(1);
    transform: rotateZ(264deg) rotateY(360deg) translateY(0px) scale(1);
  }
  100% {
    -webkit-transform: rotateZ(264deg) rotateY(360deg) translateY(-500px)
      scale(0.01);
    transform: rotateZ(264deg) rotateY(360deg) translateY(-500px) scale(0.01);
  }
}
.text .letter:nth-child(3) .character {
  color: #f99b0c;
  -webkit-animation: wave 1.2s linear infinite;
  animation: wave 1.2s linear infinite;
  -webkit-animation-delay: 1s;
  animation-delay: 1s;
}
.text .letter:nth-child(3) span::before {
  -webkit-animation: shadow 1.2s linear infinite;
  animation: shadow 1.2s linear infinite;
  -webkit-animation-delay: 1s;
  animation-delay: 1s;
}
.text .letter:nth-child(4).alive {
  -webkit-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
  -webkit-animation: poofing4 1.4s ease-in-out infinite alternate;
  animation: poofing4 1.4s ease-in-out infinite alternate;
}
@-webkit-keyframes poofing4 {
  0% {
    -webkit-transform: rotateZ(0deg) rotateY(0) translateY(0px) scale(1);
    transform: rotateZ(0deg) rotateY(0) translateY(0px) scale(1);
  }
  50% {
    -webkit-transform: rotateZ(0deg) rotateY(360deg) translateY(0px) scale(1);
    transform: rotateZ(0deg) rotateY(360deg) translateY(0px) scale(1);
  }
  56% {
    -webkit-transform: rotateZ(42deg) rotateY(360deg) translateY(0px) scale(1);
    transform: rotateZ(42deg) rotateY(360deg) translateY(0px) scale(1);
  }
  100% {
    -webkit-transform: rotateZ(42deg) rotateY(360deg) translateY(-500px)
      scale(0.01);
    transform: rotateZ(42deg) rotateY(360deg) translateY(-500px) scale(0.01);
  }
}
@keyframes poofing4 {
  0% {
    -webkit-transform: rotateZ(0deg) rotateY(0) translateY(0px) scale(1);
    transform: rotateZ(0deg) rotateY(0) translateY(0px) scale(1);
  }
  50% {
    -webkit-transform: rotateZ(0deg) rotateY(360deg) translateY(0px) scale(1);
    transform: rotateZ(0deg) rotateY(360deg) translateY(0px) scale(1);
  }
  56% {
    -webkit-transform: rotateZ(42deg) rotateY(360deg) translateY(0px) scale(1);
    transform: rotateZ(42deg) rotateY(360deg) translateY(0px) scale(1);
  }
  100% {
    -webkit-transform: rotateZ(42deg) rotateY(360deg) translateY(-500px)
      scale(0.01);
    transform: rotateZ(42deg) rotateY(360deg) translateY(-500px) scale(0.01);
  }
}
.text .letter:nth-child(4) .character {
  color: #cee007;
  -webkit-animation: wave 1.2s linear infinite;
  animation: wave 1.2s linear infinite;
  -webkit-animation-delay: 1.33333s;
  animation-delay: 1.33333s;
}
.text .letter:nth-child(4) span::before {
  -webkit-animation: shadow 1.2s linear infinite;
  animation: shadow 1.2s linear infinite;
  -webkit-animation-delay: 1.33333s;
  animation-delay: 1.33333s;
}
.text .letter:nth-child(5).alive {
  -webkit-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
  -webkit-animation: poofing5 1.4s ease-in-out infinite alternate;
  animation: poofing5 1.4s ease-in-out infinite alternate;
}
@-webkit-keyframes poofing5 {
  0% {
    -webkit-transform: rotateZ(0deg) rotateY(0) translateY(0px) scale(1);
    transform: rotateZ(0deg) rotateY(0) translateY(0px) scale(1);
  }
  50% {
    -webkit-transform: rotateZ(0deg) rotateY(360deg) translateY(0px) scale(1);
    transform: rotateZ(0deg) rotateY(360deg) translateY(0px) scale(1);
  }
  56% {
    -webkit-transform: rotateZ(384deg) rotateY(360deg) translateY(0px) scale(1);
    transform: rotateZ(384deg) rotateY(360deg) translateY(0px) scale(1);
  }
  100% {
    -webkit-transform: rotateZ(384deg) rotateY(360deg) translateY(-500px)
      scale(0.01);
    transform: rotateZ(384deg) rotateY(360deg) translateY(-500px) scale(0.01);
  }
}
@keyframes poofing5 {
  0% {
    -webkit-transform: rotateZ(0deg) rotateY(0) translateY(0px) scale(1);
    transform: rotateZ(0deg) rotateY(0) translateY(0px) scale(1);
  }
  50% {
    -webkit-transform: rotateZ(0deg) rotateY(360deg) translateY(0px) scale(1);
    transform: rotateZ(0deg) rotateY(360deg) translateY(0px) scale(1);
  }
  56% {
    -webkit-transform: rotateZ(384deg) rotateY(360deg) translateY(0px) scale(1);
    transform: rotateZ(384deg) rotateY(360deg) translateY(0px) scale(1);
  }
  100% {
    -webkit-transform: rotateZ(384deg) rotateY(360deg) translateY(-500px)
      scale(0.01);
    transform: rotateZ(384deg) rotateY(360deg) translateY(-500px) scale(0.01);
  }
}
.text .letter:nth-child(5) .character {
  color: #00c6b2;
  -webkit-animation: wave 1.2s linear infinite;
  animation: wave 1.2s linear infinite;
  -webkit-animation-delay: 1.66667s;
  animation-delay: 1.66667s;
}
.text .letter:nth-child(5) span::before {
  -webkit-animation: shadow 1.2s linear infinite;
  animation: shadow 1.2s linear infinite;
  -webkit-animation-delay: 1.66667s;
  animation-delay: 1.66667s;
}
@-webkit-keyframes wave {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  50% {
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}

@keyframes wave {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  50% {
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}
@-webkit-keyframes shadow {
  0% {
    width: 0;
    height: 0;
  }
  50% {
    width: 100%;
    height: 100%;
  }
  100% {
    width: 0;
    height: 0;
  }
}
@keyframes shadow {
  0% {
    width: 0;
    height: 0;
  }
  50% {
    width: 100%;
    height: 100%;
  }
  100% {
    width: 0;
    height: 0;
  }
}
@media only screen and (max-width: 767px) {
  .text {
    font-size: 6em;
  }
  .text .letter span {
    bottom: 0.5rem;
  }
}
@media only screen and (max-width: 480px) {
  .text {
    font-size: 4em;
  }
  .text .letter span {
    bottom: 0;
  }
}
</style>
