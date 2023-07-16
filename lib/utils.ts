import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { letterDictionary } from '@/lib/data'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export const getRandomIn = (min: number, max: number) => {
	min = Math.ceil(min)
	max = Math.floor(max)
	return Math.floor(Math.random() * (max - min + 1)) + min
}

export const convertCyrillicToLatin = (text: string) => {
	let convertedText = ''
	try {
		for (let i = 0; i < text.length; i++) {
			const char = text[i]
			const convertedChar = letterDictionary[char] || char
			convertedText += convertedChar
		}
	} catch (error) {
		console.log({ error })
		return null
	}

	return convertedText
}
