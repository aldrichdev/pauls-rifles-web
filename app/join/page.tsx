'use client'

import { useState } from 'react'
import ClanTag from '../components/ClanTag'
import ContentSection from '../components/ContentSection'
import TextLink from '../components/TextLink'

const JoinPage = () => {
  const [hasReadRules, setHasReadRules] = useState(false)
  const [isSerious, setIsSerious] = useState(false)
  const [isNotInClan, setIsNotInClan] = useState(false)

  console.log('hasReadRules', hasReadRules)

  return (
    <div className='p-3 lg:px-0 lg:py-3'>
      <ContentSection title='Join Us'>
        <p>
          Thank you for your interest in joining the <ClanTag /> clan. So, you think you have what it takes to be a
          member here? Before we begin, please confirm the following are true by checking each box:
        </p>
        <div className='flex flex-wrap mb-4'>
          <div className='w-full flex items-center gap-2'>
            <input
              id='hasReadRules'
              type='checkbox'
              className='w-4 h-4 accent-blue-700 dark:accent-yellow-500'
              onChange={() => setHasReadRules(!hasReadRules)}
            />
            <label htmlFor='hasReadRules'>
              I have read the{' '}
              <TextLink href='/rules' target='_blank'>
                Rules
              </TextLink>
              .
            </label>
          </div>
          <div className='w-full flex items-center gap-2'>
            <input
              id='isSerious'
              type='checkbox'
              className='w-4 h-4 accent-blue-700 dark:accent-yellow-500'
              onChange={() => setIsSerious(!isSerious)}
            />
            <label htmlFor='isSerious'>
              I am serious about joining the <ClanTag /> clan.
            </label>
          </div>
          <div className='w-full flex items-center gap-2'>
            <input
              id='isNotInClan'
              type='checkbox'
              className='w-4 h-4 accent-blue-700 dark:accent-yellow-500'
              onChange={() => setIsNotInClan(!isNotInClan)}
            />
            <label htmlFor='isNotInClan'>I am not currently in another clan in CoD1 V1.5.</label>
          </div>
        </div>
        <div className={hasReadRules && isSerious && isNotInClan ? 'block animate-fade' : 'hidden'}>
          <h2 className='text-2xl'>How to Apply</h2>
          <p>
            If you are ready to apply, please visit the{' '}
            <TextLink href='https://paulsrifleclan.boards.net/thread/2/application-template' target='_blank'>
              Application Template
            </TextLink>{' '}
            post of our forums. You will need to create an account on our forums first. Follow the instructions in the
            above linked post to create your application.
          </p>
          <h2 className='text-2xl'>What To Expect</h2>
          <p>
            Once you create your application thread, an officer will review it for completeness and validity. If your
            application looks good, the officer will schedule a tryout with you. This will usually occur on the{' '}
            <ClanTag /> server, and may include, but would not be limited to, Wawa 1v1, S&D matches, or a match with
            some other gametype on stock maps. In your tryout, play as well as you can, and try to get a very good
            score. Additionally, you should be wearing <ClanTag />
            <strong>Rct.</strong> tags during the tryout.
          </p>
          <p>
            Depending on your skill level, there may need to be multiple tryout sessions. If you perform well in your
            tryout(s), you will be accepted into the clan and promoted to Private (<strong>Pvt</strong>). Wear your clan
            tag with pride when playing on our server and others!
          </p>
        </div>
      </ContentSection>
    </div>
  )
}

export default JoinPage
