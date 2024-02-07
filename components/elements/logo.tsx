import Image from 'next/image'
import React from 'react'

export default function Logo() {
    return <Image src={"/assets/images/logo/logo-default.png"} width={50} height={50} alt='this is site logo' />
}
