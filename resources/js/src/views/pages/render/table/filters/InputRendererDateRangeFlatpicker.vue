<template>
    <div>
        <label class="text-sm opacity-75" style="display: block;">{{ actions.label }}</label>
        <flat-pickr :config="configdateTimePicker" v-model="date" :placeholder="actions.label"  @on-change="doSomethingOnChange" style="margin-top: 4px;"/>
    </div>
</template>

<script>
    import flatPickr from 'vue-flatpickr-component';
    import  lang from 'vuejs-datepicker/src/locale/translations/pt-BR.js';

    import 'flatpickr/dist/flatpickr.css';
    import AbstractFilters from "@views/pages/render/table/filters/AbstractFilters";

    export default {
        name: 'InputRendererDateRangeFlatpicker',
        extends:AbstractFilters,
        data() {
            return {
                fromDate: null,
                toDate: null,
                date: null,
                configdateTimePicker: {
                    locale: lang,
                    dateFormat: "d/m/Y",
                    mode: "range",
                    defaultDate: [this.actions.actionFilter.start, this.actions.actionFilter.end]
                }
            }
        },
        methods: {
            doSomethingOnChange(selectedDates) {
                let start=null;
                let end=null;
                if(selectedDates[1]){
                    start =  window.moment(selectedDates[0]).format('DD/MM/YYYY');
                    end =  window.moment(selectedDates[1]).format('DD/MM/YYYY');
                }
                this.actions.actionFilter.value = { start,end}
            }
        },
        components: {
            flatPickr
        },
        watch:{
            // date(val){
            //     let start=null;
            //     let end=null;
            //     if(val.length>10){
            //         let date = val.replace(' to ','-').split('-');
            //         start =  date[0];
            //         end =  date[1];
            //         console.log(start,end,date)
            //     }
            // }
        }
    }
</script>
