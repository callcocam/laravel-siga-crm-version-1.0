<template>
    <div class=" mt-3" :class="setClass(element.coll)">
        <label class="text-sm mt-2">{{ element.label }}</label>
        <div class="mt-2">
            <vs-radio v-for="(option, index) in element.options.value_options" v-model="element.value" :vs-value="index" class="mr-4" :key="index">{{option}}</vs-radio>
        </div>
    </div>
</template>
<script>
    import AbstractField from "./AbstractField";
    export default {
        name: "InputRenderRadio",
        extends:AbstractField,
        methods:{
            setClass(cl){
                return `vx-col md:w-1/${cl} w-full`;
            }
        }
    }
</script>
