import { atom } from "recoil"

export type CartItem = {
    productId: string,
    name: string,
    imageUrl: string,
    price: number,
    quantity: number
}

export const cartListState = atom<CartItem[]>({
    key: 'CartList',
    default: JSON.parse(localStorage.getItem('cart') || '[]') as CartItem[]
});
