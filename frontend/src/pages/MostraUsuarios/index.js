import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../../services/api'

//import './style.css'
export default function Dashboard(){
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

