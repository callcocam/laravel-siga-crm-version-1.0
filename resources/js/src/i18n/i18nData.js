// en, de, fr, pt
let locale = "en";
let language ={}
if(window._locale){
    locale = window._locale;
}
if(window._translations){
    Object.keys(window._translations).map(key=>{
        language[key.replace('-','')] = window._translations[key]['json']
    })
}
export default language
