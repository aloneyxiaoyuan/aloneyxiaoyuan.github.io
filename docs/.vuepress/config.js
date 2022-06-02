module.exports = {
  //首页气泡 安装依赖: npm install vue-canvas-effect --save 
  //https://blog.csdn.net/qq_41327483/article/details/119103300?utm_source=app&app_version=5.3.1&code=app_1562916241&uLinkId=usr1mkqgl919blen
  "title": "apeBlog",
  "base": "/",
  "description": " ",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/image/user/favicon.ico"
      }
    ],
    //对移动端进行优化
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ],
    ["link", { rel: "stylesheet", href: "./styles/index.styl" }],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/hanzi-writer/dist/hanzi-writer.min.js' }],
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "首页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间经历",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "文档",
        "icon": "reco-message",
        "items": [
          {
            "text": "vuepress-reco",
            "link": "/docs/theme-reco/"
          }
        ]
      },
      {
        "text": "联系我",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/aloneyxiaoyuan",
            "icon": "reco-github"
          }
        ]
      }
    ],
    "sidebar": {
      "/docs/theme-reco/": [
        "",
        "云音乐",
        "小程序开发",
        "父子组件通信",
        "跨域处理",
        "es6语法使用",
        "项目中封装axios",
        "vuex的使用",
        "重写push和replace方法",
        "echarts的使用",
        "mockjs的使用",
        "常用的前端cdn库"
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "文章系列"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "logo": "/image/logo/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "ape",
    "authorAvatar": "/image/user/avatar.png",
    "record": "湘ICP备19002639号",
    "startYear": "2022"
  },
  "markdown": {
    "lineNumbers": true
  },
  //先安装在配置 官网插件:https://vuepress-theme-reco.recoluan.com/views/plugins/bgmPlayer.html
  plugins: [
    //看板娘 npm install @vuepress-reco/vuepress-plugin-kan-ban-niang --save
    [
      '@vuepress-reco/vuepress-plugin-kan-ban-niang',
      {
        theme: ['whiteCat'],
        clean: true,
        messageStyle: { right: '68px', bottom: '290px' },
        width: 250,
        height: 320
      }
    ]
    ,
    //公告栏弹窗  yarn add @vuepress-reco/vuepress-plugin-bulletin-popover -D
    //查看插件源码可以得知，公告栏弹窗是使用 sessionStorage 控制的展示频次，在本地测试时，如果关闭了，可以通过清除 sessionStorage 再次展示出来。
    //所在目录：node_modules/@vuepress-reco/vuepress-plugin-bulletin-popover/bin/Bulletin.vue
    /*
    mounted () {
    const closeNote = sessionStorage.getItem('closeNote')
    this.visible = closeNote !== 'true'
    }
    */
    // ['@vuepress-reco/vuepress-plugin-bulletin-popover', {
    //   title: '消息提示',
    //   body: [
    //     {
    //       type: 'title',
    //       content: '添加子狸为好友入前端交流群',
    //       style: 'text-aligin: center;'
    //     },
    //     {
    //       type: 'image',
    //       src: '/image/user/aboutMe.png'
    //     }
    //   ],
    //   footer: [
    //     {
    //       type: 'button',
    //       text: '打赏',
    //       link: '/donate'
    //     }
    //   ]
    // }],
    //光标  yarn add vuepress-plugin-cursor-effects -D
    [
      'cursor-effects',
      {
        size: 2, // size of the particle, default: 2
        shape: 'star', // ['star' | 'circle'], // shape of the particle, default: 'star'
        zIndex: 999999999, // z-index property of the canvas, default: 999999999
      }
    ],
    //动态标题展示 yarn add vuepress-plugin-dynamic-title -D
    ['dynamic-title', {
      showIcon: '/image/logo/logo1.png',
      showText: '客官欢迎回来~',
      hideIcon: '/image/logo/logo1.png',
      hideText: '客官不要走嘛~',
      recoverTime: 2000,
    }
    ],
    //添加著作权信息 yarn add vuepress-plugin-copyright -D
    [
      'copyright',
      {
        authorName: 'ape', // 选中的文字将无法被复制
        minLength: 30, // 如果长度超过  30 个字符
      },
    ],
    //内容被复制时的弹窗 yarn add vuepress-plugin-nuggets-style-copy -D
    [
      ["vuepress-plugin-nuggets-style-copy", {
        copyText: "复制内容",
        tip: {
          content: "复制成功"
        }
      }]
    ],

    ,
    //音乐
    [
      '@vuepress-reco/vuepress-plugin-bgm-player',
      {
        //定位播放器
        position: {

          left: '10px',
          bottom: '50px',
          'z-index': '999999'

        },
        /*
        寻找音乐在线链接:
        1.访问QQ音乐:https://y.qq.com/,搜索到自己喜欢的音乐,点击进入该歌曲页面;
        2.在页面点击鼠标右键 - 选择【检查】- 点击手机图标 -【Network】-【Media】,然后按【F5】刷新当前页面;
        3.即可在此处看到音乐的链接,双击即可访问此音乐链接,然后在浏览器地址栏复制链接到投票网即可。
        */
        audios: [
          {
            name: '幻听',
            artist: '许嵩',
            url: 'https://dl.stream.qqmusic.qq.com/C40000093zrb1f8t8K.m4a?guid=1506311242&vkey=C3C7189B091875365D121CAEA4FBEC3F64910C7031FF99A2F24E2256B12AB36DE5034A55D94142F76E1B0DE3CD17502C51DBA1C52BB1DDFC&uin=&fromtag=120002',
            cover: 'https://y.qq.com/music/photo_new/T002R300x300M000002KSDg90IaScI_1.jpg?max_age=2592000'
          },
          // {
          //   name: 'Windy Hill',
          //   artist: '羽肿',
          //   url: 'https://dl.stream.qqmusic.qq.com/C400001cd5TH49eTpz.m4a?guid=7549052936&vkey=4EF63CBEE6B732521401E97FBA432B0AE61F7A410E0282F3FAC3E4D1524C345AC852787F906C33CCC876F94530AAA7BA600B5E69ED821DDB&uin=3463825798&fromtag=120002',
          //   cover: 'https://y.qq.com/music/photo_new/T002R300x300M000003DginG3bPjhc_1.jpg?max_age=2592000'
          // },
          // {
          //   name: '侧面',
          //   artist: '于果',
          //   url: 'https://dl.stream.qqmusic.qq.com/C400003YYxX600yccc.m4a?guid=4874567582&vkey=04B9EC9176E6070BE31C37744A0FB01E543BBBE130D2C4DB8EBA44A4733E307C0A229D1DF2B0A601F5246DB340BA0323217FAF556FA2F606&uin=3463825798&fromtag=120002',
          //   cover: 'https://y.qq.com/music/photo_new/T002R300x300M000001RhyGv2x2iIF_1.jpg?max_age=2592000'
          // }
        ],
        // 是否默认缩小
        autoShrink: true,
        // 缩小时缩为哪种模式
        shrinkMode: 'float',
        // 悬浮窗样式
        floatStyle: { bottom: '50px', 'z-index': '999999' }

      }
    ]
  ]
}