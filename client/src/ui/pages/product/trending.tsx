import { useGetProducts } from "../../../queries/queries"
import ProductCard from "../../components/product/product-card"
import { productCardPropsTypes } from '../../../types/product'

export function Trending() {
    const { data } = useGetProducts();
    const products: productCardPropsTypes[] = [...(data?.data ?? [])].sort((a, b) => b.rating - a.rating);

    return (
        <div className="container mx-auto p-4 max-w-6xl">
            <h2 className="text-[#31B65D] font-bold text-2xl">Trending Now</h2>
            <div className="grid gap-4 md:gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-3">
                {products.map(product => (
                    <ProductCard key={product.productId} product={product} />
                ))}
            </div>
        </div>
    )
}
