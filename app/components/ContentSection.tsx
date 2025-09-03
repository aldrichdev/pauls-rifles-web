'use client'

import { ReactNode } from 'react'

interface ContentSectionProps {
  title: string
  children: string | ReactNode
}

const ContentSection = ({ title, children }: ContentSectionProps) => {
  return (
    <section className='border-1 border-zinc-500 dark:border-neutral-800 bg-zinc-100 dark:bg-inner-dark rounded-sm shadow-xl text-black dark:text-white'>
      <h2 className='p-3 bg-linear-to-b from-zinc-100 to-neutral-400 dark:from-neutral-800 dark:to-outer-dark font-bold'>
        {title}
      </h2>
      <div className='p-3 pt-0'>{children}</div>
    </section>
  )
}

export default ContentSection
