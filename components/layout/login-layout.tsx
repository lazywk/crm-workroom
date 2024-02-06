import React from 'react'
import { useTranslation } from 'react-i18next'
import Logo from '../elements/logo'
import Image from 'next/image'

interface Props {
    children: React.ReactNode
}

export default function LoginLayout({ children }: Props) {
    const { t } = useTranslation()
    return (
        <div className='container mx-auto py-5'>
            <div className="login-inner flex max-w-[1360px] mx-auto">
                <div className="login-left bg-[#3F8CFF]">
                    <div className="login-logo flex items-center gap-[30px]">
                        <Logo />
                        <p className='m-0 text-[28px] text-[white]'>Woorkroom</p>
                    </div>
                    <div className="login-desc">
                        <p>
                            {t("Your place to work Plan. Create. Control.")}
                        </p>
                    </div>
                    <Image src="/assets/images/backgrounds/login.png" width={500} height={300} alt='login banner' />
                </div>
                <div className="login-right p-5">
                    {children}
                </div>
            </div>

        </div>
    )
}
