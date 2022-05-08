import Maska from 'maska'

import IndexField from './components/IndexField'
import DetailField from './components/DetailField'
import FormField from './components/FormField'

Nova.booting((app, router) => {
    app.use(Maska);

    app.component('index-phone-number', IndexField);
    app.component('detail-phone-number', DetailField);
    app.component('form-phone-number', FormField);
})
