import Link from 'next/link'
import ContentSection from './components/ContentSection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Not Found | =PRC= Clan',
  description: "We couldn't find the content you were looking for.",
}

const NotFoundPage = () => {
  return (
    <div className='m-3 mb-0 lg:mx-0 lg:my-3'>
      <ContentSection title='Page Not Found'>
        <h1 className='text-2xl my-3 mt-7 text-red-500 font-bold'>Oops! We dropped the Kar98k.</h1>
        <p>That's a 404. We couldn't find the content you were looking for.</p>
        <Link href='/' className='block text-blue-700 dark:text-yellow-500 hover:underline pb-4'>
          {'< '} Home
        </Link>
      </ContentSection>
    </div>
  )
}

export default NotFoundPage
