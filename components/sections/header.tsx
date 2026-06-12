"use client";

import { Button } from "@base-ui/react";
import { Download, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import {motion , AnimatePresence} from "framer-motion";

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(()=>{
const handleScroll = ()=>{
    setIsScrolled(window.scrollY>50)
}
window.addEventListener("scroll" , handleScroll);
return ()=>window.removeEventListener("scroll" , handleScroll)
    },[])

    // Handle body overflow when menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        }
    }, [isMobileMenuOpen])

    const menuItems = [
        { label: "About", href: "#about" },
        { label: "Skills", href: "#skills" },
        { label: "Project", href: "#projects" },
        { label: "Contact", href: "#contacts" },
    ];

    // Workaround for mismatched Button prop typings
    const AnyButton = Button as React.ElementType;

       const resumeStyle = {
        background: "linear-gradient(to right, #3b82f6, #a855f7, #ec4899)",
        color: "white",
        fontFamily: "'Space Mono', monospace",
        fontSize: "12px",
        letterSpacing: "0.1em",
    };

    const handleResumeMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
        e.currentTarget.style.background = "linear-gradient(to right, #2563eb, #9333ea, #db2777)";
    };

    const handleResumeMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
        e.currentTarget.style.background = "linear-gradient(to right, #3b82f6, #a855f7, #ec4899)";
    };

    return (
        <>
            {/* Backdrop Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={() => setIsMobileMenuOpen(false)}
                    />
                )}
            </AnimatePresence>

            <header className={`fixed top-0 left-0 right-0 z-50 bg-background border-b transition-all duration-300 ${
            isScrolled ? "bg-background/80 backdrop-blur-md border-b" : ""
            }`}>
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="text-xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                        Piyush Neware
                    </Link>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex items-center gap-8">
                        {menuItems.map((item) => (
                            <Link
                                href={item.href}
                                key={item.href}
                                className="text-sm font-medium transition-all duration-300 group"
                            >
                                <span className="text-foreground group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:via-purple-500 group-hover:to-pink-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                                    {item.label}
                                </span>
                            </Link>
                        ))}
                    </nav>
                    <AnyButton
                       variant="default"
                       size="sm"
                       className="hidden md:flex items-center gap-2 px-4 py-2 text-sm rounded-lg transition-all duration-200"
                       style={resumeStyle}
                       onMouseEnter={handleResumeMouseEnter}
                       onMouseLeave={handleResumeMouseLeave}
                       onClick={() => window.open("/resume.pdf", "_blank")}
                    >
                    <Download size={13} />
                        RESUME
                    </AnyButton>
                    {/*Mobile Menu Button*/}
                    <AnyButton
                        variant="ghost"
                        size="icon"
                        className="md:hidden text-purple-500 hover:text-purple-600"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-5 h-5" />
                        ) : (
                            <Menu className="w-5 h-5" />
                        )} 
                    </AnyButton>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.nav 
                            className="md:hidden border-t py-4"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="flex flex-col gap-3">
                                {menuItems.map((item) => (
                                    <Link
                                        href={item.href}
                                        key={item.href}
                                        className="text-sm font-medium text-foreground hover:text-primary transition-colors px-4 py-2"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                            <div className="w-full flex justify-center">
                                <AnyButton variant="default" size="sm" className="gap-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 flex w-full justify-center items-center rounded-lg">
                                    <Download className="w-4 h-4"/>
                                    Resume
                                </AnyButton>
                            </div>
                        </motion.nav>
                    )}
                </AnimatePresence>
            </div>
        </header>
        </>
    );
};

export default Header;