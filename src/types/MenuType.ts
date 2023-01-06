export type MenuType = {
    name: string;
    icon: any;
    permissions: string[];
    screen: string;
    submenus: MenuType[];
};