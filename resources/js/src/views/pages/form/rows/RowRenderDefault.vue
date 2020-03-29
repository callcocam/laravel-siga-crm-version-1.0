<template>
    <div id="div-with-loading" class="vs-con-loading__container">
        <form ref="vuaxyForm"  @submit.prevent="save_changes($event)" @keydown="form.onKeydown($event)">
            <template v-for="(item, index) in element.rows">
                <component :form="form" :element="setFom(item)" :is="currentTabComponent(item.name)"></component>
            </template>
            <SectionRenderActions v-if="element.route" :form="form" :element="element"/>
        </form>
    </div>
</template>

<script>
    import { Form } from 'vform'
   // import { EventBus } from '@/plugins/event-bus.js';
    export default {
        name: "RowRenderDefault",
        props:['element'],
        data(){
            return {
                form: new Form({})
            }
        },
        components:{
            SectionRenderFields:()=>import(/* webpackChunkName: "input-render-actions" */"@views/pages/form/rows/sections/SectionRenderFields"),
            SectionRenderActions:()=>import(/* webpackChunkName: "input-render-actions" */"@views/pages/form/rows/sections/SectionRenderActions"),
            SectionRenderPermissions:()=>import(/* webpackChunkName: "input-render-actions" */"@views/pages/form/rows/sections/SectionRenderPermissions")
        },
        methods:{
            setFom(item){
              if(item){
                  if(item.sections){
                      Object.values(item.sections).map(value=>{
                          if(value.type){
                              this.form[value.name] = value.value
                          }
                      })
                  }
              }

                return item;
            },
            currentTabComponent: function(Component) {
                return Component;
            },
            auto_save: function() {
                this.$refs.vuaxyForm.submit();
            },
            save_changes(){
                if(!this.element.route){
                    this.$vs.notify({
                        color: 'danger',
                        title: 'Opss!!',
                        text: 'Nenhuma rota valida foi passada, para enviar a requisição!!'
                    })
                    return;
                }
                const {path} = this.element.route
               // EventBus.$off('changeFile',()=>{});
                this.loading = false;
                this.openLoadingInDiv();
                this.form.post(path)
                    .then(({ data }) => {
                        this.$vs.notify({
                            color: 'success',
                            title: data.title,
                            text: data.text
                        })
                        this.$vs.loading.close('#div-with-loading > .con-vs-loading');
                        this.loading = true;
                        if(!this.$route.params.id){
                            if(data.redirect){
                                this.$router.push(data.redirect.object)
                            }
                        }
                    }).catch(err => {
                    this.loading = true;
                    this.$vs.loading.close('#div-with-loading > .con-vs-loading');
                })
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
        mounted() {
            //EventBus.$on('changeFile', data=>{
           //     this.save_changes()
          //  });
        }
    }
</script>
