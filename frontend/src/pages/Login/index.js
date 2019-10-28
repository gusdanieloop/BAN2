import React, { useState } from 'react'
import api from '../../services/api'
import { Button, Form, Col, Row }from 'react-bootstrap'

//import './style.css'
export default function Login() {
    const [cpf, setCpf] = useState('')
    const [senha, setSenha] = useState('')



    async function handleSubmit(event){
        event.preventDefault()
        console.log(`${cpf} ${senha}`)
    }
    return (

        <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} controlId="formCpf">
                <Form.Label column sm="2">
                    CPF
                </Form.Label>
                <Col sm="10">
                    <Form.Control
                        type="text"
                        placeholder="CPF"
                        onInput={e => setCpf(e.target.value)}
                    />
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formSenha">
                <Form.Label column sm="2">
                    Senha
                </Form.Label>
                <Col sm="10">
                    <Form.Control
                        type="password"
                        placeholder="Senha"
                        onInput={e => setSenha(e.target.value)}
                    />
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formSubmit">
            <Button variant="primary" type="submit">
                Log In
            </Button>
            </Form.Group>

        </Form>


    )
}

