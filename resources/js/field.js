import VueMask from 'v-mask';

Nova.booting((Vue, router) => {
    Vue.use(VueMask);

    Vue.component('index-phone-number', require('./components/IndexField.vue').default);
    Vue.component('detail-phone-number', require('./components/DetailField.vue').default);
    Vue.component('form-phone-number', require('./components/FormField.vue').default);
})
