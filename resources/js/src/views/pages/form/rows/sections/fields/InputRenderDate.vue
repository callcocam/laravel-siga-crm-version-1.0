<template>
    <div class=" mt-3" :class="setClass(element.coll)">
        <label class="text-sm mt-2">{{ element.label }}</label>
        <datepicker
            :format="element.attributes.format || 'dd/MM/yyyy'"
            :placeholder="element.attributes.placeholder || element.label"
            v-model="element.value"></datepicker>
        <p class="mt-4">Selected Date: {{ element.value }}</p>
    </div>
</template>
<script>
    import AbstractField from "./AbstractField";
    import Datepicker from 'vuejs-datepicker';

    export default {
        name: "InputRenderDate",
        extends:AbstractField,
        methods:{
            setClass(cl){
                return `vx-col md:w-1/${cl} w-full`;
            }
        },
        components: {
            Datepicker
        }
    }
</script>
