<template>
    <!-- Permissions -->
    <vx-card class="mt-base" no-shadow card-border>
        <div class="vx-row">
            <div class="vx-col w-full">
                <div class="flex items-end px-3">
                    <feather-icon svgClasses="w-6 h-6" icon="LockIcon" class="mr-2" />
                    <span class="font-medium text-lg leading-none">Papeis</span>
                </div>
                <vs-divider />
            </div>
        </div>
        <div class="block overflow-x-auto">
            <table class="w-full">
                <tr v-for="(val, name) in element.sections.roles" :key="name">
                    <td class="px-3 py-2">
                        <vs-checkbox color="danger" v-model="element.sections.role"  :vs-value="val.id">{{ val.name }}</vs-checkbox>
                    </td>
                </tr>
            </table>
        </div>
    </vx-card>
</template>

<script>
    export default {
        name: "SectionRenderPermissions",
        props:['element']
    }
</script>
