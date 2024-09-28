import { API_URL } from "@/config/constants";
import { defineStore } from "pinia";
import { ref } from "vue";

export const productinfostore = defineStore("productinfostate", () => {
    const product = ref(null)
    const errorInfo = ref('')
    const isFetchOver = ref(false)

    const fetchProductById = async (id) => {
        try {
            const resp = await fetch(`${API_URL}/${id}`)
            const apiResponse = await resp.json()
            if (apiResponse.data !== null) {
                product.value = apiResponse.data
                errorInfo.value = ''
                isFetchOver.value = true
            } else {
                product.value = null
                errorInfo.value = apiResponse.message
                isFetchOver.value = true
            }
        } catch (error) {
            product.value = null
            errorInfo.value = error.message
            isFetchOver.value = true
        }
    }

    return { product, errorInfo, isFetchOver, fetchProductById }
});