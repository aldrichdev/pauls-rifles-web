import type { Metadata } from 'next'
import ContentSection from '../components/ContentSection'

export const metadata: Metadata = {
  title: 'Rules | =PRC= Clan',
  description: 'Rules for the =PRC= clan server, which should be followed carefully.',
}

const RulesPage = () => {
  return (
    <div className='p-3 lg:px-0 lg:py-3'>
      <ContentSection title='Server Rules'>
        <p>Follow these rules carefully whenever you are playing on our rifles server.</p>
        <ul className='flex flex-wrap gap-4 pb-4'>
          <li className='w-full'>
            1️⃣ <strong>No hacking</strong>. This is a permanently-bannable offense and we have very little patience for
            players that choose to do it.
          </li>
          <li className='w-full'>
            2️⃣ <strong>No glitching</strong> if used to obtain a competitive advantage (i.e. scope-running, fast firing,
            S&D menu glitching).
          </li>
          <li className='w-full'>
            3️⃣ <strong>Please speak English</strong> in our server at all times.
          </li>
          <li className='w-full'>
            4️⃣ <strong>No in-game advertising</strong> or linking other servers or websites.
          </li>
          <li className='w-full'>
            5️⃣ <strong>Please respect others</strong> and treat them like you would like to be treated 🙂
          </li>
        </ul>
      </ContentSection>
    </div>
  )
}

export default RulesPage
