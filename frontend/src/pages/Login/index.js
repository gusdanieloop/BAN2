import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import { Button, Form, Col, Row, Alert } from 'react-bootstrap'
import { isAuthenticated } from "../../services/auth";

//import './style.css'
export default function Login({ history }) {
    const [cpf, setCpf] = useState('')
    const [senha, setSenha] = useState('')
    const [msg, setMsg] = useState('');
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (isAuthenticated()) {
            history.push('/dashboard');
        }
    }, [])

    async function handleSubmit(event) {
        event.preventDefault()

        const response = await api.post('/autentication', { cpf: cpf, senha: senha })
        if (response.data.success) {
            localStorage.setItem('TOKEN_KEY', response.data.token);
            history.push('/dashboard');
        } else {
            setMsg(response.data.msg)
            setShow(true)
            setTimeout(
                () => { setShow(false) },
                3000)


        }

    }
    return (

        <>
            <Alert show={show} variant="danger">
                <Alert.Heading>{msg}</Alert.Heading>
            </Alert>
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
                            maxlength="11"
                            minlength="11"
                            required
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
                            minlength="6"
                            required
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formSubmit">
                    <Button variant="primary" type="submit">
                        Log In
            </Button>
                </Form.Group>

            </Form>

        </>
    )
}

