"use client";

import { Link, NavLink } from "react-router";
import { Search, User, Film, Menu, X } from "lucide-react";
import { useState } from "react";

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full">
      <div className="glass-card border-b border-white/20 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo/Brand Section */}
            <Link
              to="/"
              className="flex items-center gap-3 group transition-transform hover:scale-105"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                <Film className="w-6 h-6 text-white" />
              </div>
              <span className="hidden sm:flex font-serif text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                CineVerse
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <div className="flex items-center gap-6">
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    `relative font-medium text-foreground/80 hover:text-foreground transition-all duration-300 py-2 ${
                      isActive ? "text-foreground" : ""
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      Home
                      {isActive && (
                        <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                      )}
                    </>
                  )}
                </NavLink>

                <NavLink
                  to="/movies"
                  end
                  className={({ isActive }) =>
                    `relative font-medium text-foreground/80 hover:text-foreground transition-all duration-300 py-2 ${
                      isActive ? "text-foreground" : ""
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      Movies
                      {isActive && (
                        <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                      )}
                    </>
                  )}
                </NavLink>

                <NavLink
                  to="/tv-series"
                  end
                  className={({ isActive }) =>
                    `relative font-medium text-foreground/80 hover:text-foreground transition-all duration-300 py-2 ${
                      isActive ? "text-foreground" : ""
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      TV Series
                      {isActive && (
                        <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                      )}
                    </>
                  )}
                </NavLink>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                <button
                  className="w-10 h-10 rounded-xl glass-card hover:bg-white/40 flex items-center justify-center transition-all duration-300 hover:scale-105"
                  aria-label="Search"
                >
                  <Search className="w-5 h-5 text-foreground/70" />
                </button>
                <button
                  className="w-10 h-10 rounded-xl glass-card hover:bg-white/40 flex items-center justify-center transition-all duration-300 hover:scale-105"
                  aria-label="User profile"
                >
                  <User className="w-5 h-5 text-foreground/70" />
                </button>
              </div>
            </div>

            <div className="flex md:hidden items-center gap-3">
              <button
                className="w-10 h-10 rounded-xl glass-card hover:bg-white/40 flex items-center justify-center transition-all duration-300"
                aria-label="Search"
              >
                <Search className="w-5 h-5 text-foreground/70" />
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="w-10 h-10 rounded-xl glass-card hover:bg-white/40 flex items-center justify-center transition-all duration-300"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5 text-foreground/70" />
                ) : (
                  <Menu className="w-5 h-5 text-foreground/70" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden glass-card border-b border-white/20 shadow-lg overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4 space-y-4">
          <NavLink
            to="/"
            end
            onClick={() => setIsMobileMenuOpen(false)}
            className={({ isActive }) =>
              `block py-3 px-4 rounded-xl font-medium transition-all duration-300 ${
                isActive
                  ? "bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-foreground border border-purple-500/30"
                  : "text-foreground/80 hover:bg-white/20"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/movies"
            end
            onClick={() => setIsMobileMenuOpen(false)}
            className={({ isActive }) =>
              `block py-3 px-4 rounded-xl font-medium transition-all duration-300 ${
                isActive
                  ? "bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-foreground border border-purple-500/30"
                  : "text-foreground/80 hover:bg-white/20"
              }`
            }
          >
            Movies
          </NavLink>

          <NavLink
            to="/tv-series"
            end
            onClick={() => setIsMobileMenuOpen(false)}
            className={({ isActive }) =>
              `block py-3 px-4 rounded-xl font-medium transition-all duration-300 ${
                isActive
                  ? "bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-foreground border border-purple-500/30"
                  : "text-foreground/80 hover:bg-white/20"
              }`
            }
          >
            TV Series
          </NavLink>

          <div className="pt-4 border-t border-white/20">
            <button
              className="w-full py-3 px-4 rounded-xl glass-card hover:bg-white/40 flex items-center gap-3 transition-all duration-300"
              aria-label="User profile"
            >
              <User className="w-5 h-5 text-foreground/70" />
              <span className="text-foreground/80 font-medium">Profile</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
