import LoginLayout from '@/components/layout/login-layout'
import Input, { Label } from '@/components/ui/input'
import React from 'react'

export default function Login() {
    return (
        <LoginLayout>
            <div className="flex flex-col gap-4">
                <Label label='Position'>
                    <Input placeholder='UI/UX Designer' />
                </Label>
            </div>
        </LoginLayout>
    )
}
