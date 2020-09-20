<template>
<div>
<b-button  variant="primary" @click="login()"> FB登入</b-button>
<b-button  variant="danger" @click="logout()"> FB登出</b-button>
<b-alert  v-model="authorized">
  登入成功
  Name:{{profile.name}} - Email:{{profile.email}}
</b-alert>
<p v-if="profile.name"> Name:{{profile.name}} - Email:{{profile.email}}</p>
</div>
</template>
<script>
export default {
  data() {
    return {
      profile: {},
      authorized: false,
      token:''
    } 
  },
  methods: {
    login() {
      const vm = this;
      // 檢查登入狀態
      FB.getLoginStatus(function(response) {
        console.log('getLoginStatus(function(response)')
        console.log(response)
        // 登入狀態 - 已登入
        if (response.status === "connected") {
          // 獲取用戶個人資料
          vm.authorized=true;
          vm.token=response.authResponse.accessToken;
          vm.getProfile();
        } else {
          // 登入狀態 - 未登入
          // 用戶登入(確認授權)
          FB.login(function(response) {
              console.log('FB.login-----res')
              console.log(response)
              // 獲取用戶個人資料
              vm.authorized=true;
              vm.token=response.authResponse.accessToken;
              vm.getProfile();
            },
            // 授權 - 個人資料&Email
            { scope: "public_profile,email" }
          );
        }
      });
    },
    logout() {
      console.log('logout----')
      let vm = this
      // 檢查登入狀態
      FB.getLoginStatus(function(response) {
        // 檢查登入狀態
        if (response.status === "connected") {
          // 移除授權
          FB.api("/me/permissions", "DELETE", function(res) {
            // 用戶登出
            FB.logout();
            vm.profile = {}
            vm.authorized = false
            console.log('已登出----')
          });
        } else {
          // do something
        }
      });
    },
    getProfile() {
      let vm = this
      console.log('進入getProfile--1')
      FB.api(
        '/me',
        'GET',
        {"fields":"id,name,email,groups"},
        function(response) {
          console.log('function(response)---id,name,email,groups');
          console.log(response);
          // do something
         vm.$set(vm, 'profile', response)
        }
        );
    }
  },
};
</script>