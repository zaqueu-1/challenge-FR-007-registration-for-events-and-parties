import React from 'react'

function Thankyou({values, setPage, reset}) {

    const newAnswer =() => {
        setPage(1)
        reset()
    }

  return (
    <div className='thankyou'>
        <h2>Obrigado!</h2>
        <h3>Seus dados serão analisados por nossa equipe!</h3>

        <div className="info">
            <h3>{values?.email}  {values?.cpf > 0 ? values?.cpf : null}</h3>
            <h2>Evento: {values?.name}, Tema: {values?.theme}, {values?.event} | {values?.otherEvent}</h2>

            {values?.age && values?.gender && (
                <>
                    <h2>Idade: {values?.age}, Gênero: {values?.gender}</h2>
                </>
            )}

            <h2>Convidados: de {values?.minPeople} a {values?.maxPeople}</h2>
            <button onClick={newAnswer} className="answer-again">Responder novamente</button>
        </div>
    </div>
  )
}

export default Thankyou