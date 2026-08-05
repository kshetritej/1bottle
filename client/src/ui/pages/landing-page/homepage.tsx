import { Button } from "../../../components/ui/button"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../../../components/ui/carousel"
import { Footer } from './footer'
import { Product, productCardPropsTypes } from '../../../types/product'
import ProductCard from '../../components/product/product-card'
import { useGetCategories, useGetProducts } from "../../../queries/queries"
import { carousel1, carousel2, carousel3 } from "../../../constants/images"
import OfferCard from "./offer-card"
import { Link, useNavigate } from "@tanstack/react-router"
import { Croissant } from "lucide-react"
import { Card, CardContent } from "../../../components/ui/card"

export type Category = {
    categoryId: string;
    name: string;
    description: string
}

const carouselItems = [
    { id: 1, image: carousel1, alt: 'Carousel Item 1' },
    { id: 2, image: carousel2, alt: 'Carousel Item 2' },
    { id: 3, image: carousel3, alt: 'Carousel Item 3' },
]

export function Homepage() {
    const navigate = useNavigate();
    const { data: products } = useGetProducts();
    const { data: categories } = useGetCategories();
    const highlights: productCardPropsTypes[] = [];
    const makeHighlights = () => {
        for (let i = 0; i < 4; i++) {
            if (products?.data) {
                if (products?.data.length === 0) return;
                const randomNumber: number = Math.floor(Math.random() * products?.data.length);
                highlights.push(products.data[randomNumber]);
            }
        }
    }
    makeHighlights();
    return (
        <div className=" flex flex-col min-h-screen">
            <main className="container mx-auto flex-grow">
                <section className="p-4 mt-2">
                    <Carousel className='rounded-2xl overflow-hidden'>
                        <CarouselContent>
                            {carouselItems.map((item) => (
                                <CarouselItem key={item.id}>
                                    <img src={item.image} alt={item.alt} className="w-full h-[200px] md:h-[400px] object-cover" />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <div className='absolute left-16 bottom-8'>
                            <CarouselPrevious />
                            <CarouselNext />
                        </div>
                    </Carousel>
                </section>

                <section className="p-4">
                    <h2 className="text-[#31B65D] font-bold text-2xl">Shopping by Category</h2>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 mt-3">
                        {categories && categories?.data?.map((category: Category) => (
                            <button
                                key={category.categoryId}
                                onClick={() =>
                                    navigate({
                                        to: `/product/category/${category.categoryId}`,
                                    })
                                }
                                className="flex flex-col items-center bg-green-50 gap-2 p-4 rounded-lg group cursor-pointer hover:bg-[#31B65D] transition-colors"
                            >
                                <Croissant className="h-8 w-8 text-[#31B65D] group-hover:text-white group-hover:scale-125 transition-all ease-in-out" />
                                <span className="text-green-800 group-hover:text-white text-sm text-center truncate w-full">{category.name}</span>
                            </button>
                        ))}
                    </div>
                </section>

                <section className="p-4">
                    <h2 className="text-[#31B65D] font-bold text-2xl">Our Popular Products</h2>
                    <div className="grid  gap-4 md:gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-3">
                        {
                            highlights.map((product: productCardPropsTypes) => (
                                <ProductCard key={product.productId} product={product} />
                            ))
                        }
                    </div>
                    <div className="flex justify-center">
                        <Button onClick={
                            () => navigate({
                                to: "/product/explore",
                            },
                            )
                        }
                            className="w-full mx-4 mt-8 bg-[#31B65D] hover:bg-[#31B65D]/90" variant={'secondary'}>Shop More</Button>
                    </div>
                </section>

                <section className="p-4">
                    <h2 className="text-xl font-bold mb-4 text-[#31B65D]">Best Sellers</h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-6">
                        {products && products?.data?.map((item: Product) => (
                            <Card key={item.productId} className="max-w-xs border rounded-lg hover:scale-105 hover:shadow-md transition-all ease-in-out">
                                <Link to={`/product/${item.productId}`}>
                                    <CardContent className="p-4">
                                        <div className="w-full aspect-square mx-auto overflow-hidden rounded-lg flex flex-col items-center">
                                            <img src={item.imageUrl} alt={item.name} className="w-full h-full object-contain mb-2 rounded" />
                                        </div>
                                        <p className="font-semibold mt-2 text-center">{item.name}</p>
                                        <p className="text-sm text-[#31B65D] font-bold text-center">${item.price.toFixed(2)}</p>
                                    </CardContent>
                                </Link>
                            </Card>
                        ))}
                    </div>
                </section>

                <section className="p-4">
                    <OfferCard />
                </section>
            </main>
            <Footer />
        </div >
    )
}
