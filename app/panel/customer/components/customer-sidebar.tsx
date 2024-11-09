import { Calendar, Inbox, LayoutDashboardIcon } from 'lucide-react';

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
		url: '/panel/customer',
		icon: LayoutDashboardIcon,
	},
	{
		title: 'Orders',
		url: '/panel/customer/orders',
		icon: Inbox,
	},
	{
		title: 'Profile',
		url: '/panel/customer/profile',
		icon: Calendar,
	},
];

export function CustomerSidebar() {
	return (
		<Sidebar>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>Customer Panel</SidebarGroupLabel>
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
