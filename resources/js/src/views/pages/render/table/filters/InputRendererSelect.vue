<template>
    <div>
        <label class="text-sm opacity-75">{{ actions.label }}</label>
        <v-select
            :name="actions.name"
            :options="actions.optionFilter"
            :clearable="false"
            v-model="actions.actionFilter"
            class="mb-4 md:mb-0" />
    </div>
</template>
<script>
    import vSelect from 'vue-select'
    import AbstractFilters from "@views/pages/render/table/filters/AbstractFilters";
    export default {
        name: 'InputRendererVerified',
        extends:AbstractFilters,
        components: {
            vSelect
        }
    }
</script>
