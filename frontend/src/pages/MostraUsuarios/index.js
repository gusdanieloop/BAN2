import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import { Button, Modal } from 'react-bootstrap'

//import './style.css'
export default function MostraUsuarios() {
    const [usuarios, setUsuario] = useState([])
    const [usuarioEditar, setUsuarioEditar] = useState({})
    const [show, setShow] = useState(false)
    useEffect(() => {
        async function loadUsuarios() {
            const response = await api.get('/users')
            setUsuario(response.data)
            console.log(response.data)
        }
        loadUsuarios()
    }, [])
    const closeModal = () => setShow(false);
    async function modal(usuario){
        console.log(usuario)
        setUsuarioEditar(usuario)
        setShow(true)
    }

    //console.log(usuarios)
    return (
        <>
            <ul>
                {usuarios.map(usuario => (
                    <li key={usuario.cpf}>
                        <p>{usuario.codp}</p>
                        <p>{usuario.nome}</p>
                        <p>{usuario.cpf}</p>
                        <p>{usuario.senha}</p>
                        <Button onClick={ e => modal(usuario)}>Editar</Button>
                    </li>
                ))}
            </ul>
            <Modal show={show} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                        <p>{usuarioEditar.codp}</p>
                        <p>{usuarioEditar.nome}</p>
                        <p>{usuarioEditar.cpf}</p>
                        <p>{usuarioEditar.senha}</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary">Close</Button>
                    <Button variant="primary">Save changes</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

