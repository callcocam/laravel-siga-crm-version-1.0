<!-- =========================================================================================
  File Name: UserView.vue
  Description: User View page
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
    <div  id="div-with-loading" class="vs-con-loading__container">
        <div id="page-user-view">

            <vs-alert color="danger" title="User Not Found" :active.sync="user_not_found">
                <span>User record with id: {{ $route.params.id }} not found. </span>
                <span>
        <span>Check </span><router-link to="/"  class="text-inherit underline">All Users</router-link>
      </span>
            </vs-alert>

            <div id="user-data" v-if="usersData">
                <component :element="usersData" :headers="usersHeaders"  :is="currentTabComponent(cellRendererFramework)" ></component>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        components:{
            ShowRenderDefault: ()=>import(/*webpackChunkName: "vue-render-card-show"*/"@views/pages/render/show/ShowRenderDefault"),
            ShowRenderCard: ()=>import(/*webpackChunkName: "vue-render-default-show"*/"@views/pages/render/show/ShowRenderCard"),
            ShowRenderAvatar: ()=>import(/*webpackChunkName: "vue-render-avatar-show"*/"@views/pages/render/show/ShowRenderAvatar"),
            ShowRenderUser: ()=>import(/*webpackChunkName: "vue-render-user-show"*/"@views/pages/render/show/ShowRenderUser"),
        },
        data() {
            return {
                params:{
                    url:'/api/v1/admin/users',
                    query:{}
                },
                user_not_found: false,
            }
        },
        methods: {
            loadAll(){
                this.loading = false;
                this.openLoadingInDiv();
                this.$store.dispatch("userManagement/find", this.params).then(response=>{
                    this.$vs.loading.close('#div-with-loading > .con-vs-loading');
                    this.loading = true;
                    this.user_not_found = false;
                }).catch(err => {
                    console.log(err.response)
                    this.loading = true;
                    this.$vs.loading.close('#div-with-loading > .con-vs-loading');
                })
            },
            currentTabComponent: function(Component) {
                return Component;
            },
            openLoadingContained() {
                this.$vs.loading({
                    background: this.backgroundLoading,
                    color: this.colorLoading,
                    container: "#button-with-loading",
                    scale: 0.45
                })
            },
            openLoadingInDiv() {
                this.$vs.loading({
                    container: '#div-with-loading',
                    scale: 0.6
                })
            }
        },
        computed:{
            usersData() {
                let data = this.$store.getters['userManagement/getRows'];
                return data;
            },
            usersHeaders() {
                let data = this.$store.getters['userManagement/getHeaders'];
                return data;
            },
            cellRendererFramework() {
                let data = this.$store.getters['userManagement/getCellRendererFramework'];
                return data;
            }
        },
        mounted() {
            Object.assign(this.params,this.$route);
            this.loadAll();

        }
    }

</script>

<style lang="scss">
    #avatar-col {
        width: 10rem;
    }

    #page-user-view {
        table {
            td {
                vertical-align: top;
                min-width: 140px;
                padding-bottom: .8rem;
                word-break: break-all;
            }

            &:not(.permissions-table) {
                td {
                    @media screen and (max-width:370px) {
                        display: block;
                    }
                }
            }
        }
    }
    @media screen and (min-width:1201px) and (max-width:1211px),
    only screen and (min-width:636px) and (max-width:991px) {
        #account-info-col-1 {
            width: calc(100% - 12rem) !important;
        }

    }

</style>
