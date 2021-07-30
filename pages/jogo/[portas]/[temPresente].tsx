import styles from '../../../styles/jogo.module.css'
import React, { useEffect, useState } from "react"
import Porta from '../../../src/components/Porta'
import { atualizarPortas, criarPortas } from "../../../src/functions/portas"
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Jogo() {

    const router = useRouter()

    const [valido, setValido] = useState(false)
    const [portas, setPortas] = useState([])

    useEffect(()=>{
        const portas = +router.query.portas
        const temPresente = +router.query.temPresente
        setPortas(criarPortas(portas, temPresente))
    },[router?.query])

    useEffect(()=>{
        const portas = +router.query.portas
        const temPresente = +router.query.temPresente
        
        const qtdPortasValidas = portas >= 3 && portas <=100
        const temPresenteValido = temPresente >= 1 && temPresente <= portas

        setValido(qtdPortasValidas && temPresenteValido)

    },[portas, router.query.portas, router.query.temPresente])

    //
    //


    function renderizarPortas() {
        return  portas.map(porta => {
            return <Porta
                key={porta.numero}
                value={porta}
                onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))} />
        })
    }


    return (
        <div id={styles.jogo}>
            <div className={styles.portas}>
                {valido ? renderizarPortas() : <h1>Valores Inválidos</h1>}
            </div>
            <div className={styles.botoes}>
                <Link href="/" passHref>
                    <button>Reiniciar</button>
                </Link>

            </div>
        </div>
    )
}