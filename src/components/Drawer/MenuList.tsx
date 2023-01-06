import Icon from "react-native-vector-icons/Ionicons";
import { MenuType } from "../../types/MenuType";

export const DrawerAuthList: MenuType[] = [
  {
    name: "Acessar conta",
    icon: <Icon color="white" size={28} name="log-in-outline" />,
    screen: "SignIn",
    permissions: [],
    submenus: [],
  },
  {
    name: "Fechar aplicativo",
    icon: <Icon color="white" size={28} name="close" />,
    screen: "exit",
    permissions: [],
    submenus: [],
  },
];

export const DrawerMenuList: MenuType[] = [
  {
    name: "Tela Inicial",
    icon: <Icon color="white" size={28} name="home-outline" />,
    screen: "Dashboard",
    permissions: [],
    submenus: [],
  },
  {
    name: "Meus dados",
    icon: <Icon color="white" size={28} name="person" />,
    screen: "Myself",
    permissions: [],
    submenus: [],
  },
  {
    name: "Pedidos",
    icon: <Icon color="white" size={28} name="list" />,
    screen: "Orders",
    permissions: ["manage_orders"],
    submenus: [],
  },
  {
    name: "Refeições",
    icon: <Icon color="white" size={28} name="restaurant-outline" />,
    screen: "Meals",
    permissions: ["manage_meals"],
    submenus: [],
  },
  {
    name: "Clientes",
    icon: <Icon color="white" size={28} name="people-outline" />,
    screen: "Clients",
    permissions: ["manage_clients"],
    submenus: [],
  },

  {
    name: "Mesas",
    icon: <Icon color="white" size={28} name="md-albums-outline" />,
    screen: "Tables",
    permissions: [],
    submenus: [],
  },
  {
    name: "Controle de Acesso",
    icon: <Icon color="white" size={28} name="card-outline" />,
    screen: "#",
    permissions: ["manage_users", "manage_roles"],
    submenus: [
      {
        name: "Usuários",
        icon: <Icon color="white" size={28} name="person-circle-outline" />,

        screen: "Users",
        permissions: ["manage_users"],
        submenus: [],
      },
      {
        name: "Perfis",
        icon: <Icon color="white" size={28} name="reader-outline" />,
        screen: "Roles",
        permissions: ["manage_roles"],
        submenus: [],
      },
    ],
  },
  {
    name: "Sair da conta",
    icon: <Icon color="white" size={28} name="exit-outline" />,
    screen: "logout",
    permissions: [],
    submenus: [],
  },
  {
    name: "Fechar aplicativo",
    icon: <Icon color="white" size={28} name="close" />,
    screen: "exit",
    permissions: [],
    submenus: [],
  },
];
