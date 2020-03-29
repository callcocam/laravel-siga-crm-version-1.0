<template>
    <div :class="setClass(element.coll)">
        <vs-checkbox v-model="element.value">{{element.label}}</vs-checkbox>
    </div>
</template>
<script>
    import AbstractField from "./AbstractField";

    export default {
        name: "InputRenderCheckBox",
        extends:AbstractField,
        methods:{
            setClass(cl){
                return `vx-col md:w-1/${cl} w-full`;
            }
        }
    }
</script>
