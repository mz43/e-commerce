import { Calendar, Home, Inbox, LayoutDashboardIcon } from 'lucide-react';

import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from '@/components/ui/sidebar';
import Link from 'next/link';

// Menu items.
const items = [
	{
		title: 'Home',
		url: '/panel/admin',
		icon: LayoutDashboardIcon,
	},
	{
		title: 'Products',
		url: '/panel/admin/products',
		icon: Home,
	},
	{
		title: 'Orders',
		url: '/panel/admin/orders',
		icon: Inbox,
	},
	{
		title: 'Customers',
		url: '/panel/admin/customers',
		icon: Calendar,
	},
];

export function AdminSidebar() {
	return (
		<Sidebar>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>Administrator Panel</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{items.map((item) => (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton asChild>
										<Link href={item.url}>
											<item.icon />
											<span>{item.title}</span>
										</Link>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
}
