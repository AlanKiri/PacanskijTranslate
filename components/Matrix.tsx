'use client'
import React, { useState } from 'react'
import { useWindowSize } from 'usehooks-ts'
import { motion } from 'framer-motion'
import { cn, getRandomIn } from '../lib/utils'
import { nicknames } from '../lib/data'

const Matrix = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((props, ref) => {
	const { width, height } = useWindowSize()
	const textHeight = 24
	const lines = ~~(height / textHeight)

	return (
		<div
			{...props}
			className={cn('flex flex-col overflow-hidden blur-md select-none z-[-1]', props.className)}
			ref={ref}
		>
			{[...Array(lines)].map((value, index) => {
				const nicks = nicknames.sort(() => Math.random() - 0.5)
				const isOdd = index % 2 !== 0
				console.log({ length: nicks.length, isOdd, index })
				return (
					<motion.div
						className="flex gap-2 whitespace-nowrap"
						key={index}
						initial={{
							transform: isOdd
								? `translateX(${getRandomIn(-20, 0)}%)`
								: `translateX(${getRandomIn(-20, -40)}%)`,
						}}
						animate={{ transform: isOdd ? `translateX(-40%)` : `translateX(0%)` }}
						transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
					>
						{nicks.map((nick, index) => {
							const duration = getRandomIn(5, 20)
							const blur = getRandomIn(1, 4)
							return (
								<motion.p
									key={index}
									initial={{ opacity: 1 / duration }}
									animate={{ opacity: 0.5 }}
									transition={{ duration, ease: 'linear' }}
									className={`text-white animate-fade animate-once`}
								>
									{nick}
								</motion.p>
							)
						})}
					</motion.div>
				)
			})}
		</div>
	)
})

Matrix.displayName = 'Matrix'

export default Matrix
