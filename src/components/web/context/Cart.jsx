import { createContext, useState } from "react";

export const CartContext = createContext(null);

export function CartContextProvider({children}){
   const addtoCartContext = (ProductId)=>{
    try{
        return ProductId;
    }
    catch(err){
        console.log(err);
    }
   }
    return <CartContext.Provider value={addtoCartContext}>
        {children}
    </CartContext.Provider>
}