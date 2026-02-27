import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart(state, action) {
           // {id:1, name:... , price:... ,quantity:...}
            const product = state.find((product) => product.id === action.payload.id)
            product ? product.quantity++ : state.push({ ...action.payload, quantity: 1 })
        },
        removeItemfromCart(state, action) {
            return state.filter((product) => product.id == !action.payload.id)
        },
        clearCart() {
            return []
        },
        modifyQuantity(state, action) {
            // {id:1 , quentity:1}
            const product = state.find((item) => item.id === action.payload.id)
            product.quantity = action.payload.quantity

        }

    }
})
export const { addToCart, removeItemfromCart, clearCart, modifyQuantity } = cartSlice.actions
export default cartSlice