import { WITHDRAW, DEPOSIT } from "./actionTypes"

export const depositMoney = (amount)=>( {

            type: DEPOSIT,
            payload : amount
        
    
})



export const withdrawMoney = (amount)=>( {

            type: WITHDRAW,
            payload : amount
        
    
})