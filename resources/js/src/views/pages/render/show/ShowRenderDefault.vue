<template>
    <vx-card class="mt-base" no-shadow card-border>
        <div class="vx-row">
            <div class="vx-col w-full">
                <vs-navbar class="nabarx">
                    <div slot="title" >
                        <span class="font-medium text-lg leading-none">{{ usersTitle }}</span>
                    </div>
                </vs-navbar>
                <vs-divider />
            </div>
        </div>
        <div class="block overflow-x-auto" v-if="data">

            <table class="w-full">
                <template v-for="(header, item_index) in headers">
                    <template v-if="header.hidden_show">
                        <tr :key="item_index">
                            <td class="font-semibold">{{header.name}}</td>
                            <td v-if="header.cellRendererFramework" class="font-semibold">
                                <component :element="data" :headers="header" :is="currentTabComponent(header.cellRendererFramework)"></component>
                            </td>
                            <td v-else>{{data[header.name] }}</td>
                        </tr>
                    </template>
                </template>
            </table>
            <div class="vx-col w-full flex" id="account-manage-buttons">
                <vs-button icon-pack="feather" :to="data.action.edit.object" icon="icon-edit" class="mr-4">{{ $t('Edit')}}</vs-button>
                <vs-button type="border" color="danger" icon-pack="feather" icon="icon-trash" @click="confirmDeleteRecord" class="mr-4">{{$t('Delete')}}</vs-button>
                <vs-button icon-pack="feather" color="warning" :to="usersOptions.redirect.object" icon="icon-list">{{ $t('Back')}}</vs-button>
            </div>
        </div>
    </vx-card>
</template>
<script>
    import AbstractCellRender from "@views/pages/render/AbstractCellRender";
    export default {
        name: "ShowRenderDefault",
        extends:AbstractCellRender
    }
</script>

<style scoped>

</style>
