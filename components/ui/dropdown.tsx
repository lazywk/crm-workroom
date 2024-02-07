import { useEffect, useState } from "react"

{/* <Dropdown title='My dropdown' options={[{ label: 'option 1', value: '1' }, { label: 'option 2', value: '2' }]} />
                <UsersDropdown
                    defaultValue={{ label: 'option 1', value: '1', icon: 'https://picsum.photos/id/237/50' }}
                    options={[
                        { label: 'option 1', value: '1', icon: '' },
                        { label: 'option 2', value: '2', icon: '' }
                    ]} /> */}


interface DropdownProps {
    options: {
        label: any,
        value: any
    }[],
    title: string,
    defaultValue?: string | undefined,
    onChange?: ((value: string | null | undefined) => void) | undefined,
    className?: string
}

interface UserDropdownItemProps {
    label: string,
    value: string,
    icon?: string
}

interface UserDropdownProps {
    options: UserDropdownItemProps[],
    defaultValue: UserDropdownItemProps,
    onChange?: ((value: UserDropdownItemProps | null | undefined) => void) | undefined,
    className?: string
}




export default function Dropdown({ title, defaultValue, options, onChange, className }: DropdownProps) {
    const [value, setValue] = useState<string | undefined>()
    const [showTitle, setShowTitle] = useState<string>()
    const [open, setOpen] = useState<boolean>(false)

    const handleSelect = (selectedVal: string | undefined) => {
        const item = options.find(el => el.value === selectedVal)
        if (selectedVal) {
            setValue(item?.value)
            setShowTitle(item?.label)
            setOpen(false)
            onChange?.(value)
        } else {
            setValue(defaultValue)
            setShowTitle(title)
        }
    }



    useEffect(() => {
        handleSelect(defaultValue)
    }, [defaultValue])

    return (
        <div className={`dropdown ${open ? "dropdown-open" : ""}`}>
            <span className="dropdown-title" onClick={() => setOpen(!open)}>{showTitle}</span>
            <div className="dropdown-list">
                {
                    options.map(el => <span key={el.value} className="dropdown-item" onClick={() => handleSelect(el.value)}>{el.label}</span>)
                }
            </div>
        </div>
    )
}

export function UsersDropdown({ defaultValue, options, onChange, className }: UserDropdownProps) {
    const [value, setValue] = useState<UserDropdownItemProps>(defaultValue)
    const [open, setOpen] = useState<boolean>(false)

    const handleSelect = (selectedVal: UserDropdownItemProps) => {
        if (selectedVal) {
            setOpen(false)
            onChange?.(selectedVal)
        } else {
            setValue(defaultValue)
        }
    }


    return (
        <div className={`${className} user-dropdown dropdown ${open ? "dropdown-open" : ""}`}>
            <span className="user-dropdown-title dropdown-title" onClick={() => setOpen(!open)}>
                <img src={`https://picsum.photos/id/237/50`} width={35} height={35} alt="profile avatar" />
                <span>{value?.label}</span>
            </span>
            <div className="user-dropdown-list dropdown-list">
                {
                    options.map(el => (
                        <span key={el.value} className="user-dropdown-item dropdown-item" onClick={() => handleSelect(el)}>{el.label}</span>
                    ))
                }
            </div>
        </div>
    )
}
