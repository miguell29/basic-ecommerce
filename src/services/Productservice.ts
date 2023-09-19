import IProduct from "@/interfaces/IProduct"
import { ref, Ref } from "vue"


class ProductService{
    private productList:Ref<Array<IProduct>>

    constructor(){
        this.productList = ref([])
    }

    async fetchAll ():Promise<void>{
        try {
            const url = 'https://fakestoreapi.com/products';
            const response = await fetch(url);
            const json = await response.json();
            this.productList.value = json;

        } catch (error) {
            console.log(error);
        }
    }

    getProducts(){
        return this.productList;
    }
    async getProductbyId(id:number):Promise<IProduct>{
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const json = await response.json();
        return json
    }
}

export default ProductService