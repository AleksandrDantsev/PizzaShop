import { products } from "../../baseData/baseData";

export const general =  {
    state: {
        products: products,
        link: 'pizza',
    },
    mutations: {
        changeLink(state, payload) {
            state.link = payload;
        }
    },
    getters: {
        getProductsCategory(state) {
            return state.products[state.link];
        }
    }
};