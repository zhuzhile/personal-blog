
## 使用说明
- 登录角色介绍
   -  博客拥有者 (BeMount) 
   -  普通用户，可自己注册
   -  游客
- 不同权限
   - 拥有者可以编辑文章，发布文章
   - 登录者可以收藏文章，查看文章，对文章评论进行管理
- 技术栈
   - Vue
   - Nodejs
   - Mongodb
   - Nginx
- 功能模块
   - 个人中心 
      - 修改密码
      - 修改头像
      - 完善个人信息
      - 查看收藏
   - 评论管理
      - 查看评论
      - 删除评论
   - 编辑文章
      - 发布文章
      - 使用markdown格式
      - 选择标签
      - 添加标签
      - 添加文章描述
   - 文章管理
      - 查看文章
      - 收藏文章
   - 作者相关
      - 有关作者的静态页面
  
- 密码
  - 博客拥有者密码为123456,请使用BeMount用户名登录。(仅用于测试)
- 分支
   - master分支为前端代码
   - server分支为后端代码

---- 
后期优化
- 个人头像在头部模块显示。
- 支持随着浏览器缩小，博客中字体也随着变小。
- 优化webpack打包，将nodeModel中iview与mavon-editor单独打包，通过并行加载，优化加载速度。
- 暂不支持移动端，如果使用移动端访问会提醒前往PC端访问。
- 最新支持上传本地图片，修改头像(本次使用的是作者自己的阿里云OSS服务，如果想要使用该功能，请自己前往申请https://oss.console.aliyun.com/overview)
## 线上地址

http://101.200.187.225:8081 

http://www.njuptbemount.cn:8081(尚在备案中)

