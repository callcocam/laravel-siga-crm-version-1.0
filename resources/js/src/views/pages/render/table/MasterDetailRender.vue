<template>
    <div class="con-expand-users w-full">
        <template v-if="headers.cover">
                <div class="con-btns-user flex items-center justify-between">
                    <div class="con-userx flex items-center justify-start">
                        <vs-avatar :badge="rows.id" size="45px" :src="rows.cover" />
                        <template v-if="rows.name">
                            <span>{{ rows.name }}</span>
                        </template>
                    </div>
                </div>
        </template>
        <vs-list>
            <template v-for="(header, index) in headers">
                <template v-if="header.hidden_detail">
                    <template v-if="header.cellRendererFramework">
                        <vs-list-item icon-pack="feather" :icon="header.icone" :title="header.label" :key="index">
                            <component :element="rows" :row="rows" :headers="header" :header="header" :is="currentTabComponent(header.cellRendererFramework)"></component>
                        </vs-list-item>
                    </template>
                    <template v-else>
                        <template v-if="rows[header.name] == typeof 'string'">
                            <vs-list-item icon-pack="feather" :icon="header.icone" :title="header.label" :subtitle="rows[header.name]" :key="index"></vs-list-item>
                        </template>
                    </template>
                </template>
            </template>
        </vs-list>
    </div>
</template>

<script>

    import AbstractTemplate from "@views/pages/AbstractTemplate";

    export default {
        name: "MasterDetailRender",
        extends:AbstractTemplate,
        props:{
            rows:{
                type:[Array, Object],
                default:null
            },
            headers:{
                type:[Array, Object],
                default:null
            }
        },
        methods:{
            currentTabComponent: function(Component) {
                return Component;
            }
        }
    }
</script>

<style scoped>

</style>
