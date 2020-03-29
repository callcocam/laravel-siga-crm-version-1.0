<template>
    <vx-card class="mt-base" no-shadow card-border>
        <div class="vx-row">
            <div class="vx-col w-full">
                <div class="flex items-end px-3">
                    <feather-icon svgClasses="w-6 h-6" icon="LockIcon" class="mr-2" />
                    <span class="font-medium text-lg leading-none">{{ element.name }}</span>
                </div>
                <vs-divider />
            </div>
        </div>
        <div class="block overflow-x-auto">
            <table class="w-full">
                <tr v-for="(val, name) in element.options.value_options" :key="name">
                    <td class="px-3 py-2">
                        <vs-checkbox :disable="element.attributes.disabled" color="danger" v-model="element.value"  :vs-value="val.id">{{ val.name }}</vs-checkbox>
                    </td>
                </tr>
            </table>
        </div>
    </vx-card>
</template>
<script>
    import AbstractField from "./AbstractField";
    export default {
        name: "InputRenderMultiCheckbox",
        extends:AbstractField,
        methods:{}
    }
</script>
