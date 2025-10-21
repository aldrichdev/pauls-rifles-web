'use client'

import ClanTag from './components/ClanTag'
import DiscordIcon from './components/svgs/DiscordIcon'
import ContentSection from './components/ContentSection'

const Homepage = () => {
  return (
    <>
      <div className='p-3 lg:px-0 lg:py-3 gap-5 grid lg:grid-cols-[3fr_1fr]'>
        <ContentSection title='Overview'>
          <p className='mt-0'>
            Welcome to the Paul's Rifle Clan website. We are a US-based Call of Duty 1 rifle clan that plays in CoD
            V1.5. Our server features multiple mods which provide an engaging bolt-action rifle experience, including
            AWE, PAM and WRS.
          </p>
          <p>
            If you would like to join{' '}
            <span className='font-bold'>
              <ClanTag />
            </span>
            , click <strong>Join Us</strong> above. Our clan uses traditional US Army ranks where you start as a Private
            and can make your way up to the higher ranks as you play. Follow our server{' '}
            <a href='/rules' className='text-blue-700 dark:text-yellow-500 hover:underline'>
              Rules
            </a>{' '}
            carefully while playing with us.
          </p>
          <p>See you on the battlefield, soldier!</p>
          <p className='font-bold'>
            <ClanTag />
            GA.Paul
          </p>
        </ContentSection>
        <ContentSection title='Join our Discord'>
          <div>
            <p>
              The <ClanTag /> clan primarily communicates via Discord. Click the icon below to join our Discord server.
            </p>
            <a href='https://discord.gg/5nThNyZMjD' target='_blank' className='flex justify-center'>
              <DiscordIcon className='w-[50%] fill-black dark:fill-white' />
            </a>
          </div>
        </ContentSection>
      </div>
      <div className='p-3 lg:px-0 lg:py-3'>
        <ContentSection title='Server Status'>
          <div className='hidden lg:flex lg:justify-center mt-3'>
            <a href='https://www.game-state.com/184.154.158.130:28973/' target='_blank'>
              <img
                src='https://www.game-state.com/184.154.158.130:28973/560x95_FFFFFF_FF9900_000000_000000.png'
                alt='www.Game-State.com'
                className='border-0'
              />
            </a>
          </div>
          <div className='flex justify-center lg:hidden mt-3'>
            <a href='https://www.game-state.com/184.154.158.130:28973/'>
              <img
                src='https://www.game-state.com/184.154.158.130:28973/160x270_FFFFFF_575757_.png'
                alt='www.Game-State.com'
                className='border-0'
              />
            </a>
          </div>
        </ContentSection>
      </div>
      <div className='p-3 lg:px-0 lg:py-3 grid gap-5 lg:grid-cols-[1fr_1fr]'>
        <ContentSection title='Community Events'>
          <p>We have weekly server events on Wednesdays and Fridays at 7 PM CST!</p>
          <p>
            Join us on Wednesdays for{' '}
            <a
              href='https://discord.gg/GCSBGQqhA4?event=1398116210670960711'
              target='_blank'
              className='text-blue-700 dark:text-yellow-500 hover:underline'
            >
              Wa-Wa-Wednesdays
            </a>
            , where we practice rifles-only combat on the Wawa map via 1v1 matches. First to 15 kills wins the match.
          </p>
          <p>
            On Fridays, join us for{' '}
            <a
              href='https://discord.gg/GCSBGQqhA4?event=1398068386067648522'
              target='_blank'
              className='text-blue-700 dark:text-yellow-500 hover:underline'
            >
              Rifles Night
            </a>
            . We may play DM, TDM, S&D, or another gametype.
          </p>
        </ContentSection>
        <div className='hidden lg:block'>
          <ContentSection title='Music Player'>
            <div className='pt-4'>
              <script src='https://elfsightcdn.com/platform.js' async></script>
              <div
                className='elfsight-app-151a3322-8818-41ef-830f-ebf3e0103045'
                data-elfsight-app-lazy
                suppressHydrationWarning={true}
              />
            </div>
          </ContentSection>
        </div>
      </div>
    </>
  )
}

export default Homepage
