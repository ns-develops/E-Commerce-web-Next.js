import Link from "next/link";

export const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 bg-white shadow-sm w-full -webkit-sticky">
            <div className="container mx-auto flex items-center justify-between px-4 py-4">
                <Link href="/" className="hover:text-blue-600 text-xl font-semibold text-black">
                    Your E-commerce
                </Link>

                <div className="flex space-x-6 ml-auto">
                    <Link href="/new-in" className="hover:text-blue-600 text-black">
                        New in
                    </Link>
                    <Link href="/clothes" className="hover:text-blue-600 text-black">
                        Clothes
                    </Link>
                    <Link href="/checkout" className="hover:text-blue-600 text-black">
                        Shopping cart
                    </Link>
                </div>
            </div>
        </nav>
    );
};
