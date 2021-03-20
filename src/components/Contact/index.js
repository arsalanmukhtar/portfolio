import React, { useState } from 'react'
import emailjs from "emailjs-com";
import Modal from 'react-modal';

import logo from '../../images/contact_logo.png'
import { 
    Container, FormWrap, Icon, FormContent, Form, 
    FormH1, FormLabel, FormInput, FormButton, FormTextArea
} from './ContactElements'

const Contact = () => {

    const sendEmail = (e) => {
        e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <Container>
            <FormWrap>
                <Icon to="/"><img src={logo} /></Icon>
                <FormContent>
                    <Form onSubmit={sendEmail}>
                        <FormH1>Contact Me Right Now</FormH1>
                        <FormLabel htmlFor="for" >Name</FormLabel>
                        <FormInput type="text" placeholder="Name" name="name" required />
                        <FormLabel htmlFor="for">Email</FormLabel>
                        <FormInput type="email" placeholder="Email Address" name="email" required />
                        <FormLabel htmlFor="for">Subject</FormLabel>
                        <FormInput type="text" placeholder="Subject" name="subject" required />
                        <FormLabel htmlFor="for">Message</FormLabel>
                        <FormTextArea type="textarea" rows="5" cols="60" placeholder="Your message" name="message" required />
                        <FormButton onClick={() => setModalIsOpen(true)} type="submit">Send</FormButton>
                        <Modal isOpen={modalIsOpen}>
                            <h1>Form Submitted Succesfully!</h1>
                        </Modal>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    )
}

export default Contact
