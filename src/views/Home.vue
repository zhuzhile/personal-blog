<template>
  <div class="home">
    <Layout class='contentLayout'>
      <Sider class="sider" width='240'>
       <img src="../assets/blog_logo.jpg" alt="BeMount个人博客logo" height='50px' style="margin-bottom:5px;margin-left:20px">
       <menuComponent :menuList = 'menuList'></menuComponent>
      </Sider>
      <Layout>
        <Header class="header" height='50'>
            <div class="header-content-left">
              <!-- <img src="../assets/blog_logo.jpg" alt="BeMount个人博客logo" height='50px' style="margin-top:22px"> -->
            </div> 
             <div v-if='isLogedIn'>
               <Dropdown @on-click="handleRouterRedirect">
                 <a href="javascript:void(0)">
                  <template v-if = "avatarUrl">
                    <Avatar size = "large" style="margin-right:10px; color: #f56a00;background-color: #fde3cf" :src = "avatarUrl">{{userName[0].toUpperCase()}}</Avatar>
                  </template>
                  <template v-else>
                    <Avatar size = "large" style="margin-right:10px; color: #f56a00;background-color: #fde3cf">{{userName[0].toUpperCase()}}</Avatar>
                  </template>
                  <Icon type="ios-arrow-down"></Icon>
                 </a>
                <DropdownMenu slot="list" >
                <DropdownItem name="personalCenter">个人中心</DropdownItem>
                <DropdownItem name="logout">退出</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
            <div class='header-content-right' @click="login" v-else>
                  <Avatar icon="ios-person"  size="large" style="marginRight:5px"/>
                  <span>登录</span>
            </div> 
           
        </Header>
       <Modal
        v-model="isShowlogDialog"
        title="登录"
        >
        <Form ref="formData" :model="formData" :rules="rules" label-position="left" :label-width="80">
            <FormItem prop="user" label="用户名:">
                <Input type="text" v-model="formData.user" placeholder="用户名"/>
            </FormItem>
            <FormItem prop="password" label="密码:">
                <Input type="password" v-model="formData.password" placeholder="密码" password/>
            </FormItem>
        </Form>
        <div slot="footer">
              <Button type="primary" @click="handleSubmit('formData')" size='large'>Sign in</Button>
              <Button type="primary" @click="handleSignUp('formData')" size="large">Sign up</Button>
        </div>
       </Modal>
        <Content class="content" style='width:calc( ~"100wh - 200px");height: calc(~"100vh - 50px"); background-color: aliceblue;'>
          <router-view v-if="isRouterAlive"/>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>

<script>
import * as loginRequest from '../apis/login'
import Cookie from 'js-cookie'
import {appRouters} from '@/router/router.js'
import menuComponent from '@/components/menu-component/menuComponent.vue';
import {mapState,mapMutations} from 'vuex';
import {baseUserNameChangeMenuList} from '@/util/util.js';


export default {
  name: 'home',
  data(){
    return {
        isShowlogDialog:false,//是否显示登陆弹框
        isLogedIn: false,
        userName:'',
        pageSize: 3,
        isRouterAlive: true,
        current: 1,
        // userName:Cookie.get('userName'),
        formData:{
                user:'',
                password:'',
        },
        // menuList:[],
        rules:{
              user: [
                        { required: true, message: 'Please fill in the user name', trigger: 'blur' }
                    ],
             password: [
                        { required: true, message: 'Please fill in the password.', trigger: 'blur' },
                        { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
                    ]
            }

    }
  },
  components:{
    menuComponent
  },

  computed:{
    ...mapState({
      menuList: state => {
        return state.app.menuList;
      },
      avatarUrl: state => {
        return state.user.avatarUrl;
      },
      name: state => {
        return state.user.name;
      }
     
    })
  },

   created(){
      if(localStorage.getItem('jwt')){
        this.userName = Cookie.get('userName');
        this.isLogedIn = true;
        baseUserNameChangeMenuList(this);
      }
   },

  methods:{
    // 注册表单处理
    handleSignUp(name){
       this.$refs[name].validate((valid) => {
                    if (valid) {
                        loginRequest.addUsers(this, name);
                    } else {
                        this.$Message.error('Fail!');
                    }
              })
    },
    reload() {
      this.isRouterAlive = false
      this.$nextTick(function() {
        this.isRouterAlive = true
      })
    },

    ...mapMutations(['updateMenuList','updateUserMenuList','initAvatarUrl']),
   
    // 点击登录注册
    login(){  
      this.$refs['formData'].resetFields();
      this.isShowlogDialog = true;
    },

    //个人中心退出登录处理
    handleRouterRedirect(name){
      if(name == 'personalCenter'){
        if(localStorage.getItem('jwt') ){
          this.$router.push({name})
        }else{
          this.$Message.info("请先登录");
       }
      }else{
        localStorage.clear();
        Cookie.remove('userName');
        // this.$router.go(0);
        this.reload();
        this.$store.commit('initMenuList', appRouters);
        this.isLogedIn = false;
        this.$router.push({name:'articleManagementIndex'})
      }
    },


    // 登录表单处理
    handleSubmit(name){
            this.$refs[name].validate((valid) => {
                    if (valid) {
                        loginRequest.login(this, name);
                    } else {
                        this.$Message.error('Fail!');
                    }
              })
    }
  }
}
</script>

<style lang="less" scoped>
  .contentLayout,
  .sider,
  .home{
    height:100vh;
  }

  .header{
    background-color: rgba(253, 114, 109);
    display: flex;
    justify-content: space-between;
    align-items: center;
    // position: fixed;
  } 


  .sider{
    background-color:rgb(255, 255, 255);
  }
</style>
