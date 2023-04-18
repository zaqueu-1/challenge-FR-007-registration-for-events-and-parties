import React, { useState } from 'react'

function Form({handleSubmit, register, errors, unregister, reset}) {

    const [type, setType] = useState('')
    const [where, setWhere] = useState('')
    
    const handleType = (type) => (type === 'Outro' ? (setType('Outro'), register("otherEvent")) : (setType(type), unregister("otherEvent")))
    const handleWhere = (where) => (where === 'Outro' ? (setWhere('Outro'), register("otherWhere")) : (setWhere(where), unregister("otherWhere")))

    const [values, setValues] = useState([])

    const onSubmit = (data) => {
        setValues(data)
        reset()
    }

    return (
        <div className='form-container'>
            <h1>Para melhor atendermos seu pedido, preencha o formulário a seguir:</h1>

            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="type">Nome do Evento:</label>
                <input type='text' {...register("name", { required: true })} />

                <label htmlFor="type">Tema do Evento:</label>
                <input type='text' {...register("theme", { required: false })} />

                <label htmlFor="type">Tipo do Evento:</label>
                <select {...register("event")} onChange={(e) => handleType(e.target.value)} >
                    <option value="Reunião de Empresa/Workshop">Reunião de Empresa/Workshop</option>
                    <option value="Coffee and Meet">Coffee and Meet</option>
                    <option value="Aniversário">Aniversário</option>
                    <option value="Outro">Outro</option>
                </select>

                {type === 'Aniversário' && (
                    <>
                        <label htmlFor="type">Idade do Aniversariante:</label>
                        <input type='text' {...register("age", { required: true })} />

                        <label htmlFor="type">Gênero do Aniversariante:</label>
                        <input type='text' {...register("gender", { required: true })} />
                    </>
                )}

                {type === 'Outro' && (
                    <>
                        <label htmlFor="type">Quel será o tipo do evento?</label>
                        <input type='text' {...register("otherEvent", { required: true })} />
                    </>
                )}

                <label htmlFor="type">Mínimo de Convidados:</label>
                <input type='number' {...register("minPeople", { required: true })} />

                <label htmlFor="type">Máximo de Convidados:</label>
                <input type='number' {...register("maxPeople", { required: true })} />

                <label htmlFor="type">E-mail do Organizador:</label>
                <input type='text' {...register("email", { required: true })} />

                <label htmlFor="type">CPF do Organizador:</label>
                <input type='text' {...register("cpf", { required: true })} />

                <label htmlFor="type">Onde conheceu nossa empresa?:</label>
                <select {...register("where")} onChange={(e) => handleWhere(e.target.value)} >
                    <option value="Facebook">Facebook</option>
                    <option value="Instagram">Instagram</option>
                    <option value="Anúncio do Google/Youtube">Anúncio do Google/Youtube</option>
                    <option value="Outro">Outro</option>
                </select>

                {where === 'Outro' && (
                    <>
                        <label htmlFor="type">Por onde nos conheceu?</label>
                        <input type='text' {...register("otherWhere", { required: true })} />
                    </>
                )}

                <button type="submit">Enviar</button>
                    <p>{values?.name}</p>
            </form> 
        </div>
  )
}

export default Form
