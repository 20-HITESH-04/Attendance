import React from 'react'
import Image from 'next/image'

function Header() {
  return (
    <div className='p-5 shadow-sm border flex justify-between'>
      <div>

      </div>
      <div>
        <Image src={'/user.svg'} width={35} height={35} alt='User' className='rounded-full'/>
      </div>
    </div>
  )
}

export default Header