<template>
  <div class="home">
    <Layout class='contentLayout'>
      <Sider class="sider" width='240'>
       <menuComponent :menuList = 'menuList'></menuComponent>
      </Sider>
      <Layout>
        <Header class="header" height='50'>
            <div class="header-content-left">
              <img src="../assets/blog_logo.jpg" alt="BeMount个人博客logo" height='50px' style="margin-top:22px">
            </div> 
            <div class='header-content-right' @click="login" v-if="isLogedIn">
                  <Avatar icon="ios-person"  size="large" style="marginRight:5px"/>
                  <span>登录</span>
            </div> 
            <div v-else>
               <Dropdown>
                 <a href="javascript:void(0)">
                  BeMount
                  <Icon type="ios-arrow-down"></Icon>
                 </a>
                <DropdownMenu slot="list">
                <DropdownItem>个人中心</DropdownItem>
                <DropdownItem>退出</DropdownItem>
                </DropdownMenu>
              </Dropdown>
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
        <Content class="content">
          <router-view/>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>

<script>
import * as loginRequest from '../apis/login'
import {appRouters} from '@/router/router.js'
import menuComponent from '@/components/menu-component/menuComponent.vue';
import {mapState} from 'vuex';

export default {
  name: 'home',
  data(){
    return {
        isShowlogDialog:false,//是否显示登陆弹框
        isLogedIn:true,
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
        // console.log("state menuList",state.app.menuList);
        return state.app.menuList;
      }
    })
  },

  methods:{
    handleSignUp(name){
       this.$refs[name].validate((valid) => {
                    if (valid) {
                        loginRequest.addUsers(this);
                    } else {
                        this.$Message.error('Fail!');
                    }
              })
    },
    login(){  
      this.$refs['formData'].resetFields();
      this.isShowlogDialog = true;
    },
    handleSubmit(name){
            this.$refs[name].validate((valid) => {
                    if (valid) {
                        loginRequest.login(this);
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
    background-color: yellow;
    display: flex;
    justify-content: space-between;
    align-items: center;
  } 


  .sider{
    background-color:rgb(255, 255, 255);
  }

  .content{
    height:calc(~"100vh - 50px");
    background-color: aliceblue;
  }


</style>
