import React from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';
import {Container} from './ProfileElements';

const Profile = () => {
  return (
    <>
    <Navbar />
     <Container>
     <h1>Profile</h1>
     </Container>
     <Footer />
    </>
  );
};

export default Profile;