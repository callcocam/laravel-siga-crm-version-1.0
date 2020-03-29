<template>
    <div>
        <vs-chip v-for="(item, index) in element[headers.name]" class="ag-grid-cell-chip" :color="convertHex()" :key="index">
            <span>{{ item.name }}</span>
        </vs-chip>
    </div>
</template>

<script>
    import AbstractCellRender from "@views/pages/render/AbstractCellRender";

    export default {
        name: 'CellRenderObject',
        extends:AbstractCellRender,
        data(){
            return {
                opacity: 50
            }
        },
        methods:{
            convertHex: function () {
                let min = 1;
                let max = 255;
                let r = Math.floor(Math.random() * (max - min + 1)) + min;
                let g = Math.floor(Math.random() * (max - min + 1)) + min;
                let b = Math.floor(Math.random() * (max - min + 1)) + min;
                let result = 'rgba(' + r + ',' + g + ',' + b + ',' + this.opacity / 100 + ')';
                return result;
            },
        }
    }
</script>

<style lang="scss" scpoped>
</style>
