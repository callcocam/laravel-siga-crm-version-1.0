<template>
  <div>
      <div class="the-navbar__user-meta flex items-center" v-if="activeUserInfo.name">
          <div class="text-right leading-tight hidden sm:block">
              <p class="font-semibold">{{ activeUserInfo.name }}</p>
              <small>{{ $t('Available')}}</small>
          </div>
          <vs-dropdown vs-custom-content vs-trigger-click class="cursor-pointer">
              <div class="con-img ml-3">
                  <img v-if="activeUserInfo.cover" key="onlineImg" :src="activeUserInfo.cover" alt="user-img" width="40" height="40" class="rounded-full shadow-md cursor-pointer block" />
              </div>
              <vs-dropdown-menu class="vx-navbar-dropdown">
                  <ul style="min-width: 9rem">
                      <li
                          class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
                          @click="$router.push({name:'admin.auth.index'}).catch(() => {})">
                          <feather-icon icon="UserIcon" svgClasses="w-4 h-4" />
                          <span class="ml-2">{{ $t('Profile')}}</span>
                      </li>
                      <vs-divider class="m-1" />
                      <li
                          class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
                          @click="logout">
                          <feather-icon icon="LogOutIcon" svgClasses="w-4 h-4" />
                          <span class="ml-2">{{ $t('Logout')}}</span>
                      </li>
                  </ul>
              </vs-dropdown-menu>
          </vs-dropdown>
      </div>
  </div>
</template>

<script>


export default {
  data() {
    return {

    }
  },
  computed: {
    activeUserInfo() {
      return this.$store.state.AppActiveUser
    }
  },
  methods: {
    logout() {
        // This is just for demo Purpose. If user clicks on logout -> redirect
        this.$router.push({name:'admin.auth.logout'}).catch(() => {})
    },
  }
}
</script>
