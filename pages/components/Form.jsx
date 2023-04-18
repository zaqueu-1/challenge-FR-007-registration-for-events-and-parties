import React, { useState } from 'react'
import Thankyou from './Thankyou'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { schema, schemaBase } from "../../schemas/yup"

function Form() {

    const {
        register,
        unregister,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm({resolver: yupResolver(schema)})

    const [page, setPage] = useState(1)

    const handlePage = () => {
        setPage(2)
    }

    const [type, setType] = useState('')
    const [where, setWhere] = useState('')
    
    const handleType = (type) => (type === 'Outro' ? (setType('Outro'), register("otherEvent")) : (setType(type), unregister("otherEvent")))
    const handleWhere = (where) => (where === 'Outro' ? (setWhere('Outro'), register("otherWhere")) : (setWhere(where), unregister("otherWhere")))

    const [values, setValues] = useState([])

    const onSubmit = (data) => {
        setValues(data)
        handlePage()
    } 

    return (
        <div className='form-container'>
        {page === 1 ? (
            <>
            <h1><span id='jcd'>JCD</span><span id='eventos'>Eventos</span></h1>
            <h2>Para melhor atendermos seu pedido, preencha o formulário a seguir:</h2>

            <form className="form" onSubmit={handleSubmit(onSubmit)}>

                <div className="item">
                    <label htmlFor="type">Nome do Evento:</label>
                    <input type='text' {...register("name", { required: true })} />
                    <span>{errors?.name?.message}</span>
                </div>

                <div className="item">
                    <label htmlFor="type">Tema do Evento:</label>
                    <input type='text' {...register("theme", { required: false })} />
                </div>

                <div className="item">
                    <label htmlFor="type">Tipo do Evento:</label>
                    <select {...register("event")} onChange={(e) => handleType(e.target.value)} >
                        <option value="Reunião de Empresa/Workshop">Reunião de Empresa/Workshop</option>
                        <option value="Coffee and Meet">Coffee and Meet</option>
                        <option value="Aniversário">Aniversário</option>
                        <option value="Outro">Outro</option>
                    </select>
                </div>

                    {type === 'Aniversário' && (
                        <>
                            <div className="item">
                                <label htmlFor="type">Idade do Aniversariante:</label>
                                <input type='text' {...register("age", { required: true })} />
                                <span>{errors?.age?.message}</span>
                            </div>

                            <div className="item">
                                <label htmlFor="type">Gênero do Aniversariante:</label>
                                <input type='text' {...register("gender", { required: true })} />
                                <span>{errors?.gender?.message}</span>
                            </div>
                        </>
                    )}

                    {type === 'Outro' && (
                        <div className="item">
                            <label htmlFor="type">Qual será o tipo do evento?</label>
                            <input type='text' {...register("otherEvent", { required: true })} />
                        </div>
                    )}

                <div className="item">
                    <label htmlFor="type">Mínimo de Convidados:</label>
                    <input type='number' {...register("minPeople", { required: true })} />
                    <span>{errors?.minPeople?.message}</span>
                </div>

                <div className="item">
                    <label htmlFor="type">Máximo de Convidados:</label>
                    <input type='number' {...register("maxPeople", { required: true })} />
                    <span>{errors?.maxPeople?.message}</span>
                </div>

                <div className="item">
                    <label htmlFor="type">E-mail do Organizador:</label>
                    <input type='text' {...register("email", { required: true })} />
                    <span>{errors?.email?.message}</span>
                </div>

                <div className="item">
                    <label htmlFor="type">CPF do Organizador:</label>
                    <input type='text' {...register("cpf", { required: true })} />
                    <span>{errors?.cpf?.message}</span>
                </div>
                
                <div className="item">
                    <label htmlFor="type">Onde conheceu nossa empresa?:</label>
                    <select {...register("where")} onChange={(e) => handleWhere(e.target.value)} >
                        <option value="Facebook">Facebook</option>
                        <option value="Instagram">Instagram</option>
                        <option value="Anúncio do Google/Youtube">Anúncio do Google/Youtube</option>
                        <option value="Outro">Outro</option>
                    </select>
                </div>

                {where === 'Outro' && (
                    <div className='item'>
                        <label htmlFor="type">Por onde nos conheceu?</label>
                        <input type='text' {...register("otherWhere", { required: true })} />
                    </div>
                )}

                <button type="submit">Enviar</button>
            </form> 
            </>
        ) : page === 2 ? (<Thankyou values={values} setPage={setPage} reset={reset} />) : null}

        </div>
  )
}

export default Form
