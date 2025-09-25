import { foodArrays } from "@/components/constants/foods";
import { restArrays } from "@/components/constants/rest";
import { reactive } from "vue";

export const store = reactive({
    isOpen: false,
    rests: restArrays,
    foods: foodArrays,
    toggleModal(value)
    {
        this.isOpen = value
    }
})