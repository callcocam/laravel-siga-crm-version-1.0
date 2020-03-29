<template>
    <div :class="setClass(element.coll)">
        <vs-input
            :type="element.attributes.type || 'text'"
            :danger="form.errors.has(element.name)"
            :danger-text="form.errors.get(element.name)"
            :class="element.attributes.class || 'w-full'"
            :readonly="element.attributes.readonly || false"
            :placeholder="element.attributes.placeholder || element.label"
            v-model="element.value"
            :name="element.name"
            :label="element.label"
            icon-no-border
            :icon="element.icon || ''"
            :iconPack="element.feather || 'feather'"
        />
    </div>
</template>
<script>
    import AbstractField from "./AbstractField";

    export default {
        name: "InputRenderText",
        extends:AbstractField,
        methods:{
            setClass(cl){
                return `vx-col md:w-1/${cl} w-full`;
            }
        }
    }
</script>
