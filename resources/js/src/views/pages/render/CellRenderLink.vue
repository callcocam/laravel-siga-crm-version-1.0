<template>
  <div class="flex items-center">
    <router-link :to="url" @click.stop.prevent class="text-inherit hover:text-primary">{{ element[headers.name] }}</router-link>
  </div>
</template>

<script>
    import AbstractCellRender from "@views/pages/render/AbstractCellRender";
    export default {
        name: 'CellRenderLink',
        extends:AbstractCellRender,
        computed: {
          url() {
            return "/apps/user/user-view/268"

            // Below line will be for actual product
            // Currently it's commented due to demo purpose - Above url is for demo purpose
            // return "/apps/user/user-view/" + this.params.data.id
          }
        }
    }
</script>
