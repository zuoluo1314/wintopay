图片项目首页效果展示:
![image](https://github.com/zuoluo1314/wintopay/blob/master/src/assets/images/home1.png)
![image](https://github.com/zuoluo1314/wintopay/blob/master/src/assets/images/home2.png)

主要技术开发流程：

1.导航顶部通过div+css和element下拉组件完成语言货币登切换的功能

2.导航栏logo通过router-link便于路由跳转首页，搜索框采用ele-input组件

3.轮播图采用的是element走马灯组件实现

4.特色商品采用for循环，后台数据驱动视图

5.固定定位采用position:fixed固定定位设置+z-index权重进行覆盖

6.中英文切换采用vue-i18n，进行事件的点击赋值，并且通过localStorage进行语言持久化

7.注册页分为邮箱注册和手机注册，对邮箱、手机和密码做双向绑定进行表单校验，同时对密码进行md5加密，通过axios调取接口提交数据到服务器，并且返回state状态

8.手机验证码实现：通过点击事件，使用axios调取接口提交手机号到服务器判断手机号是否注册，通过点击事件，使用axios接口通知服务器发送验证码，开启倒计时，并且通知服务器进行校验验证码正确性，返回state

9.登录页实现：通过事件绑定跳转登录页，首先对表单进行检验，通过提交事件，将数据提交校验接口，获取token值，通过请求拦截器绑定到每个网页，并且做数据持久化和全局守卫，进行网页权限控制，同时在退出删除token等值，达到退出的目的

10.购物车实现：通过加入购物事件，获取购物车数据，传递给vuex，同时进行持久化保存，获取vuex中购物车数据，在页面中直接渲染，同时通过splice实现购物车商品的删除

11.搜索功能实现：通过搜索点击事件，双向绑定获取搜索关键词，通过forEach和后台中的数据进行对比，对比成功将数据传送vuex中，并且做数据持久化，搜索组件从vuex中获取数据，从而在页面中渲染搜索出来的商品



