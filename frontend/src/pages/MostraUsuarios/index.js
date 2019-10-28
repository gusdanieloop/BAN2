import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../../services/api'
import Button from 'react-bootstrap/Button'

//import './style.css'
export default function MostraUsuarios(){
    const [usuarios, setUsuario] = useState([])

    useEffect(() =>{
        async function loadUsuarios(){
            const response = await api.get('/users')
            setUsuario(response.data)
            console.log(response.data)
        }
        loadUsuarios()
    }, [])
    console.log(usuarios)
    return (
        <>
            <ul>
                {usuarios.map(usuario => (
                    <li>
                    <Button>oi</Button>
                        <p>{usuario.codp}</p>
                        <p>{usuario.nome}</p>
                        <p>{usuario.cpf}</p>
                        <p>{usuario.senha}</p>
                    </li>
                ))}
            </ul>
        </>
    )
}

