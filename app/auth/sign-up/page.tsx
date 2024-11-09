import React from 'react';
import SignUpForm from './components/sign-up-form';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

export default function SignUpPage() {
	return (
		<Card className='max-w-sm mx-auto'>
			<CardHeader>
				<h1>Sign In</h1>
			</CardHeader>
			<CardContent>
				<SignUpForm />
			</CardContent>
		</Card>
	);
}
