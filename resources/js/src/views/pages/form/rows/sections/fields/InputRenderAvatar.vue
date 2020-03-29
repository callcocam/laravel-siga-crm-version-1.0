<template>
    <div class="vx-col w-full">
        <div class="flex items-start flex-col sm:flex-row">
            <img :src="element.value" class="mr-8 rounded h-24 w-24" />
            <!-- <vs-avatar :src="data.avatar" size="80px" class="mr-4" /> -->
            <div>
                <p class="text-lg font-medium mb-2 mt-4 sm:mt-0">{{ element.name  }}</p>
                <input type="file" class="hidden" ref="update_avatar_input" @change="update_avatar" accept="image/*">
                <!-- Toggle comment of below buttons as one for actual flow & currently shown is only for demo -->
                <vs-button class="mr-4 mb-4">Change Avatar</vs-button>
                <!-- <vs-button type="border" class="mr-4" @click="$refs.update_avatar_input.click()">Change Avatar</vs-button> -->
                <vs-button type="border" color="danger">Remove Avatar</vs-button>
            </div>
        </div>
    </div>
</template>

<script>
    import AbstractField from "./AbstractField";

    export default {
        name: "InputRenderAvatar",
        extends:AbstractField,
        methods:{
            update_avatar() {
                // You can update avatar Here
                // For reference you can check dataList example
                // We haven't integrated it here, because data isn't saved in DB
            }
        }
    }
</script>

<style scoped>

</style>
