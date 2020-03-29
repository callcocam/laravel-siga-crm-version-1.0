<template>
    <div class="vx-row">
        <template v-for="(item, index) in element.sections">
            <component :form="form" :element="item" :is="currentTabComponent(item.type)"></component>
        </template>
    </div>
</template>
<script>
    export default {
        name: "SectionRenderFields",
        props:['element','form'],
        components:{
            InputRenderMultiCheckbox:()=>import(/* webpackChunkName: "input-render-multi-checkbox" */"@views/pages/form/rows/sections/fields/InputRenderMultiCheckbox"),
            InputRenderPermissions:()=>import(/* webpackChunkName: "input-render-multi-checkbox" */"@views/pages/form/rows/sections/fields/InputRenderPermissions"),
            InputRenderAvatar:()=>import(/* webpackChunkName: "input-render-avatar" */"@views/pages/form/rows/sections/fields/InputRenderAvatar"),
            InputRenderCheckBox:()=>import(/* webpackChunkName: "input-render-checkbox" */"@views/pages/form/rows/sections/fields/InputRenderCheckBox"),
            InputRenderRadio:()=>import(/* webpackChunkName: "input-render-radio" */"@views/pages/form/rows/sections/fields/InputRenderRadio"),
            InputRenderDate:()=>import(/* webpackChunkName: "input-render-date" */"@views/pages/form/rows/sections/fields/InputRenderDate"),
            InputRenderText:()=>import(/* webpackChunkName: "input-render-text" */"@views/pages/form/rows/sections/fields/InputRenderText"),
            InputRenderCover:()=>import(/* webpackChunkName: "input-render-cover" */"@views/pages/form/rows/sections/fields/InputRenderCover"),
            InputRenderHidden:()=>import(/* webpackChunkName: "input-render-hidden" */"@views/pages/form/rows/sections/fields/InputRenderHidden"),
            InputRenderSelect:()=>import(/* webpackChunkName: "input-render-select" */"@views/pages/form/rows/sections/fields/InputRenderSelect"),
            InputRenderObjectSelect:()=>import(/* webpackChunkName: "input-render-object-select" */"@views/pages/form/rows/sections/fields/InputRenderObjectSelect"),
            InputRenderQuillEditor:()=>import(/* webpackChunkName: "input-render-quill-editor" */"@views/pages/form/rows/sections/fields/InputRenderQuillEditor"),
        },
        methods:{
            currentTabComponent: function(Component) {
                return Component;
            }
        }
    }
</script>
