import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AdminSidebar } from './components/admin-sidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<SidebarProvider defaultOpen>
			<AdminSidebar />
			<main>
				<SidebarTrigger />
				{children}
			</main>
		</SidebarProvider>
	);
}
