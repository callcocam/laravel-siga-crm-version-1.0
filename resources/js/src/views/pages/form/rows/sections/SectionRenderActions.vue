<template>
    <!-- Save & Reset Button -->
    <div class="vx-row">
        <div class="vx-col w-full">
            <div class="mt-8 flex flex-wrap items-center justify-end">
                <vs-button button="submit" class="ml-auto mt-2" @click="save_changes" :disabled="!validateForm">Save Changes</vs-button>
                <vs-button v-if="element.route.back" class="ml-4 mt-2" type="border" color="warning" @click="reset_data">{{__('Back to list')}}</vs-button>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "SectionRenderActions",
        props:['element','form'],
        methods:{
            validateForm(){
                return false
            },
            save_changes(){
               this.$emit('submit',this.element.route)
            },
            reset_data(){
                this.$router.push(this.element.route.back)
            }
        }
    }
</script>
