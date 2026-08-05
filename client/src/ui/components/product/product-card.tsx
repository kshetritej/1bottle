import { Heart, ShoppingCart } from 'lucide-react'
import { Button } from "../../../components/ui/button"
import { Card } from "../../../components/ui/card"
import { productCardPropsTypes } from '../../../types/product'
import { CartItem, cartListState } from '../../../utils/cart-atom'
import { WishlistItem, wishlistState } from '../../../utils/wishlist-atom'
import { useRecoilState } from "recoil"
import { useEffect } from 'react'
import { Link } from '@tanstack/react-router'
import { toast } from '../../../hooks/use-toast'
import { cn } from '../../../lib/utils'

export default function ProductCard({ product, classname }: { product: productCardPropsTypes, classname?: string }) {
    const [cartList, setCartList] = useRecoilState(cartListState);
    const [wishlist, setWishlist] = useRecoilState(wishlistState);
    const isWishlisted = wishlist.some(item => item.productId === product.productId);

    function addToCart(newItem: CartItem) {
        const existingProduct = cartList.find(item => item.productId === newItem.productId);

        if (existingProduct) {
            toast({
                title: 'Product already in cart',
                variant: "warning"
            });
        } else {
            const updatedCart = [...cartList, newItem];
            setCartList(updatedCart);
            toast({
                title: 'Product added to cart',
                variant: "success"
            });
        }
    }

    function toggleWishlist(newItem: WishlistItem) {
        const updatedWishlist = isWishlisted
            ? wishlist.filter(item => item.productId !== newItem.productId)
            : [...wishlist, newItem];
        setWishlist(updatedWishlist);
        toast({
            title: isWishlisted ? 'Removed from wishlist' : 'Added to wishlist',
            variant: isWishlisted ? "warning" : "success"
        });
    }

    // Save cart and wishlist to local storage whenever they change
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartList));
    }, [cartList]);

    useEffect(() => {
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }, [wishlist]);

    return (
        <Card className={cn("relative p-4 flex flex-col items-center justify-between gap-3 border rounded-lg hover:scale-105 hover:shadow-md transition-all ease-in-out", classname)}>
            <Button
                variant="ghost"
                size="icon"
                className="absolute top-3 right-3 z-10 bg-white rounded-full shadow"
                onClick={() => toggleWishlist({ productId: product.productId, name: product.name, imageUrl: product.imageUrl, price: product.price })}
            >
                <Heart className={`h-5 w-5 ${isWishlisted ? "text-[#31B65D] fill-current" : "text-gray-400"}`} />
            </Button>
            <Link to={`/product/${product.productId}`} className="flex flex-col items-center gap-3 w-full">
                <div className="h-[200px] w-[200px] flex items-center justify-center bg-slate-100 rounded-lg overflow-hidden">
                    <img
                        src={product?.imageUrl}
                        alt={product?.name}
                        className="h-[180px] w-[180px] object-contain" />
                </div>
                <h3 className="font-bold text-lg text-center line-clamp-2">{product?.name}</h3>
                <p className="text-[#31B65D] font-bold text-lg">${product?.price.toFixed(2)}</p>
            </Link>
            <Button
                variant="outline"
                className="w-full border-[#31B65D] text-[#31B65D] hover:text-white hover:bg-[#31B65D]"
                onClick={() => addToCart({ productId: product.productId, name: product.name, imageUrl: product.imageUrl, price: product.price, quantity: 1 })}
            >
                <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
            </Button>
        </Card>
    )
}
