<script>
    export default {
        name: "AbstractCellRender",
        props:['element','headers'],
        data(){
            return {

                data:null
            }
        },
        components:{
            CellRenderStatus: ()=>import(/*webpackChunkName: "vue-render-status"*/"@views/pages/render/CellRenderStatus"),
            CellRenderCover: ()=>import(/*webpackChunkName: "vue-render-status"*/"@views/pages/render/CellRenderCover"),
            CellRenderLink: ()=>import(/*webpackChunkName: "vue-render-link"*/"@views/pages/render/CellRenderLink"),
            CellRenderObject: ()=>import(/*webpackChunkName: "vue-render-object"*/"@views/pages/render/CellRenderObject"),
            CellRenderAddress: ()=>import(/*webpackChunkName: "vue-render-object"*/"@views/pages/render/CellRenderAddress"),
            ShowRenderDefault: ()=>import(/*webpackChunkName: "vue-render-default"*/"@views/pages/render/show/ShowRenderDefault"),
            CellRenderActions: ()=>import(/*webpackChunkName: "vue-render-actions"*/"@views/pages/render/table/CellRenderActions"),
        },
        methods:{
            currentTabComponent: function(Component) {
                return Component;
            },
            _filter(val){
                return  _.filter(this.headers,repo=> repo.name == val)
            },
            confirmDeleteRecord(){

            }
        },
        mounted(){

            this.data  = this.element[0];
        },
        computed:{
            usersRows() {
                let data = this.$store.getters['userManagement/getRows'];
                return data;
            },
            usersTitle() {
                let data = this.$store.getters['userManagement/getTitle'];
                return data;
            },
            usersOptions() {
                let data = this.$store.getters['userManagement/getOptions'];
                return data;
            },
            chipColor(value) {
                return (value) => {
                    if(this.headers.options[value]) return this.headers.options[value]
                    else "primary"
                }
            }
        }
    }
</script>
