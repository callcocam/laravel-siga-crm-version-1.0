<template>
    <div>
        <template v-for="(action, index) in element.action">
            <feather-icon :icon="action.icon" :svgClasses="action.sgClass" @click.stop="setFunction(action)" />
        </template>
    </div>
</template>

<script>
    import AbstractCellRender from "@views/pages/render/AbstractCellRender";

    export default {
        name: 'CellRenderActions',
        extends:AbstractCellRender,
        data(){
            return {
                action:null
            }
        },
        methods: {
            setFunction(action){

                this.action = action;

               this[action.function]();
            },
            editRecord() {
                this.$router.push(this.action.object).catch((e) => { console.log(e)})
            },
            showRecord() {
                this.$router.push(this.action.object).catch((e) => { console.log(e)})
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
                this.$store.dispatch("userManagement/removeRecord", this.action)
                    .then((data)   => {
                        this.showDeleteSuccess(data)
                        this.$router.push(data.redirect.object)
                    })
                    .catch(err => { console.error(err)
                        this.showDeleteSuccess(err.response.data,'danger')
                    })
            },
            showDeleteSuccess(data, color='success') {
                this.$vs.notify({
                    color: color,
                    title: data.title,
                    text: data.message
                })
            }
        }
    }
</script>
