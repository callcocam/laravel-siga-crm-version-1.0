<!-- =========================================================================================
  File Name: FullPage.vue
  Description: Full page layout
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->
<script>
    import vSelect from 'vue-select'
    import CellRenderStatus from "@views/pages/render/CellRenderStatus"
    import CellRenderLink from "@views/pages/render/CellRenderLink"
    import CellRenderObject from "@views/pages/render/CellRenderObject"
    import CellRenderCover from "@views/pages/render/CellRenderCover"
    import CellRenderRoles from "@views/pages/render/CellRenderRoles"
    import CellRenderAddress from "@views/pages/render/CellRenderAddress"
    import CellRenderActions from "@views/pages/render/table/CellRenderActions"
    export default {
        name:"AbstractTemplate",
        components:{
            vSelect,
            CellRenderLink,
            CellRenderAddress,
            CellRenderStatus,
            CellRenderObject,
            CellRenderActions,
            CellRenderRoles,
            CellRenderCover,
        },
        data() {
            return {
                activeTab: 0,
                libera: false,
                not_found: true,
                params:{
                    url:'/api/v1/admin/users',
                    query:{}
                },
                backgroundLoading:'primary',
                colorLoading:'#fff',
                selected:[],
                data:null,
                options:{},
                // Filter Options
                actions:[],
                loading:false,
            }
        },
        methods: {
            reloadAll(){
                this.$router.push(this.params).catch(err => {
                    this.loading = true;
                    this.$vs.loading.close('#div-with-loading > .con-vs-loading');
                });

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
            },
        },
        watch: {
            activeTab(val) {
                return val
            }
        }
    }
</script>

