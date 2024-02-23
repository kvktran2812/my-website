"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";
import { headers } from "next/headers";
import { LinkData } from "@/lib/definition";
import { links } from "@/lib/data";


export function Header() {
    return <header>
        <div className="fixed top-[0%] left-[0%] border border-gray border-opacity-40 w-[100%] h-[3rem] bg-white shadow-lg shadow-black/[0.03] sm:w-[50%] sm:left-[25%] sm:top-[5%]">
          <nav className="flex fixed top-[h/2] left-1/2 h-12 -translate-x-1/2 py-2">
            <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
              {links.map(link => (
                <li key={link.id}><Link href={link.href} className="flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300">{link.name}</Link></li>
              ))}
            </ul>
          </nav>
        </div>
    </header>
}