import React from 'react';
import {Container, FormWrap, FormContent, Form, FormH1, FormLabel, FormInput, FormButton} from './SignupElements';
import Navbar2 from '../Navbar2';
import Footer from '../Footer';

const SignUp = () => {
  return (
    <>
    <Navbar2 />
     <Container>
       <FormWrap>
         <FormContent>
           <Form action="#">
             <FormH1>Sign Up</FormH1>
             <FormLabel htmlFor='for'>Full Name</FormLabel>
             <FormInput type='fullname' required />
             <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput type='email' required />
              <FormLabel htmlFor='for'>Password</FormLabel>
              <FormInput type='password' required />
              <FormLabel htmlFor='for'>Confirm Password</FormLabel>
              <FormInput type='password' required />
              <FormButton type='submit'>Create Account</FormButton>
           </Form>
         </FormContent>
       </FormWrap>
     </Container>
     <Footer />
    </>
  );
};

export default SignUp;