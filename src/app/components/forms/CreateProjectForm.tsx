'use client'

import { Input } from '../elements/Input'
import { Button } from '../elements/Button'
import { useThemeContext } from '../../contexts/ThemeContext'
import { useAccount } from 'wagmi'
import { useState } from 'react'
const currentDate = new Date();

interface IFormData {
    address: `0x${string}`
    projectName: string
    currentDate: string
}

const CreateProjectForm = (
    {
        title,
        description,
        titleHighlight,
        boxClasses = '',
    }:
    {
        title: string,
        description?: string,
        titleHighlight?: boolean,
        boxClasses?: string,
    }
) => {
    const { address } = useAccount()
    const { theme } = useThemeContext()
    const [formData, setFormData] = useState<IFormData>({
        address: address || '0x',
        projectName: '',
        currentDate: currentDate.toLocaleString(),
      });

    
      const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        console.log(formData)
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
                    <h1 className={`font-semibold ${titleHighlight && 'text-pink-600'}`}>{title}</h1>
                    {description && <p className='text-sm mt-3'>{description}</p>}
                    
                    <Input props={{
                        id: "projectName", name: "projectName", placeHolder: "Enter a project name", label: "Project name",
                        value: formData.projectName, onChange: handleChange, required: true,
                        classes: { box: `mt-6`, input: `mt-2` }
                    }} />


                    <div className="mt-8 relative flex font-normal text-sm gap-4 justify-end">
                        <Button props={{ 
                            extendClasses: theme?.bgBtnSecondary,
                        }}>Save</Button>
                    </div>
                </div>
            </form>
        </div>
    )
}


export { CreateProjectForm }
