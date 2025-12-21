'use client'

import {
    LayoutDashboard,
    FileText,
    FilePlus,
    CheckCircle,
    Shield,
    ClipboardList,
    LucideProps,
    MoonIcon,
    SunIcon,
} from 'lucide-react';
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarMenu,
    SidebarMenuButton,
    SidebarHeader,
    SidebarFooter,
    useSidebar,
} from '@/components/ui/sidebar';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import Logo from './logo';

interface ISidebarItem {
    href: string;
    label: string;
    icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
}

export function AppSidebar({ menuItems, activeSection }: { menuItems: ISidebarItem[]; activeSection: string }) {
    const { setTheme, theme } = useTheme()
    const { setOpenMobile } = useSidebar();

    return (
        <Sidebar>
            <SidebarHeader className="border-b border-sidebar-border p-4">
                <div onClick={() => setOpenMobile(false)} className="flex items-center gap-3">
                    <Logo />
                </div>
            </SidebarHeader>

            <SidebarContent>
                <SidebarGroup>
                    <SidebarMenu>
                        {menuItems.map((item, index) => {
                            return (
                                <Link href={item.href} key={index}>
                                    <SidebarMenuButton
                                        isActive={item.href === activeSection}
                                        onClick={() => setOpenMobile(false)}
                                        className="data-[active=true]:bg-primary/10 data-[active=true]:text-primary py-5"
                                    >
                                        {item.icon && <item.icon />}
                                        <span className="flex-1">{item.label}</span>
                                    </SidebarMenuButton>
                                </Link>
                            )
                        })}
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter className="border-t border-sidebar-border p-4">
                <button
                    aria-label="Theme Toggle"
                    className="flex items-center w-full h-full transition-colors duration-300"
                    onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                >
                    {theme === "light" ? <MoonIcon className="size-5 text-muted-foreground" /> : <SunIcon className="size-5 text-muted-foreground" />}
                    <span className="ml-2 text-sm">{theme === "light" ? "Light Mode" : "Dark Mode"}</span>
                </button>
            </SidebarFooter>
        </Sidebar>
    );
}
