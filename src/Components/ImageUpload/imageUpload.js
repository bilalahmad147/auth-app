import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import style from './image.module.css'
import firebase from '../Firebase/firebase'

function ImageUpload() {

    let [name, setName] = useState('')
    let [email, setEmail] = useState('')

    console.log(name, email)

    const loginWithEmail = e => {
        e.preventDefault()

        firebase.auth().createUserWithEmailAndPassword(name, email)

            .then(() => {
                console.log("User Successfully Registred")
            })

        firebase.database().ref('/').child(`users/${name}`).set(email)

            .catch(function (error) {
                var errorMessage = error.message;
                console.log(errorMessage, "User not registered")
            });
    }


    return (
        <div>
            <h2 className={style.heading1}>Image Upload Page</h2>
            <div className={style.mainDiv}>
                <Form className={style.formDiv}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Enter Name</Form.Label>
                        <Form.Control value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Enter Name" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Enter Email</Form.Label>
                        <Form.Control value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Enter Email" />
                    </Form.Group>
                    <Button onClick={() => { loginWithEmail() }} variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default ImageUpload
