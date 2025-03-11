import "../../App.css";
import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import "./Login.css";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

const Login = (args) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!email) newErrors.email = "Email obrigatorio";
    else if (!/S+@S+.S+/.test(email)) newErrors.email = "Email invalido";
    if (!password) newErrors.password = "Senha obrigatoria";
    else if (password.length < 6)
      newErrors.password = "Senha deve ter no minimo 6 caracteres";
    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      setErrors({});
      console.log("Login attempted with:", { email, password });
      // Here you would typically send a request to your server
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-form-container">
        <h2 className="login-title">Login</h2>
        <Form onSubmit={handleSubmit} className="login-form">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>E-mail</Form.Label>
            <Form.Control
              type="email"
              placeholder="Seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              isInvalid={!!errors.password}
            />
            <Form.Control.Feedback type="invalid">
              {errors.password}
            </Form.Control.Feedback>
          </Form.Group>

          <Button variant="primary" type="submit" className="login-button">
            Login
          </Button>

          <p>
            Não tem conta?
            <a onClick={toggle}>Cadastre-se </a>
          </p>
        </Form>
      </div>

      <Modal isOpen={modal} toggle={toggle} {...args} fullscreen>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <Form>
            <Row>
              <FormGroup>
                <Label for="exampleAddress">Nome completo</Label>
                <Input id="exampleAddress" name="name" placeholder="" />
              </FormGroup>
              <FormGroup>
                <Label for="exampleAddress">E-mail</Label>
                <Input id="exampleAddress" name="email" placeholder="" />
              </FormGroup>
              <Col md={6}>
                <FormGroup>
                  <Label for="exampleEmail">Senha</Label>
                  <Input
                    id="password"
                    name="password"
                    placeholder=""
                    type="password"
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="confPassword">Confirme a senha</Label>
                  <Input
                    id="confPassword"
                    name="confPassword"
                    placeholder=""
                    type="confPassword"
                  />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <Label for="exampleAddress">Endereço</Label>
              <Input
                id="exampleAddress"
                name="address"
                placeholder="1234 Main St"
              />
            </FormGroup>
            <FormGroup>
              <Label for="curso">Curso</Label>
              <Input
                id="curso"
                name="curso"
                placeholder=""
              />
            </FormGroup>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="exampleCity">Cidade</Label>
                  <Input id="exampleCity" name="city" />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label for="exampleState">UF</Label>
                  <Input id="exampleState" name="state" />
                </FormGroup>
              </Col>
              <Col md={2}>
                <FormGroup>
                  <Label for="exampleZip">CEP</Label>
                  <Input id="exampleZip" name="zip" />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup check>
              <Input id="exampleCheck" name="check" type="checkbox" />
              <Label check for="exampleCheck">
                Check me out
              </Label>
            </FormGroup>
            
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Salvar
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Fechar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Login;
