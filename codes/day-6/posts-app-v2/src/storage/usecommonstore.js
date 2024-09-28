import { defineStore } from "pinia";

export const useCommonStore = defineStore(
    "commonstore",
    {
        state() {
            return {
                selectedId: 0
            }
        },
        actions: {
            updateSelectedId(id) {
                this.selectedId = id
            }
        }
    }
)