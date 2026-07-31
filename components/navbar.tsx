"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Layers,
  Home,
  Briefcase,
  FolderKanban,
  Users,
  UserCheck,
  Info,
  Mail,
  ArrowRight,
  Sparkles,
} from "lucide-react";

import { cn } from "../lib/utils";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger, SheetClose } from "./ui/sheet";
import Image from "next/image";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  const routes = [
    { href: "/", label: "Home", icon: Home },
    { href: "/services", label: "Services", icon: Briefcase },
    { href: "/portfolio", label: "Portfolio", icon: FolderKanban },
    { href: "/staff", label: "Team", icon: Users },
    { href: "/about", label: "About Us", icon: Info },
    { href: "/contact", label: "Contact", icon: Mail },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between w-11/12 mx-auto">
        {/* Brand Logo */}
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="flex items-center gap-2 group transition-all"
          >
            <div className="relative flex items-center justify-center size-9 rounded-xl bg-slate-900 dark:bg-slate-800 text-white shadow-xs p-1.5 group-hover:scale-105 transition-all border border-slate-700/40">
              <Image
                src="/logo.png"
                alt="Logo"
                height={24}
                width={24}
                className="size-6 object-contain transition-transform group-hover:rotate-6 duration-300"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-tight tracking-tight text-foreground">
                Quantum
                <span className="text-primary font-extrabold">Stack</span>
              </span>
              <span className="text-[10px] text-muted-foreground tracking-widest font-mono uppercase hidden sm:inline-block">
                Technologies
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 pl-4 border-l border-border/60">
            {routes.map((route) => {
              const isActive =
                pathname === route.href ||
                (route.href !== "/" && pathname.startsWith(route.href));
              return (
                <Link
                  key={route.href}
                  href={route.href}
                  className={cn(
                    "px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 flex items-center gap-1.5",
                    isActive
                      ? "bg-primary/10 text-primary font-semibold shadow-xs"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/60",
                  )}
                >
                  {route.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Action Button & Mobile Trigger */}
        <div className="flex items-center gap-3">
          <Link href="/contact" className="hidden sm:inline-flex">
            <Button
              size="sm"
              className="gap-2 shadow-sm rounded-xl font-medium"
            >
              <span>Get Started</span>
            </Button>
          </Link>

          {/* Mobile Sheet Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="h-10 w-10 rounded-xl lg:hidden focus-visible:ring-1"
                aria-label="Open Navigation Menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              hideCloseButton
              className="w-full sm:w-[380px] p-6 flex flex-col justify-between"
            >
              <div>
                <SheetTitle className="text-left flex items-center justify-between pb-4 border-b">
                  <div className="flex items-center gap-2">
                    <div className="size-8 rounded-lg bg-slate-900 dark:bg-slate-800 text-white flex items-center justify-center p-1 border border-slate-700/40">
                      <Image
                        src="/logo.png"
                        alt="Logo"
                        width={20}
                        height={20}
                        className="size-5 object-contain"
                      />
                    </div>
                    <span className="font-bold text-lg">Quantum Stack</span>
                  </div>

                  {/* Explicit Top-Right Close Button */}
                  <SheetClose asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-10 w-10 rounded-xl focus-visible:ring-1"
                      aria-label="Close Navigation Menu"
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </SheetClose>
                </SheetTitle>

                <div className="my-6 flex flex-col space-y-1.5">
                  <span className="text-xs font-semibold text-muted-foreground px-3 uppercase tracking-wider mb-2">
                    Navigation Menu
                  </span>
                  {routes.map((route) => {
                    const RouteIcon = route.icon;
                    const isActive =
                      pathname === route.href ||
                      (route.href !== "/" && pathname.startsWith(route.href));
                    return (
                      <Link
                        key={route.href}
                        href={route.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "flex items-center gap-3 px-3.5 py-3 rounded-xl text-sm font-medium transition-all min-h-[48px]",
                          isActive
                            ? "bg-primary text-primary-foreground font-semibold shadow-md"
                            : "text-muted-foreground hover:bg-muted hover:text-foreground",
                        )}
                      >
                        <RouteIcon
                          className={cn(
                            "size-5",
                            isActive
                              ? "text-primary-foreground"
                              : "text-primary",
                          )}
                        />
                        <span>{route.label}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div className="pt-6 border-t space-y-3">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full block"
                >
                  <Button className="w-full gap-2 rounded-xl h-12 text-base font-semibold shadow-md">
                    <span>Start a Project</span>
                    <ArrowRight className="size-4" />
                  </Button>
                </Link>
                <p className="text-center text-xs text-muted-foreground">
                  Building next-gen software &amp; cloud solutions.
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
