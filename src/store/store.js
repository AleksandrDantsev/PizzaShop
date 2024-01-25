import { createStore } from 'vuex';

import { general } from './modules/general';

const store = createStore({
    modules: {
        general,
    }
});
 
export default store;