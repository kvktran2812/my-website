"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";
import { headers } from "next/headers";
import { LinkData } from "@/lib/definition";
import { links } from "@/lib/data";
import {Nav, NavItem, NavLink} from 'react-bootstrap';


export function Header() {
    return (
    <header>
        <div className="fixed top-[0%] left-[0%] border border-gray border-opacity-40 w-[100%] h-[3rem] bg-white shadow-lg shadow-black/[0.03] sm:w-[50%] sm:left-[25%] sm:top-[5%]">
          <Nav className="justify-content-center">
              {links.map(link => (
                  <NavItem key={link.id}>
                    <Link href={link.href} className="flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300">{link.name}</Link>
                  </NavItem>
              ))}
          </Nav>
        </div>
    </header>
  )
}