'use client'
import { Link } from 'react-scroll'
import { Separator } from '@/components/ui/separator'
import Main from '../public/main.png'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Moon, MoveDown, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

export default function Home() {
	const { setTheme } = useTheme()

	return (
		<main className="w-screen h-screen">
			<nav className={'text-white py-2 flex justify-center'}>
				<div className={'flex justify-between max-w-5xl w-full'}>
					<div className={'flex gap-5 items-center'}>
						<h4 className={'scroll-m-20 text-xl font-semibold tracking-tight text-black dark:text-white'}>
							Пацанский translate
						</h4>
						{/*<Link*/}
						{/*	to="home"*/}
						{/*	spy={true}*/}
						{/*	smooth={true}*/}
						{/*	duration={500}*/}
						{/*	activeClass={'text-white'}*/}
						{/*	className={'text-muted-foreground'}*/}
						{/*>*/}
						{/*	Home*/}
						{/*</Link>*/}
						{/*<Link*/}
						{/*	to="translate"*/}
						{/*	spy={true}*/}
						{/*	smooth={true}*/}
						{/*	duration={500}*/}
						{/*	activeClass={'text-white'}*/}
						{/*	className={'text-muted-foreground'}*/}
						{/*>*/}
						{/*	Translate*/}
						{/*</Link>*/}
						{/*<Link*/}
						{/*	to="examples"*/}
						{/*	spy={true}*/}
						{/*	smooth={true}*/}
						{/*	duration={500}*/}
						{/*	activeClass={'text-white'}*/}
						{/*	className={'text-muted-foreground'}*/}
						{/*>*/}
						{/*	Examples*/}
						{/*</Link>*/}
					</div>

					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button size="icon">
								<Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
								<Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
								<span className="sr-only">Toggle theme</span>
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align="end">
							<DropdownMenuItem onClick={() => setTheme('light')}>Light</DropdownMenuItem>
							<DropdownMenuItem onClick={() => setTheme('dark')}>Dark</DropdownMenuItem>
							<DropdownMenuItem onClick={() => setTheme('system')}>System</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</nav>
			<Separator className={'mb-10'} />
			<div className={'flex justify-center w-full mb-40'}>
				<div className={'max-w-5xl flex items-center flex-col'}>
					<Image src={Main} alt={''} className={'mx-auto'} />\
					<div className={'translate-y-[-60px] relative bg-primary-foreground rounded-lg'}>
						<h1
							className={
								'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl  text-center text-black dark:text-white '
							}
						>
							Переводчик для настоящих геймеров и пацанов
						</h1>
					</div>
					<Button className={'border-2'}>
						Поехали <MoveDown />
					</Button>
				</div>
			</div>
			<div className={''}>
				<h4 className={'scroll-m-20 text-xl font-semibold tracking-tight'}>Переводчик</h4>
			</div>
		</main>
	)
}
