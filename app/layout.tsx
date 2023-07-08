import { cn } from '../lib/utils';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Пацанский translate',
	description: 'Создай никнейм своей мечты за считанные секунды!',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='ru'>
			<body className={cn('bg-black', inter.className)}>{children}</body>
		</html>
	);
}
