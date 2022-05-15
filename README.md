---
home: true
bgImage: '/image/bg/bg1.jpg'
bgImageStyle: {
  height: '100vh'
}

isShowTitleInHome: false
actionText: Guide
actionLink: /views/other/guide
features:
- title: Yesterday
  details: 开发一款看着开心、写着顺手的 vuepress 博客主题
- title: Today
  details: 希望帮助更多的人花更多的时间在内容创作上，而不是博客搭建上
- title: Tomorrow
  details: 希望更多的爱好者能够参与进来，帮助这个主题更好的成长
---


<!-- 向下跳转的效果 -->
<style>

.anchor-down {
  display: block;
  margin: 12rem auto 0;
  bottom: 45px;
  width: 20px;
  height: 20px;
  font-size: 34px;
  text-align: center;
  animation: bounce-in 5s 3s infinite;
  position: absolute;
  left: 50%;
  bottom: 30%;
  margin-left: -10px;
  cursor: pointer;
}
@-webkit-keyframes bounce-in{
  0%{transform:translateY(0)}
  20%{transform:translateY(0)}
  50%{transform:translateY(-20px)}
  80%{transform:translateY(0)}
  to{transform:translateY(0)}
}
.anchor-down::before {
  content: "";
  width: 20px;
  height: 20px;
  display: block;
  border-right: 3px solid #fff;
  border-top: 3px solid #fff;
  transform: rotate(135deg);
  position: absolute;
  bottom: 10px;
}
.anchor-down::after {
  content: "";
  width: 20px;
  height: 20px;
  display: block;
  border-right: 3px solid #fff;
  border-top: 3px solid #fff;
  transform: rotate(135deg);
}
/* 设置背景图片 */
body{
  background:url(/image/bg/bg1.gif);
}
/* 首页弹窗设置位置 */
.bulletin-wrapper[data-v-1607dd08]{
 top:140px;
}
</style>

<script>
export default { 

 mounted () {
   //首页-向下箭头
    console.log(this);
    const ifJanchor = document.getElementById("JanchorDown"); 
    ifJanchor && ifJanchor.parentNode.removeChild(ifJanchor);
    let a = document.createElement('a');
    a.id = 'JanchorDown';
    a.className = 'anchor-down';
    document.getElementsByClassName('hero')[0].append(a);
    let targetA = document.getElementById("JanchorDown");
    targetA.addEventListener('click', e => { // 添加点击事件
      this.scrollFn();
    })
    //首页-字体特效 npm install hanzi-writer
    //定义需要书写的汉字
    let chinese = ['子', '狸', '的', '一', '叶', '扁', '舟'];
    let hanzi = '';
    let arr = [];
    for (let i = 0; i < 7; i++) {
      arr[i] = HanziWriter.create('logo-myFont', chinese[i], {
        width: 100,
        height: 100,
        padding: 5,
        showOutline: false,
        strokeAnimationSpeed: 4, // 5x normal speed
        delayBetweenStrokes: 100, // milliseconds
        showCharacter: false,
        strokeColor:'#144fe3',
        highlightOnComplete:true
      });
    }
    //延时调用
    setTimeout(() => {
      arr[0].animateCharacter();
    }, 1);
    setTimeout(() => {
      arr[1].animateCharacter();
    }, 800);
    setTimeout(() => {
      arr[2].animateCharacter();
    }, 2800);
    setTimeout(() => {
      arr[3].animateCharacter();
    }, 4500);
    setTimeout(() => {
      arr[4].animateCharacter();
    }, 4850);
    setTimeout(() => {
      arr[5].animateCharacter();
    }, 6100);
    setTimeout(() => {
      arr[6].animateCharacter();
    }, 8000);

  

  },
  methods: {
    scrollFn() {
      const windowH = document.getElementsByClassName('hero')[0].clientHeight; // 获取窗口高度
      document.documentElement.scrollTop = windowH; // 滚动条滚动到指定位置
    }
  }
}
</script>

