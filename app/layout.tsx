import { cn } from '../lib/utils'
import './globals.css'
import { Inter } from 'next/font/google'
import Matrix from '../components/Matrix'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Пацанский translate',
	description: 'Создай никнейм своей мечты за считанные секунды!',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="ru" className={'overflow-x-hidden'}>
			<body className={cn('', inter.className)}>
				<ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
					{/*<Matrix className={'fixed top-0 w-screen h-screen dark:bg-black'} />*/}
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
