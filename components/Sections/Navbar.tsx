"use client"
import { FcMoneyTransfer } from "react-icons/fc";

import * as React from "react"
import Link from "next/link"
import { useIsMobile } from "../../hooks/use-mobile"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"

export function NavigationMenuDemo() {
  const isMobile = useIsMobile()

  return (
    <NavigationMenu
      viewport={isMobile}
      className="w-full flex justify-center md:justify-start"
    >
      <NavigationMenuList className="flex flex-wrap gap-4 justify-center md:justify-start">
        <NavigationMenuLink asChild>
          <Link href="/">Cash Flow</Link>
        </NavigationMenuLink>
        <NavigationMenuLink asChild>
          <Link href="/components">Spending</Link>
        </NavigationMenuLink>
        <NavigationMenuLink asChild>
          <Link href="/">Income</Link>
        </NavigationMenuLink>
        <NavigationMenuLink asChild>
          <Link href="/components">Sankey</Link>
        </NavigationMenuLink>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
