import {Item} from './Item';
export const crudOperations={
    itemList:[],
    load(){
        let version = "5";
        for(let i = 1; i<=5; i++){
            this.itemList.push(new Item(i,"Apple"+version,10000*i,"apple.jpg"));
        }
        return this.itemList;
    },
    search(){

    }
}