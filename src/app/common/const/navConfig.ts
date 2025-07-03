import { NavConfig } from "../model/navConfig.model";

export const navItems: NavConfig[] = [
  { label: "Home", href: "/", icon: "home" },
  { label: "Transferencia entrante ", href: "/home/transactions", icon: "directboxreceive" },
  { label: "Transferencia saliente ", href: "/home/transactions", icon: "directboxsend" },
  { label: "Editar condiciones", href: "/home/edit", icon: "edit" },
  { label: "Historial de transferencias", href: "/home/transfer", icon: "history" },
  { label: "Ayuda y soporte", href: "/help", icon: "help" },
];



//   {
//     label: "Settings",
//     href: "/dashboard/settings",
//     icon: "settings",
//     children: [
//       { label: "Profile", href: "/dashboard/settings/profile" },
//       { label: "Security", href: "/dashboard/settings/security" },
//     ],
//   },
// Transferencias salientes
// Editar condiciones
// Historial de transferencias
// Ayuda y soporte 