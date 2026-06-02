"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { announcementItems, products } from "@/data/products";
import { CartBadge } from "@/components/CartBadge";

const navItems = [
  { href: "/shop", label: "Shop" },
  { href: "/build", label: "Build Your System" },
  { href: "/quiz", label: "Finder" },
  { href: "/compare", label: "Compare Bases" },
  { href: "/care", label: "Care Guide" },
  { href: "/faq", label: "FAQs" },
  { href: "/contact", label: "Contact" }
];

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="11" cy="11" r="6.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M16 16l5 5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const value = query.trim().toLowerCase();
    if (!value) return [];
    return products
      .filter((product) => {
        const haystack = [
          product.name,
          product.baseType,
          product.badge,
          product.short,
          product.whyThisProduct,
          ...product.bestFor,
          ...product.buyerTypes
        ]
          .join(" ")
          .toLowerCase();
        return haystack.includes(value);
      })
      .slice(0, 5);
  }, [query]);

  return (
    <header className="site-header">
      <div className="announcement-bar">
        <div className="container announcement-row" aria-label="Store announcements">
          {announcementItems.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>

      <div className="container header-shell">
        <div className="nav-row">
          <Link href="/" className="brand" aria-label="The New Hair Co home">
            <span className="brand-mark">N</span>
            <span>
              <strong>The New Hair Co.</strong>
              <small>Premium men's hair pieces</small>
            </span>
          </Link>

          <nav className="nav-links desktop-nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="nav-actions">
            <button
              type="button"
              className={`icon-button ${searchOpen ? "active" : ""}`}
              onClick={() => setSearchOpen((open) => !open)}
              aria-expanded={searchOpen}
              aria-controls="header-search"
            >
              <SearchIcon />
              <span>Search</span>
            </button>
            <Link href="/cart" className="cart-link">
              <span>Cart</span>
              <CartBadge />
            </Link>
            <button
              type="button"
              className="icon-button menu-toggle"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
            >
              <MenuIcon />
              <span>Menu</span>
            </button>
          </div>
        </div>

        <div id="header-search" className={`search-panel ${searchOpen ? "open" : ""}`}>
          <label className="search-field">
            <span className="sr-only">Search products</span>
            <SearchIcon />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by base, need, badge, or product name"
            />
          </label>
          {query && (
            <div className="search-results" role="listbox" aria-label="Search results">
              {results.length > 0 ? (
                results.map((product) => (
                    <Link
                      key={product.id}
                      href={`/products/${product.slug}`}
                    className="search-result"
                    onClick={() => {
                      setQuery("");
                      setSearchOpen(false);
                    }}
                  >
                    <strong>{product.name}</strong>
                    <span>
                      {product.baseType} · {product.badge}
                    </span>
                  </Link>
                ))
              ) : (
                <div className="search-empty">No close match yet. Try a base type like thin skin or hybrid.</div>
              )}
            </div>
          )}
        </div>
      </div>

      <div id="mobile-nav" className={`mobile-nav ${menuOpen ? "open" : ""}`}>
        <div className="container mobile-nav-inner">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
