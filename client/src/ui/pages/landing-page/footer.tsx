import { Croissant, Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-gray-100 mt-7">
            <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="flex justify-center">
                    <div className="flex items-center gap-2">
                        <div className="bg-[#31B65D] rounded-full p-2">
                            <Croissant className="h-6 w-6 text-white" />
                        </div>
                        <span className="font-bold text-2xl text-gray-800">The Little Baker</span>
                    </div>
                </div>

                <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
                    Freshly baked goods made with love at The Little Baker.
                </p>

                <ul className="mt-8 flex flex-wrap justify-center gap-6 md:gap-10">
                    {["About Us", "Our Products", "Blog", "Contact Us", "FAQs"].map(link => (
                        <li key={link}>
                            <a className="text-gray-700 transition hover:text-[#31B65D]" href="#">{link}</a>
                        </li>
                    ))}
                </ul>

                <ul className="mt-8 flex justify-center gap-6 md:gap-8">
                    <li><a href="#" className="text-gray-700 hover:text-[#31B65D]" aria-label="Facebook"><Facebook className="h-6 w-6" /></a></li>
                    <li><a href="#" className="text-gray-700 hover:text-[#31B65D]" aria-label="Instagram"><Instagram className="h-6 w-6" /></a></li>
                    <li><a href="#" className="text-gray-700 hover:text-[#31B65D]" aria-label="Twitter"><Twitter className="h-6 w-6" /></a></li>
                </ul>

                <div className="mt-8 pt-8 border-t border-gray-300 text-center text-sm text-gray-500">
                    <p>© 2024 The Little Baker. All rights reserved.</p>
                    <p className="mt-2">123 Baker Street, Sweetwater, AL 12345 · info@thelittlebaker.com</p>
                    <p className="mt-2">
                        <a href="#" className="hover:text-[#31B65D]">Privacy Policy</a>
                        {' | '}
                        <a href="#" className="hover:text-[#31B65D]">Terms of Service</a>
                    </p>
                </div>
            </div>
        </footer>
    )
}
