<!-- =========================================================================================
    File Name: TableExpandableData.vue
    Description: Create expandable rows which have custom data
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->
<template>
    <vx-card id="div-with-loading" class="vs-con-loading__container" title="ExpandableData">

        <vs-navbar class="p-2  mb-4" v-if="actions && loading">
            <div  :class="action.acClass" :index="index" v-for="(action, index) in actions" :key="index" >
                <component :actions="action" :is="currentTabComponent(action.cellRendererFramework)"></component>
            </div>
            <vs-button class="float-right mt-6 ml-2" :title="$t('New consulta')" type="line" @click.prevent="filterForm()" icon-pack="feather" icon="icon-search"></vs-button>
            <vs-button v-if="options.endpoint" :title="$t('Create new record')" class="float-right mt-6 ml-2" color="success" type="line" @click.prevent="create(options.endpoint)" icon-pack="feather" icon="icon-plus"></vs-button>
        </vs-navbar>
        <vs-table
            :noDataText="$t('No data Available')"
            :sst="true"
            @sort="handleSort"
            v-model="selected"
            :max-items="params.query.perPage"
            :data="usersData"
        >
            <template slot="thead">
                <template v-for="(header, index) in usersHeaders">
                    <template v-if="header.hidden_list">
                        <template v-if="header.sortable">
                            <vs-th :key="index" :sort-key="header.name">{{ $t(header.label) }}</vs-th>
                        </template>
                        <template v-else>
                            <vs-th :key="index">{{ $t(header.label) }}</vs-th>
                        </template>
                    </template>
                </template>
            </template>

            <template slot-scope="{data}">
                <vs-tr :data="row" :key="indextr" v-for="(row, indextr) in data">
                    <template v-for="(header, index) in usersHeaders">
                        <template v-if="header.hidden_list">
                            <vs-td v-if="header.cellRendererFramework" :data="row[header.name]" :key="index" :width="header.width">
                                <component :element="row" :row="row" :headers="header" :header="header" :is="currentTabComponent(header.cellRendererFramework)"></component>
                            </vs-td>
                            <vs-td v-else :data="row[header.name]" :key="index" :width="header.width">
                                {{row[header.name]}}
<!--                                <router-link :to="row.action.edit.object" @click.stop.prevent class="text-inherit hover:text-primary"> </router-link>-->
                            </vs-td>
                        </template>
                    </template>

                    <template class="expand-user" slot="expand">
                        <MasterDetailRender :rows="row" :headers="usersHeaders"/>
                    </template>

                </vs-tr>
            </template>
        </vs-table>
        <vs-card v-if="params.query.page && options.total">
            <vs-pagination
                :descriptionTitle="$t('Registries')"
                :descriptionBody="$t('Pages')"
                :descriptionConnector="$t('to')"
                :description="true"
                @input="handleChangePage"
                :total="totalPage(options)"
                :value="parseInt(params.query.page)"
                :size-array="parseInt(options.total)"
                :max-items="parseInt(options.count)"
            ></vs-pagination>
        </vs-card>
    </vx-card>
</template>

<script>
    import AbstractTemplate from "@views/pages/AbstractTemplate";
    export default {
        extends:AbstractTemplate,
        components:{
            InputRendererDateRangeFlatpicker: ()=>import(/*webpackChunkName: "vue-render-table-filter-range-flat-picker"*/"@views/pages/render/table/filters/InputRendererDateRangeFlatpicker"),
            InputRendererText: ()=>import(/*webpackChunkName: "vue-render-table-filter-text"*/"@views/pages/render/table/filters/InputRendererText"),
            InputRendererSelect: ()=>import(/*webpackChunkName: "vue-render-table-filter-select"*/"@views/pages/render/table/filters/InputRendererSelect"),
            MasterDetailRender: ()=>import(/*webpackChunkName: "vue-render-table-filter-master-detail"*/"@views/pages/render/table/MasterDetailRender"),
        },
        methods:{
            create(endpoint){
                this.$router.push(endpoint.object)
            },
            toClass(cl){
                return cl.toString();
            },
            totalPage(options){
                let pages = (options.total / this.params.query.perPage);
                let rest = (parseInt(pages) * this.params.query.perPage)
                if(pages != rest){
                    pages= parseInt(pages) + 1;
                }
                return pages;
            },
            currentTabComponent: function(Component) {
                return Component;
            },
            handleSearch(searching) {
                this.params.query.search = searching;
                this.params.query.page = 1;
                this.reloadAll()
            },
            handleChangePage(page) {
                if(this.params.query.page == page)
                    return

                this.params.query.page = page;
                this.reloadAll()
            },
            handleSort(key, active) {
                this.params.query.order = active;
                this.params.query.column = key;
                this.reloadAll()
            },
            filterForm(){

                Object.keys(this.actions).map(key=>{
                    try {
                        if(typeof this.actions[key].actionFilter === "object"){
                            if(typeof this.actions[key].actionFilter.value === "object"){
                                let values = this.actions[key].actionFilter.value;
                                Object.keys(values).map(name=>{
                                    this.params.query[name] = values[name];
                                })
                            }
                            else{
                                this.params.query[this.actions[key].name] = this.actions[key].actionFilter.value;
                            }
                        }
                        else{
                            if(typeof this.actions[key].actionFilter){
                                this.params.query[this.actions[key].name] = this.actions[key].actionFilter;
                            }
                        }
                    }catch (e) {
                        this.params.query[this.actions[key].name]='';
                    }

                })

                this.params.query.page = 1;

                this.reloadAll();
            },
            loadAll(){
                this.loading = false;
                this.openLoadingInDiv();
                this.$store.dispatch("userManagement/all", this.params).then(response=>{
                    this.params.query = response.data.query;
                    this.actions =response.data.actions;
                    this.options = response.data.options;
                    this.$vs.loading.close('#div-with-loading > .con-vs-loading');
                    this.loading = true;
                }).catch(err => {
                    console.error(err);
                    this.loading = true;
                    this.$vs.loading.close('#div-with-loading > .con-vs-loading');
                })

            },

        },
        computed:{
            usersData() {
                return this.$store.state.userManagement.rows;
            },
            usersHeaders() {
                return this.$store.state.userManagement.headers;
            },
            usersActions() {
                return this.$store.state.userManagement.actions;
            },
            usersQuery() {
                return this.$store.state.userManagement.query;
            },
            usersOptions() {
                return this.$store.state.userManagement.options;
            }
        },
        mounted() {
            Object.assign(this.params,this.$route);
            this.loadAll();

        }
    }
</script>
<style lang="scss" scpoped>
    .td-check{
        width: 30px!important;
    }
</style>
