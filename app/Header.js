import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='bg-slate-900'>
        <div className="container mx-auto py-4 flex justify-between items-center">
            <div className="logo">
                <Link href='/'>Rownok Media</Link>
            </div>
            <div className="flex justify-between gap-10">
                <Link href='/about'>About
                </Link>
                <Link href='/about/team'>Our Team
                </Link>
                <Link href='/code/repos'>Code
                </Link>
            </div>
        </div>
    </header>
  )
}

export default Header