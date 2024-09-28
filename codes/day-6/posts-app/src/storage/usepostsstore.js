import { defineStore } from "pinia";
import { ref } from "vue";

// export const usePostsStore = defineStore(
//     "postsstore",
//     {
//         state() {
//             return {
//                 isFetchOver: false,
//                 errorInfo: "",
//                 postlist: [],
//             }
//         },
//         actions: {
//             async fetchPosts() {
//                 try {
//                     const resp = await fetch(
//                         "https://jsonplaceholder.typicode.com/posts"
//                     );
//                     const allPosts = await resp.json();
//                     this.postlist = allPosts.slice(0, 5);
//                     this.errorInfo = "";
//                     this.isFetchOver = true;
//                 } catch (error) {
//                     this.postlist = [];
//                     this.errorInfo = error.message;
//                     this.isFetchOver = true;
//                 }
//             }
//         }
//     }
// )

export const usePostsStore = defineStore(
    "postsstore",
    () => {

        const isFetchOver = ref(false)
        const errorInfo = ref("")
        const postlist = ref([])

        const fetchPosts = async () => {
            try {
                const resp = await fetch(
                    "https://jsonplaceholder.typicode.com/posts"
                );
                const allPosts = await resp.json();
                postlist.value = allPosts.slice(0, 5);
                errorInfo.value = "";
                isFetchOver.value = true;
            } catch (error) {
                postlist.value = [];
                errorInfo.value = error.message;
                isFetchOver.value = true;
            }
        }
        return { errorInfo, isFetchOver, postlist, fetchPosts }
    }
)