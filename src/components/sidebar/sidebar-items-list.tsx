import { Home, WalletMinimal } from "lucide-react";

export const sidebarItems = [
  {
    icon: <Home strokeWidth={1} />,
    title: 'Dashboard',
    href: '/dashboard'
  },
  {
    icon: <WalletMinimal strokeWidth={1} />,
    title: 'Finance planner',
    href: '/planner'
  },
]