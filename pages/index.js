import Head from 'next/head'
import Form from "./components/Form"
import Bg from "./components/Bg"

export default function Home() {

  return (
    <div>
      <Head>
        <title>JCD Eventos</title>
        <meta name="description" content="Formulário de eventos." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Bg />
        <Form />

        <div className='footer'>
          <p>Feito por Eduardo Zaqueu como parte do <a href='https://github.com/JCDMeira/challenge-roadmap-index' target='_blank'>desafio React</a> de Jean Meira</p>
        </div>

      </main>

    </div>
  )
}
