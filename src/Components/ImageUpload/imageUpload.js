import React from 'react'
import { Form, Button } from 'react-bootstrap'
import style from './image.module.css'

function ImageUpload() {
    return (
        <div>
            <h2 className={style.heading1}>Image Upload Page</h2>
            <div className={style.mainDiv}>
                <Form className={style.formDiv}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Enter Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Enter Email</Form.Label>
                        <Form.Control type="text" placeholder="Enter Email" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default ImageUpload
