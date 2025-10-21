'use client'

import { ReactNode, useEffect, useState } from 'react'
import { LuSun, LuMoon } from 'react-icons/lu'
import '../globals.css'
import { useTheme } from 'next-themes'
import TextLink from './TextLink'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { IoCloseCircle, IoMenu } from 'react-icons/io5'
import { Dialog } from '@base-ui-components/react/dialog'
import { headerNavigationLinks } from '../consts/headerNavigationLinks'

const AppWrapper = ({ children }: { children: ReactNode }) => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  const isCurrentPage = (href: string) => {
    if (typeof window === 'undefined') return false
    return window.location.pathname === href
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // This fixes hydration mismatch issues with next-themes
    return null
  }

  return (
    <div
      id='root'
      className={`isolate min-h-[100vh] bg-[url(/images/bg.png)] bg-zinc-100 dark:bg-outer-dark ${theme === 'dark' ? 'dark' : ''}`}
    >
      <div
        id='left-utility-bar'
        className='absolute z-1 left-0 flex gap-2 justify-center h-10 bg-zinc-100 dark:bg-outer-dark'
      >
        <div className='flex lg:hidden hamburger-menu'>
          <Dialog.Root>
            <Dialog.Trigger
              className='w-full flex justify-center items-center p-2 px-3 bg-zinc-100 hover:cursor-pointer
              hover:bg-zinc-200 text-black dark:bg-outer-dark dark:hover:bg-neutral-500 dark:text-white active:scale-95'
            >
              <IoMenu size='16px' />
            </Dialog.Trigger>
            <Dialog.Portal>
              <div className={`${theme === 'dark' ? 'dark' : ''}`}>
                <Dialog.Backdrop
                  className='fixed inset-0 min-h-dvh bg-black opacity-20 transition-all duration-150 
                  data-[ending-style]:opacity-0 data-[starting-style]:opacity-0 dark:opacity-70 
                  supports-[-webkit-touch-callout:none]:absolute'
                />
                <Dialog.Popup
                  className='fixed w-full h-full top-0 left-0 p-6 bg-zinc-100 dark:bg-inner-dark text-black dark:text-white
                  outline outline-1 outline-gray-200 transition-all duration-150 data-[ending-style]:scale-90 font-exo2
                  data-[ending-style]:opacity-0 data-[starting-style]:scale-90 data-[starting-style]:opacity-0 dark:outline-gray-300'
                >
                  <Dialog.Close className='flex w-full justify-end'>
                    <IoCloseCircle size='20px' />
                  </Dialog.Close>
                  <ul className='flex flex-wrap w-full text-center justify-between mt-3'>
                    {headerNavigationLinks.map(link => (
                      <li key={link.title} className='p-3 w-full'>
                        <a
                          className={`active:underline hover:underline ${isCurrentPage(link.href) ? 'text-red-600' : ''} 
                            ${link.external ? 'flex items-center gap-[6px] justify-center' : ''}`}
                          href={link.href}
                          target={link.external ? '_blank' : '_self'}
                        >
                          {link.title} {link.external && <FaExternalLinkAlt className='w-[14px] h-[14px]' />}
                        </a>
                      </li>
                    ))}
                  </ul>
                </Dialog.Popup>
              </div>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
      <div
        id='utility-bar'
        className='absolute z-1 right-0 flex gap-2 justify-center h-10 bg-zinc-100 dark:bg-outer-dark'
      >
        <div className='flex gap-2'>
          <button
            onClick={() => setTheme('light')}
            className='w-full flex justify-center items-center p-2 px-3 bg-zinc-100 hover:cursor-pointer hover:bg-zinc-200 
              text-black dark:bg-outer-dark dark:hover:bg-neutral-500 dark:text-white active:scale-90'
          >
            <LuSun size='16px' />
          </button>
          <button
            onClick={() => setTheme('dark')}
            className='w-full flex justify-center items-center p-2 px-3 bg-zinc-100 hover:cursor-pointer hover:bg-zinc-200 
              text-black dark:bg-outer-dark dark:hover:bg-neutral-500 dark:text-white active:scale-90'
          >
            <LuMoon size='16px' />
          </button>
        </div>
      </div>
      <main className='w-full lg:w-[1000px] m-auto p-0 lg:p-3 lg:pb-0'>
        <header>
          <a href='/'>
            <div
              className='flex items-center justify-center relative bg-[url(/images/mobile-banner.jpg)] 
              bg-no-repeat bg-cover lg:bg-[url(/images/banner.jpg)] bg-center w-full lg:w-[calc(100% - 32px)] 
              mw-[980px] h-[232px] rounded-none lg:rounded-md border-b lg:border border-zinc-500 
              dark:border-neutral-900'
            />
          </a>
          <ul
            className='hidden lg:flex w-full text-center font-exo2 justify-between mt-3 text-black dark:text-white 
            bg-zinc-500 dark:bg-neutral-900 rounded-md border border-zinc-500 dark:border-neutral-900'
          >
            {headerNavigationLinks.map(link => (
              <li
                key={link.title}
                className='p-2 w-full bg-linear-to-b from-zinc-100 to-neutral-400 dark:from-neutral-800 dark:to-outer-dark'
              >
                <a
                  className={`active:underline hover:underline ${isCurrentPage(link.href) ? 'text-red-600' : ''}
                     ${link.external ? 'flex items-center gap-[6px] justify-center' : ''}`}
                  href={link.href}
                  target={link.external ? '_blank' : '_self'}
                >
                  {link.title} {link.external && <FaExternalLinkAlt className='w-[14px] h-[14px]' />}
                </a>
              </li>
            ))}
          </ul>
        </header>
        {children}
        <footer
          className='p-3 text-sm border-y-1 lg:border border-zinc-500 dark:border-neutral-800 bg-zinc-100 dark:bg-inner-dark 
          lg:rounded-t-sm shadow-xl text-neutral-800 dark:text-neutral-300'
        >
          © Paul's Rifle Clan {new Date().getFullYear()}. Site made by Paul. For enquiries contact{' '}
          <TextLink href='mailto:paulsrifleclan@gmail.com'>paulsrifleclan@gmail.com</TextLink>.
        </footer>
      </main>
    </div>
  )
}

export default AppWrapper
