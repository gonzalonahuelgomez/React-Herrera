import React from 'react'
import { useState, useEffect } from 'react'
import { Message } from './Message'

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'wappY',
        email: 'gonza@google.com'
    })

    const { username, email } = formState 

    const onInputChange = ({ target }) => {
        const { name, value } = target
        setFormState({
            ...formState,
            [ name ]: value
        })
    }

    useEffect(() => {
      console.log('called')
    }, [])
    

  return (
    <>
        <h1>Formulario Simple</h1>
        <hr />

        <input 
            type='text'
            placeholder={"Ingrese su nombre"}
            className='form-control'
            name='username'
            value={ username }
            onChange={ onInputChange }
        />
        <input 
            type='email'
            placeholder={"Ingrese su email"}
            className='form-control mt-2'
            name='email'
            value={ email }
            onChange={ onInputChange }
        />
        {
            username === "wappY" && <Message/>
        }
    </>
  )
}
