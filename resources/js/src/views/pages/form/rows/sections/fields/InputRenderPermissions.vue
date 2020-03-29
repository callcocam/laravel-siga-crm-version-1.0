<template>
    <vx-card class="mt-base" no-shadow card-border>

        <div class="vx-row">
            <div class="vx-col w-full">
                <vs-navbar class="nabarx">
                    <div slot="title">
                        <vs-navbar-title>
                            <feather-icon svgClasses="w-6 h-6" icon="LockIcon" class="mr-2" />
                            <span class="font-medium text-lg leading-none">{{ element.name }}</span>
                        </vs-navbar-title>
                    </div>
                    <vs-input icon="search" placeholder="Search" v-model="search" class="is-label-placeholder mr-6 mb-6" />
                </vs-navbar>
                <vs-divider />
            </div>

        </div>
        <div class="block overflow-x-auto">

            <table class="w-full">
                <tr v-for="(val, name) in element.options.value_options" :key="name">
                    <td class="px-3 py-2">
                        <vs-checkbox color="danger" v-model="element.value"  :vs-value="val.id">{{ val.name }}</vs-checkbox>
                    </td>
                </tr>
            </table>
        </div>
    </vx-card>
</template>
<script>
    import AbstractField from "./AbstractField";
    export default {
        name: "InputRenderPermissions",
        extends:AbstractField,
        data(){
           return {
               search:"",
               permissionsOriginal:null
           }
        },
        methods:{},
        created(){
            this.permissionsOriginal = this.element.options.value_options
        },
        watch:{
            search(val){
                if(val){
                    this.element.options.value_options = _.filter(this.permissionsOriginal,repo=> repo.name.indexOf(val) >= 0)
                }
                else{
                    this.element.options.value_options = this.permissionsOriginal
                }

            }
        }
    }
</script>
