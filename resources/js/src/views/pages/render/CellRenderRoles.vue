<template>
    <div>
        <vs-chip v-for="(role, index) in element[headers.name]" class="ag-grid-cell-chip" color="warning" :key="index">
            <span>{{ role.name }}</span>
        </vs-chip>
    </div>
</template>

<script>
    import AbstractCellRender from "@views/pages/render/AbstractCellRender";

    export default {
        name: 'CellRenderRoles',
        extends:AbstractCellRender,
        computed: {
        }
    }
</script>

<style lang="scss" scpoped>
</style>
