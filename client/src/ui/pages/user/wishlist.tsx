import { useRecoilState } from 'recoil'
import { useEffect } from 'react'
import { Heart, ShoppingCart } from 'lucide-react'
import { Button } from '../../../components/ui/button'
import { CardContent, CardDescription, CardTitle } from '../../../components/ui/card'
import { wishlistState } from '../../../utils/wishlist-atom'
import { useGetProducts } from '../../../queries/queries'
import ProductCard from '../../components/product/product-card'
import { useNavigate } from '@tanstack/react-router'
import { productCardPropsTypes } from '../../../types/product'

export function Wishlist() {
    const navigate = useNavigate();
    const [wishlist] = useRecoilState(wishlistState);
    const { data } = useGetProducts();
    const products = (data?.data ?? []).filter((p: { productId: string }) =>
        wishlist.some(w => w.productId === p.productId)
    );

    useEffect(() => {
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }, [wishlist]);

    return (
        <div className="container mx-auto p-4 max-w-6xl">
            <CardTitle>Your Wishlist</CardTitle>
            <CardDescription className='py-2 font-semibold'>
                Saved items: {products?.length}
            </CardDescription>
            {products.length == 0 ? (
                <CardContent className='p-4 flex flex-col items-center h-[80vh] justify-center'>
                    <Heart size={42} className="text-[#31B65D]" />
                    <p className='text-center'>Your wishlist is empty.</p>
                    <Button className="w-full max-w-sm mt-6 bg-[#31B65D] hover:bg-[#31B65D]/90" size="lg" onClick={() => {
                        navigate({ to: "/", replace: true })
                    }} >
                        <ShoppingCart className="mr-2 h-5 w-5" /> Go Shopping
                    </Button>
                </CardContent>
            ) : (
                <div className="grid gap-4 md:gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-3">
                    {products.map((p: productCardPropsTypes) => (
                        <ProductCard key={p.productId} product={p} />
                    ))}
                </div>
            )}
        </div>
    )
}
