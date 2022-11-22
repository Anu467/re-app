import React from 'react';
import Footer from '../Footer';
import Navbar2 from '../Navbar2';
import {Container, FormWrap, FormContent, Form, FormH1, FormLabel, FormInput, FormButton} from './ContactElements';

const Contact = () => {
  return (
    <>
    <Navbar2 />
     <Container>
       <FormWrap>
         <FormContent>
           <Form action="#">
             <FormH1>Contact Form</FormH1>
             <FormLabel htmlFor='for'>Name</FormLabel>
              <FormInput type='text' required />
             <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput type='email' required />
              <FormLabel htmlFor='for'>Message</FormLabel>
              <FormInput type='Text' required />
              <FormButton type='submit'>Submit</FormButton>
           </Form>
         </FormContent>
       </FormWrap>
     </Container>
     <Footer />
    </>
  );
};

export default Contact;