'use client'

import { ReactNode, useEffect, useState } from 'react'
import { LuSun, LuMoon } from 'react-icons/lu'
import '../globals.css'
import { useTheme } from 'next-themes'
import TextLink from './TextLink'

const AppWrapper = ({ children }: { children: ReactNode }) => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div
      id='root'
      className={`min-h-[100vh] bg-[url(/images/bg2.jpg)] bg-zinc-100 dark:bg-outer-dark ${theme === 'dark' ? 'dark' : ''}`}
    >
      <div
        id='utility-bar'
        className='absolute z-1 right-0 flex gap-2 justify-center` h-10 bg-zinc-100 dark:bg-outer-dark'
      >
        <div className='flex gap-2'>
          <button
            onClick={() => setTheme('light')}
            className='w-full flex justify-center items-center p-2 px-3 bg-zinc-100 hover:cursor-pointer hover:bg-zinc-200 text-black dark:bg-outer-dark dark:hover:bg-neutral-500 dark:text-white'
          >
            <LuSun size='16px' />
          </button>
          <button
            onClick={() => setTheme('dark')}
            className='w-full flex justify-center items-center p-2 px-3 bg-zinc-100 hover:cursor-pointer hover:bg-zinc-200 text-black dark:bg-outer-dark dark:hover:bg-neutral-500 dark:text-white'
          >
            <LuMoon size='16px' />
          </button>
        </div>
      </div>
      <main className='w-full lg:w-[1000px] m-auto p-0 lg:p-3 lg:pb-0'>
        <header>
          <a href='/'>
            <div className='flex items-center justify-center relative bg-[url(/images/mobile-banner.jpg)] bg-no-repeat bg-cover lg:bg-[url(/images/banner.jpg)] bg-center w-full lg:w-[calc(100% - 32px)] mw-[980px] h-[300px] lg:h-[232px] rounded-none lg:rounded-md border-0 lg:border-1 border-zinc-500 dark:border-neutral-900' />
          </a>
          <ul className='flex w-full text-center justify-between lg:mt-3 text-black dark:text-white bg-zinc-500 dark:bg-neutral-900 lg:border-1 border-zinc-500 dark:border-neutral-900 lg:dark:rounded-md font-opensans'>
            <li className='p-2 py-4 lg:py-2 w-full bg-linear-to-b from-zinc-100 to-neutral-400 dark:from-neutral-800 dark:to-outer-dark '>
              <a className='hover:underline' href='/'>
                Home
              </a>
            </li>
            <li className='p-2 py-4 lg:py-2 w-full bg-linear-to-b from-zinc-100 to-neutral-400 dark:from-neutral-800 dark:to-outer-dark'>
              <a className='hover:underline' href='/rules'>
                Rules
              </a>
            </li>
            <li className='p-2 py-4 lg:py-2 w-full bg-linear-to-b from-zinc-100 to-neutral-400 dark:from-neutral-800 dark:to-outer-dark'>
              <a className='hover:underline' href='/roster'>
                Roster
              </a>
            </li>
            <li className='p-2 py-4 lg:py-2 w-full bg-linear-to-b from-zinc-100 to-neutral-400 dark:from-neutral-800 dark:to-outer-dark'>
              <a className='hover:underline' href='https://paulsrifleclan.boards.net/' target='_blank'>
                Forums
              </a>
            </li>
            <li className='p-2 py-4 lg:py-2 w-full bg-linear-to-b from-zinc-100 to-neutral-400 dark:from-neutral-800 dark:to-outer-dark'>
              <a className='hover:underline' href='/join'>
                Join Us
              </a>
            </li>
          </ul>
        </header>
        {children}
        <footer className='p-3 text-sm border-1 border-zinc-500 dark:border-neutral-800 bg-zinc-100 dark:bg-inner-dark rounded-t-sm shadow-xl text-neutral-800 dark:text-neutral-300'>
          © Paul's Rifle Clan {new Date().getFullYear()}. Site made by Paul. For enquiries contact{' '}
          <TextLink href='mailto:paulsrifleclan@gmail.com'>paulsrifleclan@gmail.com</TextLink>.
        </footer>
      </main>
    </div>
  )
}

export default AppWrapper
