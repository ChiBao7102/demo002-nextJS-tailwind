"use client"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { title } from "process"
import { Logo } from "./logo"
import React from "react"

const components: { title: string, description: string }[] = [
    {
        title: "Frozen",
        description: "Frozen is a Python package that lets you turn any Python object into a read-only immutable value.",
    },
    {
        title: "Swift",
        description: "Frozen is a Python package that lets you turn any Python object into a read-only immutable value.",
    },
    {
        title: "Tuscany",
        description: "Frozen is a Python package that lets you turn any Python object into a read-only immutable value.",
    },
    {
        title: "Tide",
        description: "Frozen is a Python package that lets you turn any Python object into a read-only immutable value.",
    },
    {
        title: "Amber",
        description: "Frozen is a Python package that lets you turn any Python object into a read-only immutable value.",
    },
    {
        title: "Mint",
        description: "Frozen is a Python package that lets you turn any Python object into a read-only immutable value.",
    },
]
export function NavigationBar() {
    return (
        <NavigationMenu>
            <NavigationMenuList
                className="hidden md:flex md:space-x-4"



            >
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <a
                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                        href="/"
                                    >
                                        <Logo />
                                        <div className="mb-2 mt-4 text-lg font-medium">
                                            Bird Software
                                        </div>
                                        <p className="text-sm leading-tight text-muted-foreground">
                                            eCommerce platform for selling digital products.
                                        </p>
                                    </a>
                                </NavigationMenuLink>
                            </li>
                            <ListItem title="Introduction">
                                Learn about the basics of Bird.
                            </ListItem>
                            <ListItem title="Demo">
                                How to build a store in 60 seconds with Bird
                            </ListItem>
                            <ListItem title="Community">
                                Join the community and get help or support.
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Templates</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                            {components.map((component) => (
                                <ListItem
                                    key={component.title}
                                    title={component.title}

                                >
                                    {component.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                        <NavigationMenuLink
                            className="font-medium"
                        >
                            Documentation
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                        <NavigationMenuLink className="
                font-medium">
                            Pricing
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>

            </NavigationMenuList>
        </NavigationMenu>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"