<!-- =========================================================================================
    File Name: Main.vue
    Description: Main layout
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
    Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <div class="layout--main" :class="[layoutTypeClass, navbarClasses, footerClasses, {'no-scroll': isAppPage}]">
    <v-nav-menu
      :navMenuItems = "navMenuItems"
      title         = "Vuexy"
      parent        = ".layout--main" />
    <div id="content-area" :class="[contentAreaClass, {'show-overlay': false}]">
      <div id="content-overlay" />
    <!-- Navbar -->
        <the-navbar-vertical
            :navbarColor="navbarColor"
            class="text-base" />

    <!-- /Navbar -->
      <div class="content-wrapper">
        <div class="router-view">
          <div class="router-content">
            <transition :name="routerTransition">
              <div v-if="$route.meta.breadcrumb || $route.meta.pageTitle" class="router-header flex flex-wrap items-center mb-6">
                <div
                  class="content-area__heading"
                  :class="{'pr-4 border-0 md:border-r border-solid border-grey-light' : $route.meta.breadcrumb}">
                  <h2 class="mb-1">{{ routeTitle }}</h2>
                </div>
                <!-- BREADCRUMB -->
                <vx-breadcrumb class="ml-4 md:block hidden" v-if="$route.meta.breadcrumb" :route="$route" />
                <!-- DROPDOWN -->
              </div>
            </transition>

            <div class="content-area__content">
              <back-to-top bottom="5%" visibleoffset="500" v-if="!hideScrollToTop">
                <vs-button icon-pack="feather" icon="icon-arrow-up" class="shadow-lg btn-back-to-top" />
              </back-to-top>

              <transition :name="routerTransition" mode="out-in">

                <router-view
                  :key="$route.fullPath"
                  @changeRouteTitle="changeRouteTitle"
                  @setAppClasses="(classesStr) => $emit('setAppClasses', classesStr)" />
              </transition>
            </div>
          </div>
        </div>
      </div>
      <the-footer />
    </div>
  </div>
</template>


<script>
import BackToTop           from 'vue-backtotop'
import navMenuItems        from "@/layouts/components/vertical-nav-menu/navMenuItems.js"
import TheNavbarVertical   from '@/layouts/components/navbar/TheNavbarVertical.vue'
import TheFooter           from '@/layouts/components/TheFooter.vue'
import themeConfig         from '@/../themeConfig.js'
import VNavMenu            from '@/layouts/components/vertical-nav-menu/VerticalNavMenu.vue'

export default {
  components: {
    BackToTop,
    TheFooter,
    TheNavbarVertical,
    VNavMenu
  },
  data() {
    return {
      footerType        : themeConfig.footerType  || 'static',
      hideScrollToTop   : themeConfig.hideScrollToTop,
      isNavbarDark      : false,
      navbarColor       : themeConfig.navbarColor || '#fff',
      navbarType        : themeConfig.navbarType  || 'floating',
      navMenuItems      : navMenuItems,
      routerTransition  : themeConfig.routerTransition || 'none',
      routeTitle        : this.$route.meta.pageTitle,
    }
  },
  watch: {
    "$route"() {
      this.routeTitle = this.$route.meta.pageTitle
    },
  },
  computed: {
    contentAreaClass() {
      if(this.mainLayoutType === "vertical") {
        if      (this.verticalNavMenuWidth == "default") return "content-area-reduced"
        else if (this.verticalNavMenuWidth == "reduced") return "content-area-lg"
        else return "content-area-full"
      }
      else return "content-area-full"
    },
    footerClasses() {
      return {
        'footer-hidden': this.footerType == 'hidden',
        'footer-sticky': this.footerType == 'sticky',
        'footer-static': this.footerType == 'static',
      }
    },
    isAppPage() {
      return this.$route.meta.no_scroll
    },
    layoutTypeClass() { return `main-${this.mainLayoutType}` },
    mainLayoutType()  { return this.$store.state.mainLayoutType  },
    navbarClasses()   {
      return {
        'navbar-hidden'   : this.navbarType == 'hidden',
        'navbar-sticky'   : this.navbarType == 'sticky',
        'navbar-static'   : this.navbarType == 'static',
        'navbar-floating' : this.navbarType == 'floating',
      }
    },
    verticalNavMenuWidth() { return this.$store.state.verticalNavMenuWidth },
  },
  methods: {
    changeRouteTitle(title) {
      this.routeTitle = title
    },
  }
}

</script>

