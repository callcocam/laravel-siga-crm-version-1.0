<template>
    <vs-avatar :badge="element.id" size="45px" :src="Cover(element[headers.name])" />
</template>

<script>
    import AbstractCellRender from "@views/pages/render/AbstractCellRender";
    export default {
        name: 'CellRenderCover',
        extends:AbstractCellRender,
        computed: {
            Cover() {
                return (value) => {
                    return value
                }
            }
        }
    }
</script>
