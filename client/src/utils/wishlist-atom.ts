import { atom } from "recoil"

export type WishlistItem = {
    productId: string,
    name: string,
    imageUrl: string,
    price: number
}

export const wishlistState = atom<WishlistItem[]>({
    key: 'Wishlist',
    default: JSON.parse(localStorage.getItem('wishlist') || '[]') as WishlistItem[]
});
