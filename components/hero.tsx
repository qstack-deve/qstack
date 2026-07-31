"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Sparkles, ShieldCheck, Cpu, Globe, Rocket } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-16 md:pb-24">
      <div className="container flex max-w-[64rem] flex-col items-center gap-6 text-center mx-auto px-4">
        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-extrabold text-4xl sm:text-6xl md:text-7xl tracking-tight leading-[1.1]"
        >
          Building Next-Gen Software with{" "}
          <span className="text-primary">
            Quantum Stack
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-[44rem] leading-relaxed text-muted-foreground text-base sm:text-xl"
        >
          We architect high-performance web applications, cloud solutions, and enterprise software systems. From concept to production scale.
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto pt-2"
        >
          <Link href="/portfolio" className="w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto gap-2 rounded-xl h-12 px-7 text-base font-semibold shadow-lg">
              <span>View Portfolio</span>
              <ArrowRight className="size-4" />
            </Button>
          </Link>
          <Link href="/contact" className="w-full sm:w-auto">
            <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-xl h-12 px-7 text-base font-medium">
              Book a Consultation
            </Button>
          </Link>
        </motion.div>

        {/* Stats & Trust Bar */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl mt-12 pt-8 border-t border-border/50 text-left"
        >
          <div className="p-4 rounded-2xl bg-card/60 border border-border/50 backdrop-blur-xs">
            <div className="flex items-center gap-2 text-primary font-bold text-2xl">
              <Rocket className="size-5 text-chart-1" />
              <span>99.9%</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1 font-medium">Production Uptime SLA</p>
          </div>

          <div className="p-4 rounded-2xl bg-card/60 border border-border/50 backdrop-blur-xs">
            <div className="flex items-center gap-2 text-primary font-bold text-2xl">
              <Globe className="size-5 text-chart-2" />
              <span>Sub-Sec</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1 font-medium">Global Page Loads</p>
          </div>

          <div className="p-4 rounded-2xl bg-card/60 border border-border/50 backdrop-blur-xs">
            <div className="flex items-center gap-2 text-primary font-bold text-2xl">
              <Cpu className="size-5 text-primary" />
              <span>24/7</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1 font-medium">Managed Cloud Systems</p>
          </div>

          <div className="p-4 rounded-2xl bg-card/60 border border-border/50 backdrop-blur-xs">
            <div className="flex items-center gap-2 text-primary font-bold text-2xl">
              <ShieldCheck className="size-5 text-emerald-500" />
              <span>Zero-Trust</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1 font-medium">Bank-Grade Security</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
