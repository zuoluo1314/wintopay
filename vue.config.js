//如何写接口，接口案例  修改了接口路径，一定要重启服务器
//读取json文件需要通过fs模块
const fs = require('fs');
const express = require('express');
const app = express();
const cors = require('cors');
const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser');
//以上是接口实现的前提一定要加上  同时下载cnpm install jsonwebtoken(token)  cnpm install cors(跨域)  cnpm install body-parser(post插件)
// npm i cors body-parse express jsonwebtoken -s

module.exports = {
    devServer: {
        before: (app, serve) => {
            app.use(cors());
            app.use(bodyParser.json());
            app.use(bodyParser.urlencoded({ extended: false }))
            app.get('/api/goods/home', (req, res) => {
                //res为后端返回的数据
                fs.readFile('./server/db/home.json', 'utf-8', (err, data) => {
                    if (!err) {
                        res.json(JSON.parse(data));
                    }
                })
            })

            // 登录3：模拟一个登陆的接口
            app.post('/api/login', (req, res) => {
                console.log(req.body.user);
                // 登录成功获取用户名
                let username = req.body.user
                //一系列的操作
                res.json({
                    // 进行加密的方法
                    // sing 参数一：加密的对象 参数二：加密的规则 参数三：对象
                    token: jwt.sign({ username: username }, 'abcd', {
                        // 过期时间
                        expiresIn: "3000s"
                    }),
                    username,
                    state: 1,
                    file: '/static/images/1570600179870.png',
                    code: 200,
                    address: null,
                    balance: null,
                    description: null,
                    email: null,
                    message: null,
                    phone: null,
                    points: null,
                    sex: null,
                    id: 62
                })
            })

            //登录4 进行校验
            // 登录持久化验证接口 访问这个接口的时候 一定要访问token（前端页面每切换一次，就访问一下这个接口，问一下我有没有登录/登陆过期）
            // 先访问登录接口，得到token，在访问这个，看是否成功
            app.post('/api/validate', function (req, res) {
                //authorization 请求头的数据携带token
                let token = req.headers.authorization;
                console.log(token);

                //  验证token合法性 对token进行解码
                jwt.verify(token, 'abcd', function (err, decode) {
                    if (err) {
                        res.json({
                            msg: '当前用户未登录'
                        })
                    } else {
                        // 证明用户已经登录
                        res.json({
                            token: jwt.sign({ username: decode.username }, 'abcd', {
                                // 过期时间
                                expiresIn: "3000s"
                            }),
                            username: decode.username,
                            msg: '已登录',
                            address: null,
                            balance: null,
                            description: null,
                            email: null,
                            file: "/static/images/1570600179870.png",
                            id: 62,
                            message: null,
                            phone: null,
                            points: null,
                            sex: null,
                            state: 1,
                        })
                    }
                })
            })
        }
    },
}


