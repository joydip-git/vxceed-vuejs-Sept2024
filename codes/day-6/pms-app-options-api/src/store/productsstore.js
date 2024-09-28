import { API_URL } from "@/config/constants";
import { defineStore } from "pinia";

export const productsstore = defineStore('productsstate', {
    state: () => {
        return {
            products: [],
            errorInfo: '',
            isFetchOver: false
        }
    },
    actions: {
        async fetchProducts() {
            try {
                const resp = await fetch(API_URL)
                const apiResponse = await resp.json()
                if (apiResponse.data != null) {
                    this.products = apiResponse.data
                    this.errorInfo = ''
                    this.isFetchOver = true
                } else {
                    this.products = []
                    this.errorInfo = apiResponse.message
                    this.isFetchOver = true
                }
            } catch (error) {
                this.products = []
                this.errorInfo = error.message
                this.isFetchOver = true
            }
        }
    }
});