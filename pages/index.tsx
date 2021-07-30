
import styles from '../styles/Formulario.module.css'
import Cartao from "../src/components/Cartao";
import Link from 'next/link';
import EntradaNumerica from '../src/components/EntradaNumerica';
import { useState } from 'react';


export default function Formulario() {
const [qtdPortas, setQtdPortas] = useState(5)
const [portaEsc, setPortaEsc] = useState(1)

  return (
    <div className={styles.formulario}>
      <div>
      <Cartao bgcolor="#c0392c" >
        <h1>Monty Hall</h1>
      </Cartao>
      <Cartao>
        <EntradaNumerica text="Qtd Portas?" 
        value={qtdPortas} onChange={ novaQtde => setQtdPortas(novaQtde)}/>
      </Cartao>
      </div>
      <div>
      <Cartao >
        <EntradaNumerica  text="Porta com Presente"
        value={portaEsc} onChange={portaEscolhida => setPortaEsc(portaEscolhida)}/>
      </Cartao>
      <Cartao bgcolor="#28a085" >
        <Link href={`/jogo/${qtdPortas}/${portaEsc}`} passHref >
          <h2 className={styles.link} >Iniciar</h2>
        </Link>
      </Cartao>
      </div>
    </div>
  )
}
