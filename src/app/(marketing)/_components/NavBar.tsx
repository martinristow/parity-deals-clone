import Link from "next/link";
import {BrandLogo} from "@/components/BrandLogo";
import {SignedIn, SignedOut, SignInButton} from "@clerk/nextjs";

export function NavBar() {
    return <header className="flex py-6 shadow-xl fixed top-0 w-full z-10 bg-background/95">
        <div className="container mx-auto px-4 md:px-6">
            <nav className="flex items-center gap-10 font-semibold">
                <Link href="/" className="mr-auto">
                    <BrandLogo/>
                </Link>
                <Link href="#" className="text-lg">
                    Features
                </Link>
                <Link href="/#pricing" className="text-lg">
                    Pricing
                </Link>
                <Link href="#" className="text-lg">
                    About
                </Link>
                <span className="text-lg">
                    <SignedIn>
                        <Link href="/dashboard">Dashboard</Link>
                    </SignedIn>
                    <SignedOut>
                        <SignInButton>Login</SignInButton>
                    </SignedOut>
                </span>
            </nav>
        </div>
    </header>
}