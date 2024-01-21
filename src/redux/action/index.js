// for Add item to cart 
export const AddCart  = (product) => {
return{
    type : 'ADDITEM',
    payload : product 
}
}

// for delete item to cart 
export const DelCart  = (product) => {
    return{
        type : 'DELITEM',
        payload : product 
    }
    }