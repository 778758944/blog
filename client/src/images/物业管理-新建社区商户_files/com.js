(function() {


  // if(window.Notification){
  //   Notification.requestPermission().then(function(res){
  //     // console.log(res);
  //   })
  // }
  //左侧菜单
  var _menuData = [{
    name: '物业基本信息',
    icon: 'baoshibaoxiu',
    routes: [
      {
        name: '基本信息',
        url: '/pages/property/property_info.html'
      },
      {
        name:"数据统计",
        url:'/pages/property/data_info.html'
      }
    ],
    open: false,
    show: true
  }, {
    name:'住户信息',
    icon:"baoshibaoxiu",
    open:false,
    show:true,
    routes:[
      {
        name:'所有住户',
        url:"/pages/property/zh_info.html"
      },
      {
        name:'黑名单',
        url:'/pages/order/black_list.html'
      }
    ]
  },{
    name: '报事报修',
    icon: 'baoshibaoxiu',
    routes: [{
      name: '所有工单',
      url: '/pages/order/order_list.html'
    }],
    open: false,
    show: true
  }, {
    name: '社区公告',
    icon: 'gonggao',
    routes: [{
      name: '公告列表',
      url: '/pages/notice/list.html'
    }],
    open: false,
    show: true
  }, {
    name: '房屋信息管理',
    icon: 'gonggao',
    routes: [{
      name: '房屋列表',
      url: '/pages/house/house_list.html'
    }],
    open: false,
    show: true
  }, {
    name: '社区小邮局',
    icon: 'xiaoyouju',
    routes: [{
      name: '全部包裹',
      url: '/pages/express/express_list.html'
    }],
    open: false,
    show: true
  }, {
    name: '项目设置',
    icon: 'zhanghaoshezhi1',
    routes: [{
      name: '部门管理',
      url: '/pages/office/department.html'
    }, {
      name: '人员列表',
      url: '/pages/office/list.html'
    }, {
      name: '服务时间设置',
      url: '/pages/order/time_config.html'
    },{
      name: '报事报修设置',
      url: '/pages/office/service_scope.html'
    },{
      name:'小区结构表',
      url:"/pages/office/community.html"
    }],
    open: false,
    show: true
  },{
    name:'社区运营',
    icon:"zhanghaoshezhi",
    open:false,
    show:true,
    routes:[{
      name:"首页推广位",
      url:'/pages/market/tuiguang.html'
    },{
      name:"社区商户管理",
      url:'/pages/market/shanghu.html'
    }]
  }, {
    name: '账号设置',
    icon: 'zhanghaoshezhi',
    routes: [{
      name: '修改密码',
      url: '/pages/user/change.html'
    }],
    open: false,
    show: true
  }]

  var notify=Vue.extend({

  })

  var menu = Vue.extend({
    props: {
      source: {
        coerce: function(ar) {
          // var path = location.href.replace(location.origin, '')
          var path = location.pathname

          ar.forEach(function(it) {
            if (it.routes.some(function(route) {
              return route.url == path
            })) {
              Vue.set(it, 'open', true)
            } else {
              Vue.set(it, 'open', false)
            }
          })

          return ar
        }
      }
    },
    ready: function () {
      var x = this
      setInterval(function () {
        post('/menucount', function (res) {
          if(res.code == 0){
            nn.num=x.newmessage = res.data.newmessage >=99? '99+':res.data.newmessage
            x.newpackage = res.data.newpackage >= 99? '99+':res.data.newpackage

            // if(res.data.newmessage){
            //       console.log('notification');
            //       var notify=new Notification('您有新的通知',{
            //         body:"您有"+res.data.newmessage+"张保修单代处理",
            //         label:"12",
            //         icon:'http://c.hiphotos.baidu.com/baike/c0%3Dbaike150%2C5%2C5%2C150%2C50/sign=c4aec628d9b44aed4d43b6b6d275ec64/279759ee3d6d55fbf04db3446e224f4a21a4ddcd.jpg'
            //       })
            //     }

            // if(res.data.newpackage){
            //   var notify=new Notification('您有新的通知',{
            //     body:"您有"+res.data.newmessage+"个新的包裹",
            //     label:"13",
            //     icon:'http://c.hiphotos.baidu.com/baike/c0%3Dbaike150%2C5%2C5%2C150%2C50/sign=c4aec628d9b44aed4d43b6b6d275ec64/279759ee3d6d55fbf04db3446e224f4a21a4ddcd.jpg'
            //   })
            // }

          }
        }.bind(this))
      }, 3000)

      post('/menucount', function (res) {
              if(res.code == 0){
                this.newmessage = res.data.newmessage >=99? '99+':res.data.newmessage
                this.newpackage = res.data.newpackage >= 99? '99+':res.data.newpackage
              }
            }.bind(this))
    },
    data: function() {
      // return {curPath: location.href.replace(location.origin, '')}
      return {
        curPath: location.pathname,
        newmessage: 0,
        newpackage: 0
      }
    },
    template: '<div class="menu-list" v-if="item.show" v-for="item in source">' +
      '<div class="menu-title" :class="{\'active-line\': item.open}" @click="toggle(item)">' +
      '<i class="wy-font{{item.icon? \' icon-\' + item.icon: \'\' }}"></i>' +
      '<span>{{item.name}} <a class="badge" v-if="$index== 1" v-show="newmessage!=0">{{newmessage}}</a> <a class="badge" v-if="$index== 4" v-show="newpackage!=0">{{newpackage}}</a></span>' +
      '<b class="iconfont">&#xe611;</b>' +
      '</div>' +
      '<ul class="menu-ul" :style="{ height: item.open? 50*item.routes.length + \'px\': \'0px\'}">' +
      '<li v-for="it in item.routes" :class="{active: it.url == curPath}"><a href="{{it.url}}">{{it.name}}</a></li>' +
      '</ul>' +
      '</div>',
    methods: {
      toggle: function(item) {
        if (item.open) return item.open = false

        this.source.forEach(function(it) {
          it.open = false
        })
        item.open = true
      }
    }

  })

  var notify=Vue.extend({
    props:['num'],
    template:"<div class='notification_bar' v-show='!!num'><a href='/pages/order/order_list.html'>有{{num}}个报事报修工单待处理，立即处理&gt;&gt;</a></div>",
  })

  var info = JSON.parse(localStorage.getItem('info'))
  if (info.leader_id == 0) {
    _menuData[5].show = true
  } else {
    _menuData[5].show = false
  }

  new Vue({
    el: '#menu',
    data: {
      data: _menuData
    },
    components: {
      'v-menu': menu
    }
  })

  var nn=new Vue({
    el:"#notify",
    data:{
      num:0,
    },
    components:{
      'v-notify':notify
    }
  })

})();

