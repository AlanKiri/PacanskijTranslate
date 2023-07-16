'use client'
import { Link } from 'react-scroll'
import { Separator } from '@/components/ui/separator'
import Main from '../public/main.png'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Moon, MoveDown, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Textarea } from '@/components/ui/textarea'
import { useImmer } from 'use-immer'
import { convertCyrillicToLatin } from '@/lib/utils'
import { useEffect } from 'react'

export default function Home() {
	const { setTheme } = useTheme()

	const [value, setValue] = useImmer('')
	const [result, setResult] = useImmer<string | null>('')

	const handleChangeValue = (value: string) => {
		setValue(value)
		setResult(convertCyrillicToLatin(value))
	}

	useEffect(() => {
		console.log({ result })
	}, [result])

	return (
		<main className="min-w-screen min-h-screen flex flex-col items-center gap-10">
			<nav className={'flex justify-between max-w-5xl w-full py-2 border-b-[1px]'}>
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
			</nav>
			<div className="flex max-w-5xl w-full gap-5">
				<div className="flex justify-center items-center flex-[0.5]">
					<Image src={Main} alt={''} className={'mx-auto'} />
				</div>
				<div className="flex flex-col gap-5 flex-[0.5] ">
					<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
						Переводчик для настоящих геймеров и пацанов
					</h1>
					<h4 className="scroll-m-20 text-xl tracking-tight h-full">
						Помнишь те прекрасные времена когда после смены на заправке заходил на свой любимый сервер в
						каэсочке и ебашил с своим фирменным ником NAGIBATOR007? Появялось желание вернуть ту
						уникальность твоего никнейма как в старые времена? Тогда этот сайт твой лучший друг!
					</h4>
					<Button className={'border-2 mt-auto'}>Поехали</Button>
				</div>
			</div>
			<Separator className={'max-w-5xl'} />

			<div className={'flex gap-5 max-w-5xl w-full'}>
				<Textarea
					placeholder={'Пиши сюда'}
					className="w-full"
					value={value}
					onChange={event => handleChangeValue(event.target.value)}
				/>
				<Textarea
					placeholder={'Получай тут'}
					className="w-full"
					value={result !== null ? result : 'Error!'}
					readOnly
				/>
			</div>
		</main>
	)
}
