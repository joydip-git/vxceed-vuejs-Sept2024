import { API_URL } from "@/config/constants";
import { defineStore } from "pinia";

export const productinfostore = defineStore('productinfostate', {
    state: () => {
        return {
            product: null,
            errorInfo: '',
            isFetchOver: false
        }
    },
    actions: {
        async fetchProductById(id) {
            try {
                const resp = await fetch(`${API_URL}/${id}`)
                const apiResponse = await resp.json()
                if (apiResponse.data !== null) {
                    this.product = apiResponse.data
                    this.errorInfo = ''
                    this.isFetchOver = true
                } else {
                    this.product = null
                    this.errorInfo = apiResponse.message
                    this.isFetchOver = true
                }
            } catch (error) {
                this.product = null
                this.errorInfo = error.message
                this.isFetchOver = true
            }
        }
    }
});