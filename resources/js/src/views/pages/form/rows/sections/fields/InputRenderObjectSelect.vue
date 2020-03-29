<template>
    <div v-if="element" :class="setClass(element.coll)">
        <div class="mt-4">
            <label class="vs-input--label">{{ __(element.label) }}</label>
            <v-select
                :danger="form.errors.has(element.name)"
                :danger-text="form.errors.get(element.name)"
                :label="element.options.label"
                :options="element.options.value_options"
                v-model="element.value">
                <slot name="no-options">Desculpe, nenhum registro encontrado.</slot>
                <i slot="spinner" class="icon icon-spinner"></i>
            </v-select>
        </div>
    </div>
</template>
<script>
    import vSelect from 'vue-select'
    import AbstractField from "./AbstractField";
    export default {
        name: "InputRenderObjectSelect",
        components: {
            'v-select': vSelect,
        },
        extends:AbstractField,
        methods:{
            capitalize(str) {
                return str.slice(0,1).toUpperCase() + str.slice(1,str.length)
            },
            setClass(cl){
                return `vx-col md:w-1/${cl} w-full`;
            }
        },
        computed: {
            select_local: {
                get() {
                    return { label: this.capitalize(this.element.value),  value: this.element.value  }
                },
                set(obj) {
                    this.element.value = obj.value
                }
            },
            validateForm() {
                return !this.errors.any()
            }
        }
    }
</script>
