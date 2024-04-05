import React from 'react'
import { CreateProjectForm } from '../forms/CreateProjectForm'

const CreateProject = () => {
  return (
    <div className='p-2'>
        <h1 className='text-2xl font-bold'>Artist workspace</h1>
        
        <div className='mt-4'>
          <CreateProjectForm 
            title="Create project" 
            description='By creating a project you are able ask for ' />
        </div>
    </div>
  )
}

export default CreateProject