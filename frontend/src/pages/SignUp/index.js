import React, { useState } from 'react'
import api from '../../services/api'
import { Link, withRouter } from "react-router-dom";
import { Button, Form, Col, Row } from 'react-bootstrap'

//import './style.css'
export default function SignUp() {
    const [cpf, setCpf] = useState('')
    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')
    const [tipo, setTipo] = useState(1)

    async function handleSubmit(event){
        event.preventDefault();/*
        if (!nome || !senha || !cpf) {
            this.setState({ error: "Preencha todos os dados para se cadastrar" });
        } else {
            try {*/
                await api.post("/createUser", { nome, cpf, senha, tipo });
                /*this.props.history.push("/");
            } catch (err) {
                console.log(err);
                this.setState({ error: "Ocorreu um erro ao registrar sua conta. T.T" });
            }
        }*/
    }
    return (

        <Form onSubmit={handleSubmit}>

            <Form.Group as={Row} controlId="formNome">
                <Form.Label column sm="2">
                    Nome
                </Form.Label>
                <Col sm="10">
                    <Form.Control
                        type="text"
                        placeholder="Nome"
                        onInput={e => setNome(e.target.value)}
                    />
                </Col>
            </Form.Group>

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
                    Sign Up
            </Button>
            </Form.Group>

        </Form>


    )
}

