<template>
  <!-- 脚部 -->
    <div class="footer">
      <div class="container">
        <div class="footer-links">
            <div class="col-links">
              <h5>信息文章</h5>
              <ul class="footer-info">
                  <li>
                    <a href="#">关于我们</a>
                  </li>
                  <li>
                    <a href="#">物流配送</a>
                  </li>
                  <li>
                    <a href="#">隐私政策</a>
                  </li>
                  <li>
                    <a href="#">使用条款</a>
                  </li>
              </ul>
            </div>
            <div class="col-links">
              <h5>信息文章</h5>
              <ul class="footer-info">
                  <li>
                    <a href="#">关于我们</a>
                  </li>
                  <li>
                    <a href="#">物流配送</a>
                  </li>
                  <li>
                    <a href="#">隐私政策</a>
                  </li>
                  <li>
                    <a href="#">使用条款</a>
                  </li>
              </ul>
            </div>
            <div class="col-links">
              <h5>信息文章</h5>
              <ul class="footer-info">
                  <li>
                    <a href="#">关于我们</a>
                  </li>
                  <li>
                    <a href="#">物流配送</a>
                  </li>
                  <li>
                    <a href="#">隐私政策</a>
                  </li>
                  <li>
                    <a href="#">使用条款</a>
                  </li>
              </ul>
            </div>
            <div class="col-links">
              <h5>信息文章</h5>
              <ul class="footer-info">
                  <li>
                    <a href="#">关于我们</a>
                  </li>
                  <li>
                    <a href="#">物流配送</a>
                  </li>
                  <li>
                    <a href="#">隐私政策</a>
                  </li>
                  <li>
                    <a href="#">使用条款</a>
                  </li>
              </ul>
            </div>
        </div>
        <hr>
        <div class="footer-contact">
          <p>
            技术支持 MyCnCart <br>
            我的B2C中国网店 © 2020 <br>

            鲁ICP备16025901号
          </p>
        </div>
      </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/style/reset";
//脚部start
.footer{
  width: 1226px;
  height: 276px;
  margin: 0 auto; // 样式居中
}

.footer .container{
  width: 1226px;
  height: 276px;
  background-color:#666;
}

.footer .container .footer-links{
  width: 1226px;
  height: 126px;
  text-align: center;
  padding-top: 20px;
}

.footer .container .footer-links h5{
  color:white;
}

.footer .container .footer-links .col-links{
  width: 292px;
  height: 130px;
  float: left;
}

.footer .container .footer-links .col-links a{
  color: white;
  font-size: 12px;
}

.footer .container .footer-contact{
  width: 1226px;
  height: 80px;
  margin-top: 20px;
  color: white;
  margin-left: 110px;
}
//脚部end
</style>
