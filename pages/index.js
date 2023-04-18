import Head from 'next/head'
import Image from 'next/image'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { schema, schemaBase } from "../schemas/yup"
import Form from "./components/Form"

export default function Home() {
  
  const {
    register,
    unregister,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({resolver: yupResolver(schema)})

  return (
    <div>
      <Head>
        <title>JCD Eventos</title>
        <meta name="description" content="Formulário de eventos." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Form 
          handleSubmit={handleSubmit}
          register={register}
          unregister={unregister}
          errors={errors}
          reset={reset} />

        <div className='footer'>
          <p>Feito por Eduardo Zaqueu como parte do <a href='https://github.com/JCDMeira/challenge-roadmap-index' target='_blank'>desafio React</a> de Jean Meira</p>
        </div>

      </main>

    </div>
  )
}
