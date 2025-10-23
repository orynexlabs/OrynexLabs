"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  // Detect scroll for background change
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detect if we are on another page (e.g., /careers)
  useEffect(() => {
    const path = window.location.pathname;
    if (path !== "/" && path !== "") setActiveSection(path);
  }, []);

  // Detect visible section on homepage
  useEffect(() => {
    if (window.location.pathname !== "/") return;

    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { href: "/#home", label: "Home" },
    { href: "/#about", label: "About Us" },
    { href: "/#projects", label: "Projects" },
    { href: "/#technology", label: "Technology" },
    { href: "/#team", label: "Team" },
    { href: "/#faq", label: "FAQ" },
    { href: "/#contact", label: "Contact" },
    { href: "/careers", label: "Careers" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-[#070B15]/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800"
          : "bg-transparent"
      }`}
    >
      <div className="container-width mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link
            href="/#home"
            className="text-2xl font-bold text-primary dark:text-blue-400"
          >
            Orynex Labs
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const normalizedHref = link.href.startsWith("/#")
                ? link.href.replace("/", "")
                : link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    setActiveSection(normalizedHref);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === normalizedHref
                      ? "text-primary dark:text-blue-400 font-semibold"
                      : "text-gray-800 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-900 dark:text-gray-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-[#070B15]">
            {navLinks.map((link) => {
              const normalizedHref = link.href.startsWith("/#")
                ? link.href.replace("/", "")
                : link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    setActiveSection(normalizedHref);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`block py-3 text-sm font-medium transition-colors ${
                    activeSection === normalizedHref
                      ? "text-primary dark:text-blue-400 font-semibold"
                      : "text-gray-800 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
