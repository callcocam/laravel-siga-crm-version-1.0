
<template>
    <div :class="setClass(element.coll)">
        <quill-editor v-model="element.value"></quill-editor>
    </div>
</template>

<script>
    // require styles
    import 'quill/dist/quill.core.css'
    import 'quill/dist/quill.snow.css'
    import 'quill/dist/quill.bubble.css'

    import { quillEditor } from 'vue-quill-editor'
    import AbstractField from "./AbstractField";

    export default {
        name:'InputRenderQuillEditor',
        extends:AbstractField,
        components: {
            quillEditor,
        },
        methods:{
            setClass(cl){
                return `vx-col md:w-1/${cl} w-full mt-8`;
            }
        }
    }
</script>
