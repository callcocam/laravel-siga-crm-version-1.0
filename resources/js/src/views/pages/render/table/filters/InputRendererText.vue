<template>
    <div>
        <vs-input
            icon="search"
            :label="$t(actions.label)"
            :placeholder="$t(actions.label)"
            v-model="actions.actionFilter"
        />
    </div>
</template>
<script>
    import AbstractFilters from "@views/pages/render/table/filters/AbstractFilters";
    export default {
        name: 'InputRendererText',
        extends:AbstractFilters
    }
</script>
