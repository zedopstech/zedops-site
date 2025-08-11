import type { Config } from "tailwindcss";
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
	darkMode: ["class"],
	content: [
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: [
					'Inter Var',
					...defaultTheme.fontFamily.sans
				]
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				backgroundlighter: 'hsl(var(--background-lighter))',
				backgroundlight: 'hsl(var(--background-light))',
				foregroundmuted: 'hsl(var(--evergreen-muted))',
				custombg: 'hsl(var(--custombg))',
				lightmint: 'hsl(var(--lightmint))',
				backgroundsecondary: 'hsl(var(--background-secondary))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				body: 'hsl(var(--body))',
				highlight: 'hsl(var(--highlight))',
				disabled: 'hsl(var(--disabled))',
				shadow: 'hsl(var(--shadow))',
				ink: 'hsl(var(--ink))',
				ghost: 'hsl(var(--ghost))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))',
					'6': 'hsl(var(--chart-6))',
					'7': 'hsl(var(--chart-7))',
					'8': 'hsl(var(--chart-8))',
					'9': 'hsl(var(--chart-9))',
					'10': 'hsl(var(--chart-10))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				grow: {
					'0%, 100%': {
						transform: 'scale(1)',
						opacity: '1'
					},
					'50%': {
						transform: 'scale(1.2)',
						opacity: '0.7'
					}
				},
				'scroll-left': {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-50%)' }
				},
				'pulse-slow': {
					'0%, 100%': { opacity: '0.4' },
					'50%': { opacity: '0.7' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'float-reverse': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(10px)' }
				},
				'pulse-float': {
					'0%': { opacity: '0.4', transform: 'translateY(0)' },
					'50%': { opacity: '0.7', transform: 'translateY(-10px)' },
					'100%': { opacity: '0.4', transform: 'translateY(0)' }
				},
				'pulse-float-reverse': {
					'0%': { opacity: '0.4', transform: 'translateY(0)' },
					'50%': { opacity: '0.7', transform: 'translateY(10px)' },
					'100%': { opacity: '0.4', transform: 'translateY(0)' }
				},
				'blob-motion-1': {
					'0%': { transform: 'translate(0px, 0px) scale(1)' },
					'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
					'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
					'100%': { transform: 'translate(0px, 0px) scale(1)' }
				},
				'blob-motion-2': {
					'0%': { transform: 'translate(0px, 0px) scale(1)' },
					'33%': { transform: 'translate(-40px, 20px) scale(1.2)' },
					'66%': { transform: 'translate(20px, 40px) scale(0.8)' },
					'100%': { transform: 'translate(0px, 0px) scale(1)' }
				},
				'blob-motion-3': {
					'0%': { transform: 'translate(-50%, -50%) scale(1)', opacity: '0.5' },
					'25%': { transform: 'translate(-52%, -48%) scale(1.1)', opacity: '0.6' },
					'50%': { transform: 'translate(-48%, -52%) scale(0.9)', opacity: '0.7' },
					'75%': { transform: 'translate(-46%, -50%) scale(1.2)', opacity: '0.5' },
					'100%': { transform: 'translate(-50%, -50%) scale(1)', opacity: '0.5' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				grow: 'grow 1.5s infinite ease-in-out',
				'scroll-left': 'scroll-left 30s linear infinite',
				'pulse-slow': 'pulse-slow 8s ease-in-out infinite',
				'float': 'float 6s ease-in-out infinite',
				'float-reverse': 'float-reverse 7s ease-in-out infinite',
				'pulse-float': 'pulse-float 8s ease-in-out infinite',
				'pulse-float-reverse': 'pulse-float-reverse 9s ease-in-out infinite',
				'blob-motion-1': 'blob-motion-1 20s ease-in-out infinite',
				'blob-motion-2': 'blob-motion-2 25s ease-in-out infinite',
				'blob-motion-3': 'blob-motion-3 15s ease-in-out infinite'
			}
		}
	},
	// eslint-disable-next-line @typescript-eslint/no-require-imports
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
