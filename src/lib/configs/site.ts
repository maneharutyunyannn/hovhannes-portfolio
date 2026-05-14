export interface INavItem {
    label: string;
    href: string;
}

export const mainNavItems: INavItem[] = [
    { label: "Գլխավոր", href: "/" },
    { label: "Ծառայություններ", href: "/#services" },
    { label: "Նախագծեր", href: "/#projects" },
];

export const footerNavItems: INavItem[] = mainNavItems;