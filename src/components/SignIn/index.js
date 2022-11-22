import React from 'react';
import {Container, FormWrap, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text} from './SigninElements';
import { useHistory } from 'react-router-dom';
import Navbar2 from '../Navbar2';
import Footer from '../Footer';

const SignIn = () => {
  let history = useHistory(); 
  return (
    <>
     <Navbar2 />
     <Container>
       <FormWrap>
         <FormContent>
           <Form action="#">
             <FormH1>Sign in to your account</FormH1>
             <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput type='email' required />
              <FormLabel htmlFor='for'>Password</FormLabel>
              <FormInput type='password' required />
              <FormButton type='submit' onClick={() => {
                history.push("/Profile");
              }}>Continue</FormButton>
              <Text>Forgot password</Text>
           </Form>
         </FormContent>
       </FormWrap>
     </Container>
     <Footer />
    </>
  );
};

export default SignIn;