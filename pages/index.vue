<template>
<div>

<fb:login-button 
  scope="public_profile,email"
  onlogin="login();">
</fb:login-button>

</div>
</template>
<script>
export default {
  methods: {
    login() {
      const vm = this;
      // 檢查登入狀態
      FB.getLoginStatus(function(response) {
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
      // 檢查登入狀態
      FB.getLoginStatus(function(response) {
        // 檢查登入狀態
        if (response.status === "connected") {
          // 移除授權
          FB.api("/me/permissions", "DELETE", function(res) {
            // 用戶登出
            FB.logout();
          });
        } else {
          // do something
        }
      });
    },
    getProfile() {
      FB.api("/me?fields=name,id,email", function(res) {
        // do something
      });
    }
  },
};
</script>