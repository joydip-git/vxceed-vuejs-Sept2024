import { defineStore } from "pinia";
import { ref } from "vue";

// export const usePostStore = defineStore(
//     "poststore",
//     {
//         state() {
//             return {
//                 isFetchOver: false,
//                 errorInfo: "",
//                 postInfo: null,
//             }
//         },
//         actions: {
//             async fetchPostById(id) {
//                 try {
//                     const resp = await fetch(
//                         `https://jsonplaceholder.typicode.com/posts/${id}`
//                     );
//                     this.postInfo = await resp.json();
//                     this.errorInfo = "";
//                     this.isFetchOver = true;
//                 } catch (error) {
//                     this.postInfo = null;
//                     this.errorInfo = error.message;
//                     this.isFetchOver = true;
//                 }
//             }
//         }
//     }
// )

export const usePostStore = defineStore(
    "poststore",
    () => {

        const isFetchOver = ref(false)
        const errorInfo = ref("")
        const postInfo = ref(null)

        const fetchPostById = async (id) => {
            try {
                const resp = await fetch(
                    `https://jsonplaceholder.typicode.com/posts/${id}`
                );
                postInfo.value = await resp.json();
                errorInfo.value = "";
                isFetchOver.value = true;
            } catch (error) {
                postInfo.value = null;
                errorInfo.value = error.message;
                isFetchOver.value = true;
            }
        }
        return { errorInfo, isFetchOver, postInfo, fetchPostById }
    }
)