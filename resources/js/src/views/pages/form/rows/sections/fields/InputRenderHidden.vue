<template>
    <input v-model="element.value" type="hidden" :name="element.name"/>
</template>

<script>
    import AbstractField from "./AbstractField";

    export default {
        name: "InputRenderHidden",
        extends:AbstractField,
    }
</script>

<style scoped>

</style>
