//读取json文件需要通过fs模块
const fs = require('fs');

module.exports = {
    devServer:{
        before:(app,serve)=>{
            app.get('/api/goods/home',(req,res)=>{
                //res为后端返回的数据
                fs.readFile('./server/db/home.json','utf-8',(err,data)=>{
                    if(!err){
                        res.json(JSON.parse(data));
                    }
                    })
                })
        }
    }
}