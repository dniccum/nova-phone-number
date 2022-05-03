import IndexField from "./components/IndexField";
import DetailField from "./components/DetailField";
import FormField from "./components/FormField";
// TODO: replace with a relevant version when it supports vue 3
import Maska from 'maska'
// import { VueMaskDirective } from 'v-mask';
//
// const vMaskV2 = VueMaskDirective;
// const vMaskV3 = {
//     beforeMount: vMaskV2.bind,
//     updated: vMaskV2.componentUpdated,
//     unmounted: vMaskV2.unbind
// };

Nova.booting((Vue) => {
    Vue.use(Maska);

    Vue.component('index-phone-number', IndexField);
    Vue.component('detail-phone-number', DetailField);
    Vue.component('form-phone-number', FormField);
})
