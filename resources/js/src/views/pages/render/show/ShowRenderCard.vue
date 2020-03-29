<template>
    <vx-card title="Account" class="mb-base">
        <template v-for="(content, content_index) in element.content">
            <component :element="content"  :is="currentTabComponent(content.name)" :key="content_index"></component>
        </template>
    </vx-card>
</template>
<script>
    import AbstractCellRender from "@views/pages/render/AbstractCellRender";
    export default {
        name: "ShowRenderCard",
        extends:AbstractCellRender
    }
</script>

<style scoped>

</style>
