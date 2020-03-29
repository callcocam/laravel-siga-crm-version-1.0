<template>
    <div class="vx-col w-full">
        <div class="flex items-start flex-col sm:flex-row">
            <img :src="element.value" class="mr-8 rounded h-24 w-24" />
            <div v-if="this.element.route" class="mt-6">
                <input type="file" class="hidden" ref="update_avatar_input" @change="update_avatar" accept="image/*">
                <vs-button type="border" class="mr-4" @click="$refs.update_avatar_input.click()">{{__('Change Avatar')}}</vs-button>
                <vs-button v-if="this.element.route.remove" type="border" color="danger" @click="confirmDeleteRecord()">{{ __('Remove Avatar')}}</vs-button>
            </div>
        </div>
    </div>
</template>

<script>
    import AbstractField from "./AbstractField";
    import { objectToFormData } from 'object-to-formdata';
    //import { EventBus } from '@/plugins/event-bus.js';
    export default {
        name: "InputRenderCover",
        extends:AbstractField,
        methods:{
            remove_file(){
                this.form.file = this.element.value
                this.form.submit('post', this.element.route.remove).then(({ data }) => {
                    this.element.value = data.path;
                    ///EventBus.$emit('changeFile', data.path);
                    //this.$eventHub.$emit('change-file', data.path);
                })
            },
            confirmDeleteRecord() {
                this.$vs.dialog({
                    type: 'confirm',
                    color: 'danger',
                    title: `Por favor confirme`,
                    text: `Deseja realmente excluir a imagem "${this.element.value}"`,
                    accept: this.remove_file,
                    acceptText: "Excluir"
                })
            },
            update_avatar(e) {
                const file = e.target.files[0]
                this.form.file = file
                this.form.submit('post', this.element.route.upload, {
                    // Transform form data to FormData
                    transformRequest: [function (data, headers) {
                        return objectToFormData(data)
                    }],
                    onUploadProgress: e => {

                    }
                }).then(({ data }) => {
                    this.element.value = data.path;
                    //EventBus.$emit('changeFile', data.path);
                    //this.$eventHub.$emit('change-file', data.path);
                })
            }
        }
    }
</script>

<style scoped>

</style>
