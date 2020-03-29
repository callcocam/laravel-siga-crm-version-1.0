<!-- =========================================================================================
  File Name: FullPage.vue
  Description: Full page layout
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->
<template>
    <div id="page-user-edit">
<!--        <vs-alert color="danger" title="User Not Found" :active.sync="loading">-->
<!--            <span>User record with id: {{ $route.params.id }} not found. </span>-->
<!--            <span>-->
<!--        <span>Check </span><router-link :to="{name:'home'}" class="text-inherit underline">All Users</router-link>-->
<!--      </span>-->
<!--        </vs-alert>-->
        <vx-card v-if="loading">
            <div slot="no-body" class="tabs-container px-6 pt-6">
                <vs-tabs v-model="activeTab" class="tab-action-btn-fill-conatiner">
                    <vs-tab :label="item.label" icon-pack="feather" :icon="item.icon" v-for="(item, index) in usersData" :key="index">
                        <template v-for="(content, content_index) in item">
                            <component :element="content" v-bind:active="activeTab" :is="currentTabComponent(content.name)" :key="content_index"></component>
                        </template>
                    </vs-tab>
                </vs-tabs>
            </div>
        </vx-card>
    </div>
</template>
<script>
    import AbstractTemplate from "./AbstractTemplate";
    export default {
        name:"AbstractForm",
        extends:AbstractTemplate,
        components:{
            RowRenderDefault:()=>import(/* webpackChunkName: "section-render-fielads" */"@views/pages/form/rows/RowRenderDefault"),
        },
        methods:{
            loadAll(){
                this.loading = false;
                this.$store.dispatch("userManagement/all", this.params).then(response=>{
                    this.$store.commit('userManagement/SET_DATA', response.data);
                    this.$vs.loading.close('#div-with-loading > .con-vs-loading');
                    this.loading = true;

                }).catch(err => {
                    this.loading = true;
                    this.$vs.loading.close('#div-with-loading > .con-vs-loading');
                })
            },
            currentTabComponent: function(Component) {
                return Component;
            }
        },
        computed:{
            usersData() {
                let data = this.$store.getters['userManagement/getRows'];
                return data;
            }
        },
        created() {
            Object.assign(this.params,this.$route);
            this.loadAll();

        }
    }
</script>

