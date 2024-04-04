'use client'

import { Input } from '../elements/Input'
import { Button } from '../elements/Button'
import { useThemeContext } from '../../contexts/ThemeContext'
import { useAccount } from 'wagmi'
import { useState } from 'react'
const currentDate = new Date();

interface IFormData {
    address: `0x${string}`
    name: string
    password: string
    currentDate: string
    alias: string
}

const CreateArtist = (
    {
        title,
        titleHighlight,
        boxClasses = '',
    }:
    {
        title: string,
        titleHighlight?: boolean,
        boxClasses?: string,
    }
) => {
    const { address } = useAccount()
    const { theme } = useThemeContext()
    const [formData, setFormData] = useState<IFormData>({
        address: address || '0x',
        name: '',
        password: '',
        currentDate: currentDate.toLocaleString(),
        alias: ''
      });

    
      const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
      };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        // 
        // Interact with blockchain to save artist
        // 
        console.log(formData);
    }

    return (
        <div >
            <form onSubmit={handleSubmit}>
                <div className={`${boxClasses} relative flex flex-col w-[24rem] 
                    border dark:border-slate-700 border-slate-300 rounded-lg p-6
                    ${theme?.bgForm}`
                }>
                    <h1 className={`ui-h1 ${titleHighlight && 'text-pink-600'}`}>{title}</h1>

                    <Input props={{
                        id: "name", name: "name", placeHolder: "Enter your name", label: "Your name",
                        value: formData.name, onChange: handleChange,
                        classes: { box: `mt-6`, input: `mt-2` }
                    }} />

                    <Input props={{
                        id: "alias", name: "alias", placeHolder: "Enter your alias", label: "Your Alias",
                        value: formData.alias, onChange: handleChange,
                        classes: { box: 'mt-5 relative', input: 'mt-2' }
                    }} />                   

                    <div className="mt-8 relative flex font-normal text-sm gap-4 justify-end">
                        <Button props={{ 
                            extendClasses: theme?.bgBtnSecondary,
                        }}>Create an account</Button>
                        {/* <Button props={{ extendClasses: `${theme?.bgBtnSecondary}` }}>Sign in</Button> */}
                    </div>
                </div>
            </form>
        </div>
    )
}


export { CreateArtist }
