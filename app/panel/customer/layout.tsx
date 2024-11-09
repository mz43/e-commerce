import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { CustomerSidebar } from './components/customer-sidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<SidebarProvider defaultOpen>
			<CustomerSidebar />
			<main>
				<SidebarTrigger />
				{children}
			</main>
		</SidebarProvider>
	);
}
