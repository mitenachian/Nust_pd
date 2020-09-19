<template>
<div>

<b-button  variant="primary" @click="login()"> FB登入</b-button>
<b-button  variant="danger" @click="logout()"> FB登出</b-button>
<b-alert v-if="test_res">{{test_res}}</b-alert>
</div>
</template>
<script>
export default {
  data() {
    return {
      user_id:'',
      user_name:'',
      user_email:'',
      user_groups_list:'',
      test_res:[],
    } 
  },
  methods: {

    login() {
      const vm = this;
      // 檢查登入狀態
      FB.getLoginStatus(function(response) {
        console.log('getLoginStatus--1')
        // 登入狀態 - 已登入
        if (response.status === "connected") {
          // 獲取用戶個人資料
          vm.getProfile();
        } else {
          // 登入狀態 - 未登入
          // 用戶登入(確認授權)
          FB.login(
            function(res) {
              // 獲取用戶個人資料
              vm.getProfile();
            },
            // 授權 - 個人資料&Email
            { scope: "public_profile,email" }
          );
        }
      });
    },
    logout() {
      console.log('進入getProfile--1')
      // 檢查登入狀態
      FB.getLoginStatus(function(response) {
        // 檢查登入狀態
        if (response.status === "connected") {
          // 移除授權
          FB.api("/me/permissions", "DELETE", function(res) {
            // 用戶登出
            FB.logout();
            this.test_res=[];
          });
        } else {
          // do something
        }
      });
    },
    getProfile() {
      console.log('進入getProfile--1')
      FB.api(
        '/me',
        'GET',
        {"fields":"id,name,email"},
        function(response) {
          // do something
        this.test_res = response
        console.log(response);
        }
        );
    }
  },
};
</script>