import { Link } from "@tanstack/react-router"
import { navigations, navigationsGroupSecond } from "../../utils/navigations"
import { BellRing, CircleUserRound, Croissant, LayoutGrid, Search, ShoppingBag } from "lucide-react"
import { useState } from "react"
import { cn } from "../../lib/utils"
import { useGetCategories } from "../../queries/queries"
import { cartListState } from "../../utils/cart-atom"
import { useRecoilValue } from "recoil"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu"

export const Navbar = () => {
    const fullNavigations = [...navigations, ...navigationsGroupSecond]
    const [searchKey, setSearchKey] = useState("");
    const categories = useGetCategories().data?.data;
    const cartList = useRecoilValue(cartListState);
    const cartCount = cartList.reduce((total, item) => total + item.quantity, 0);

    const desktopNav = navigations.filter(nav => nav.label.toLowerCase() !== "cart").slice(0, 3);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key == "Enter") {
            performSearch(searchKey);
        }
    }

    const performSearch = (query: string) => {
        console.log("searching for ...", query)
        setSearchKey("");
    }

    return (
        <>
            <div className="fixed top-0 z-40 w-full border-b bg-white shadow-md">
                <div className="flex items-center justify-between gap-2 p-3">
                    <div className="flex items-center gap-8">
                        <Link to="/" className="flex items-center gap-2">
                            <div className="bg-[#31B65D] rounded-full p-2">
                                <Croissant className="h-6 w-6 text-white" />
                            </div>
                            <span className="hidden sm:block font-bold text-lg text-gray-800">The Little Baker</span>
                        </Link>

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <h2 className="hidden md:flex items-center gap-2 border rounded-full p-2 px-8 bg-slate-200 cursor-pointer text-gray-800">
                                    <LayoutGrid className="h-5 w-5" /> Category
                                </h2>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuLabel>Browse Category</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                {categories?.map((category: { categoryId: string, name: string }) => (
                                    <Link key={category.categoryId} to={`/product/category/${category.categoryId}`}>
                                        <DropdownMenuItem className="cursor-pointer text-base">
                                            {category.name}
                                        </DropdownMenuItem>
                                    </Link>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <div className="hidden md:flex gap-3 items-center border rounded-full p-2 px-5">
                            <Search className="h-5 w-5 text-gray-500" />
                            <input
                                type="text"
                                placeholder="Search"
                                className="outline-none bg-transparent"
                                onChange={(e) => setSearchKey(e.target.value)}
                                onKeyDown={handleKeyDown}
                                value={searchKey}
                            />
                        </div>
                    </div>

                    <div className="hidden md:flex items-center gap-1">
                        {desktopNav.map(nav =>
                            <Link key={nav.label} to={nav.path && nav?.path}>
                                <div className="flex items-center hover:bg-slate-100 rounded-full p-2.5">
                                    {nav.icon}
                                </div>
                            </Link>
                        )}
                        <Link to="/notifications">
                            <div className="flex items-center hover:bg-slate-100 rounded-full p-2.5">
                                <BellRing />
                            </div>
                        </Link>
                        <Link to="/cart" className="ml-3">
                            <div className="flex items-center gap-2 text-lg text-gray-800">
                                <ShoppingBag className="w-7 h-7" />
                                <span className="bg-[#31B65D] text-white px-2 rounded-full text-sm">{cartCount}</span>
                            </div>
                        </Link>
                        <Link to="/me" className="ml-3">
                            <CircleUserRound className="h-10 w-10 bg-green-100 text-[#31B65D] rounded-full p-1.5" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="fixed bottom-0 px-4 bg-white border-t z-40 flex justify-between items-center gap-4 w-full md:hidden">
                {
                    fullNavigations.map(nav =>
                        <Link key={nav.label} to={nav.path && nav?.path}>
                            <div className={cn("grid justify-items-center p-4 rounded-md", nav.label.toLowerCase() === "cart" && "relative")}>
                                {nav.icon}
                                {nav.label.toLowerCase() === "cart" && cartCount > 0 && (
                                    <span className="absolute top-1 right-1 bg-[#31B65D] text-white text-[10px] rounded-full w-4 h-4 grid place-items-center">{cartCount}</span>
                                )}
                            </div>
                        </Link>
                    )
                }
            </div>
        </>
    )
}
