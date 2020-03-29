<template>

        <div id="user-data" v-if="user">
            <vx-card title="Account" class="mb-base">

                <!-- Avatar -->
                <div class="vx-row">

                    <!-- Avatar Col -->
                    <div class="vx-col" id="avatar-col">
                        <div class="img-container mb-4">
                            <img :src="user.cover" class="rounded w-full" />
                        </div>
                    </div>
                    <!-- Information - Col 1 -->
                    <div class="vx-col flex-1" id="account-info-col-1">
                        <table>
                            <tr>
                                <td class="font-semibold">{{ $t("Username") }}</td>
                                <td>{{ user.fantasy }}</td>
                            </tr>
                            <tr>
                                <td class="font-semibold">{{ $t("Name") }}</td>
                                <td>{{ user.name }}</td>
                            </tr>
                            <tr>
                                <td class="font-semibold">{{ $t("Email") }}</td>
                                <td>{{ user.email }}</td>
                            </tr>
                        </table>
                    </div>
                    <!-- /Information - Col 1 -->

                    <!-- Information - Col 2 -->
                    <div class="vx-col flex-1" id="account-info-col-2">
                        <table>
                            <tr>
                                <td class="font-semibold">{{ $t("Status") }}</td>
                                <td><vs-chip class="ag-grid-cell-chip" :color="chipColor(user.status,user.options)">
                                    <span>{{ $t(user.status) }}</span>
                                </vs-chip></td>
                            </tr>
                            <tr>
                                <td class="font-semibold">{{ $t("Role") }}</td>
                                <td><vs-chip v-for="(role, index) in user.role_names" class="ag-grid-cell-chip" color="warning" :key="index">
                                    <span>{{ role }}</span>
                                </vs-chip></td>
                            </tr>
                            <tr>
                                <td class="font-semibold">{{ $t("Company") }}</td>
                                <td>{{ user.company_name }}</td>
                            </tr>
                        </table>
                    </div>
                    <!-- /Information - Col 2 -->
                    <div class="vx-col w-full flex" id="account-manage-buttons">
                        <vs-button icon-pack="feather" :to="user.edit.object" icon="icon-edit" class="mr-4">{{ $t('Edit')}}</vs-button>
                        <vs-button type="border" color="danger" icon-pack="feather" icon="icon-trash" @click="confirmDeleteRecord(user.name)">{{$t('Delete')}}</vs-button>
                    </div>

                </div>

            </vx-card>

            <div class="vx-row">
                <div class="vx-col lg:w-1/2 w-full">
                    <vx-card title="Information" class="mb-base">
                        <table>
                            <tr>
                                <td class="font-semibold">Birth Date</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td class="font-semibold">Mobile</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td class="font-semibold">Website</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td class="font-semibold">Languages</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td class="font-semibold">Gender</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td class="font-semibold">Contact</td>
                                <td></td>
                            </tr>
                        </table>
                    </vx-card>
                </div>

                <div class="vx-col lg:w-1/2 w-full">
                    <vx-card title="Social Links" class="mb-base">
                        <table>
                            <tr>
                                <td class="font-semibold">Twitter</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td class="font-semibold">Facebook</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td class="font-semibold">Instagram</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td class="font-semibold">Github</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td class="font-semibold">CodePen</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td class="font-semibold">Slack</td>
                                <td></td>
                            </tr>
                        </table>
                    </vx-card>
                </div>
            </div>
            <!-- Permissions -->
            <vx-card class="mt-base" no-shadow card-border>
                <div class="vx-row">
                    <div class="vx-col w-full">
                        <div class="flex items-end px-3">
                            <feather-icon svgClasses="w-6 h-6" icon="LockIcon" class="mr-2" />
                            <span class="font-medium text-lg leading-none">{{ $t('Permissions') }}</span>
                        </div>
                        <vs-divider />
                    </div>
                </div>
                <div class="block overflow-x-auto">
                    <table class="w-full permissions-table" v-if="user.permissions">
                        <tr>
                            <!--
                              You can also use `Object.keys(Object.values(data_local.permissions)[0])` this logic if you consider,
                              our data structure. You just have to loop over above variable to get table headers.
                              Below we made it simple. So, everyone can understand.
                             -->
                            <th class="font-semibold text-base text-left px-3 py-2" >{{ $t('Modulo') }}</th>
                            <th class="font-semibold text-base text-left px-3 py-2" v-for="(heading, index ) in user.groups.names" :key="index">{{ heading }}</th>
                        </tr>

                        <tr v-for="(role, name) in user.roles" :key="name">
                            <td  class="px-3 py-2">
                                {{ role.name }}
                            </td>
                            <td v-for="(heading, index ) in user.groups.names" class="px-3 py-2" :key="index">
                                <template v-if="user.groups.content[role.id]">
                                    <template v-if="user.groups.content[role.id][heading]">
                                        <template v-for="(item, index_item ) in user.groups.content[role.id][heading]">
                                            {{ item.name }}
                                        </template>
                                    </template>
                                </template>
                            </td>
                        </tr>
                    </table>
                </div>
            </vx-card>
        </div>
</template>
<script>
    import AbstractCellRender from "@views/pages/render/AbstractCellRender";
    export default {
        name: "ShowRenderAvatar",
        extends:AbstractCellRender,
        data(){
            return {
                user:null
            }
        },
        mounted() {

            this.user = this.element[0]
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