(function() {
  //顶部信息栏目


  // document.querySelector('.wrap-header').style.backgroundColor='#f00';

  var top = Vue.extend({
    props: ['source'],
    template: '<div class="header-info">' +
      '<div class="header-name"><i class="wy-font icon-yonghuming"></i> ' +
      '欢迎您: {{source.community.title}} {{source.mobile}}' +
      '</div>' +
      '<div class="logout" @click="logout">' +
      '<i class="wy-font icon-tuichu"></i> ' +
      '退出' +
      '</div>' +
      '</div>',
    ready:function(){
      var info=JSON.parse(localStorage.getItem('info'));
      console.log(info);
      if(info.app){
        // alert('kkk');
        document.querySelector('.wrap-header').style.backgroundColor=info.app.wuye_color;
        document.querySelector('.header-name').style.borderColor='#fff';
        document.querySelector('.header-icon').style.backgroundImage='url('+info.app.wuye_pic+')';
        document.querySelector('.header-info').style.color="#fff";
      }
      else{
        // alert('no app');
        document.querySelector('.wrap-header').style.backgroundColor='#ffd057';
        document.querySelector('.header-icon').style.backgroundImage='url(http://gw.aidaojiacdn.com/upload_c322895fb26a95e39a8174d9f525eb4c_439x58.png)';
      }
    },
    methods: {
      logout: function() {
        post('/logout', function(res) {
          if (res.code == 0) {
            localStorage.setItem('info', '')
            location.href = '/pages/login.html'
          } else {
            $message.error(res.msg)
          }
        })
      }
    }
  })

  var lg = localStorage.getItem('info')
  if (!lg) location.href = '/pages/login.html'
  var j = JSON.parse(localStorage.getItem('info'))

  if (!j) location.href = '/pages/login.html'
  new Vue({
    el: '#top',
    data: {
      data: j
    },
    components: {
      'v-top': top
    }
  })

})();

(function (window, Vue) {

  var file = Vue.extend({
    template: `
                <button class="btn btn-default" @click="btn"><i class="iconfont icon-upload"></i> 上传图片</button>
                <div>
                    <form style="display: none;" v-el:form>
                        <input type="file" @change="upload" v-el:file accept="image/jpg, image/jpeg, image/png">
                    </form>
                    <img width="{{sw}}" height="{{sh}}" :src="url" v-show="url">
                </div>
            `,
    props: {
      url: {
        type: String,
        default: ''
      },
      sw: {
        default: ''
      },
      sh: {
        default: 50
      }
    },
    data() {
      return {
        loading: false
      }
    },
    methods: {
      btn() {
        if (this.loading) {
          return
        }
        this.$els.form.reset()
        this.$els.file.click()
      },
      upload() {
        var x = this
        x.loading = true
        var form = new FormData()
        form.append('img', x.$els.file.files[0])
        var xhr = new XMLHttpRequest()
        xhr.open('post', commonURL + '/upload')
        xhr.withCredentials = true
        xhr.send(form)

        xhr.onload = function() {
          var res = JSON.parse(xhr.responseText)

          x.loading = false
          if (res.code == 0) {
            $message.success('上传成功')
            x.url = res.data.url
          } else {
            $message.error('上传失败')
          }
        }
      }
    }

  })

  window.components = window.components || {}
  window.components.fileUpload = file

})(window, Vue)
