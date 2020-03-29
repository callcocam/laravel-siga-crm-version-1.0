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
                                <td><vs-chip class="ag-grid-cell-chip">
                                    <span>{{ $t(user.status) }}</span>
                                </vs-chip></td>
                            </tr>
                            <tr>
                                <td class="font-semibold">{{ $t("Role") }}</td>
                                <td><vs-chip v-for="(role, index) in user.roles" class="ag-grid-cell-chip" color="warning" :key="index">
                                    <span>{{ role.name }}</span>
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
                        <vs-button icon-pack="feather" :to="user.action.edit.object" icon="icon-edit" class="mr-4">{{ $t('Edit')}}</vs-button>
                        <vs-button type="border" color="danger" icon-pack="feather" icon="icon-trash" @click="confirmDeleteRecord" class="mr-4">{{$t('Delete')}}</vs-button>
                        <vs-button icon-pack="feather" color="warning" :to="user.redirect.object" icon="icon-list">{{ $t('Back')}}</vs-button>
                    </div>

                </div>

            </vx-card>

            <div class="vx-row">
                <div class="vx-col lg:w-1/2 w-full">
                    <vx-card :title="$t('Address')" class="mb-base">
                        <table>
                              <tr v-for="(item, index) in user.address" :key="index">
                                <td class="font-semibold">{{index}}</td>
                                <td>{{item}}</td>
                            </tr>
                        </table>
                    </vx-card>
                </div>
                <div class="vx-col lg:w-1/2 w-full">
                    <vx-card :title="$t('Social Links')" class="mb-base">
                        <table>
                            <tr v-for="(item, index) in user.social_links" :key="index">
                                <td class="font-semibold">{{index}}</td>
                                <td>{{item}}</td>
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
                    <table class="w-full permissions-table" v-if="user.groups">
                        <tr>
                            <!--
                              You can also use `Object.keys(Object.values(data_local.permissions)[0])` this logic if you consider,
                              our data structure. You just have to loop over above variable to get table headers.
                              Below we made it simple. So, everyone can understand.
                             -->
                            <th class="font-semibold text-base text-left px-3 py-2" v-for="(heading, index ) in user.groups.group" :key="index">{{ $t(heading) }}</th>
                        </tr>
                        <tr  v-for="(heading, indexa ) in user.groups.names"  :key="indexa">

                            <td v-for="(group, indexc ) in user.groups.group" :key="indexc">
                                <template v-if="_filterRoles(user.groups.content[group],heading)">
                                    <vs-checkbox disabled="true" v-model="checked"  :vs-value="group"  :key="indexc+heading.name">{{ heading.name }}</vs-checkbox>
                                </template>
                                <template v-else>
                                    <vs-checkbox disabled="true" :key="indexc+heading.name">{{ heading.name }}</vs-checkbox>
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
        name: "ShowRenderUser",
        extends:AbstractCellRender,
        data(){
            return {
                user:null,
                checked:true,
                unchecked:false,
            }
        },
        methods:{
            _filterRoles(val, filter){
                let exists = false;
                Object.values(val).map(value => {
                    let result = _.filter(value,repo=> repo.name == filter.name)
                    if(result.length){
                        exists = true
                    }
                })
                return exists
            },
            confirmDeleteRecord() {
                this.$vs.dialog({
                    type: 'confirm',
                    color: 'danger',
                    title: `Confirm Delete`,
                    text: `You are about to delete`,
                    accept: this.deleteRecord,
                    acceptText: "Delete"
                })
            },
            deleteRecord() {
                /* UnComment below lines for enabling true flow if deleting user */
                this.$store.dispatch("userManagement/removeRecord", this.user.action.destroy)
                    .then((data)   => { this.showDeleteSuccess(data) })
                    .catch(err => { console.error(err)       })
            },
            showDeleteSuccess(data) {
                this.$vs.notify({
                    color: 'success',
                    title: 'User Deleted',
                    text: data
                })
                this.$router.push(this.user.redirect.object).catch((e) => { console.log(e)})
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
