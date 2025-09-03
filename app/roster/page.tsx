import type { Metadata } from 'next'
import ContentSection from '../components/ContentSection'
import ClanTag from '../components/ClanTag'
import TextLink from '../components/TextLink'
import { clanMembers } from './data'

export const metadata: Metadata = {
  title: 'Roster | =PRC= Clan',
  description: 'View the members of the =PRC= clan.',
}

const RosterPage = () => {
  const officers = clanMembers.filter(member => member.isOfficer)
  const enlisteds = clanMembers.filter(member => !member.isOfficer)

  return (
    <div className='p-3 lg:px-0 lg:py-3'>
      <ContentSection title='Roster'>
        <p>
          Below are the currently enlisted members of the <ClanTag /> clan. We use{' '}
          <TextLink href='https://www.defense.gov/resources/insignia/' target='_blank'>
            US Army
          </TextLink>{' '}
          ranks in this clan. To earn a higher rank, you need to play actively and also submit screenshots with a
          positive score. Do you best out there and make us proud, soldier!
        </p>
        <h1 className='text-3xl font-bold text-center'>Officers</h1>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 pt-4 pb-8'>
          {officers.map(officer => (
            <div key={`${officer.name}-${officer.photo}`} className='flex flex-wrap justify-center text-center'>
              <img src={officer.photo} className='w-[100px]' />
              <span className='w-full font-bold mt-3'>{officer.name}</span>
              <span className='w-full'>{officer.rank}</span>
            </div>
          ))}
        </div>
        <h1 className='text-3xl font-bold text-center'>Enlisted</h1>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 pt-4 pb-8'>
          {enlisteds.map(member => (
            <div key={`${member.name}-${member.photo}`} className='flex flex-wrap justify-center text-center'>
              <img src={member.photo} className='w-[100px]' />
              <span className='w-full font-bold mt-3'>{member.name}</span>
              <span className='w-full'>{member.rank}</span>
            </div>
          ))}
          <div className='flex flex-wrap justify-center text-center'>
            <img src='/images/avatars/you.png' className='w-[100px]' />
            <span className='w-full font-bold mt-3'>You?</span>
            <TextLink href='/join' className='w-full'>
              Join Us
            </TextLink>
          </div>
        </div>
      </ContentSection>
    </div>
  )
}

export default RosterPage
