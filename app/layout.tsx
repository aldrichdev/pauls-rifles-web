import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='w-[1000px] m-auto bg-outer-dark'>
        <main className='bg-inner-dark pt-2'>
          <header className=' ml-3 mr-3'>
            <div className='flex items-center justify-center mh-[350px] relative bg-[url(/images/banner.jpg)] bg-center w-[calc(100% - 32px)] mw-[980px] h-[232px] rounded-md border-4' />
            <ul className='flex w-full text-center justify-between mt-3 text-white bg-neutral-900'>
              <li className='p-2 w-full bg-linear-to-b from-neutral-600 to-outer-dark rounded-l-md'>
                <a href='/'>Home</a>
              </li>
              <li className='p-2 w-full bg-linear-to-b from-neutral-600 to-outer-dark'>
                <a href='/news'>News</a>
              </li>
              <li className='p-2 w-full bg-linear-to-b from-neutral-600 to-outer-dark'>
                <a href='/roster'>Roster</a>
              </li>
              <li className='p-2 w-full bg-linear-to-b from-neutral-600 to-outer-dark rounded-r-md'>
                <a href='/events'>Events</a>
              </li>
            </ul>
          </header>
          {children}
        </main>
      </body>
    </html>
  )
}
