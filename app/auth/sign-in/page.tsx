import React from 'react';
import SignInForm from './components/sign-in-form';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

export default function SignInPage() {
	return (
		<Card className='max-w-sm mx-auto'>
			<CardHeader>
				<h1>Sign In</h1>
			</CardHeader>
			<CardContent>
				<SignInForm />
			</CardContent>
		</Card>
	);
}
