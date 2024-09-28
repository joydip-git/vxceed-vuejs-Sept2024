import { API_URL } from "@/config/constants";
import { defineStore } from "pinia";
import { ref } from "vue";

export const productsstore = defineStore('productsstate',
    () => {
        const products = ref([])
        const errorInfo = ref('')
        const isFetchOver = ref(false)
        const fetchProducts = async () => {
            try {
                const resp = await fetch(API_URL)
                const apiResponse = await resp.json()
                if (apiResponse.data !== null) {
                    products.value = apiResponse.data
                    errorInfo.value = ''
                    isFetchOver.value = true
                } else {
                    products.value = []
                    errorInfo.value = apiResponse.message
                    isFetchOver.value = true
                }
            } catch (error) {
                products.value = []
                errorInfo.value = error.message
                isFetchOver.value = true
            }
        }
        return { products, errorInfo, isFetchOver, fetchProducts }
    });