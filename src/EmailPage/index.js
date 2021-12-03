import React, { useState } from "react";
import { Link } from "react-router-dom";
import firebaseConfig from "./firebase";


import {
    Container,
    FormWrap,
    FormButton,
    Icon,
    Form,
    FormH1,
    FormH2,
    Form2,
    FormLabel,
    FormInput,
    FormContent
} from './EmailElements';

const linkStyle = {
    textDecoration: "none",
    color: "#fff",
  };

const EmailPage = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefaualt();

    firebaseConfig.collection("name, email")
      .add({
        name: name,
        email: email,
      })
      .catch((error) => {
        alert(error.message);
      });
    setName("");
    setEmail("");
  };

    return (
        <>
         <Container>
           <FormWrap>
               <Icon>
               <img
          src={"../../images/deempay-logo.svg"}
          alt="logo"
        />
               </Icon>
               <FormContent>
                   <Form2 action='#'>
                     <FormH2>
                     This Services will soon be available. Please provide us your details
            so that we can inform you once it is ready.
                    </FormH2>                   
                   </Form2>
               </FormContent>
               <FormContent>
                   <Form action='#' onSubmit={handleSubmit} >
                     <FormH1>Coming Soon</FormH1>
                     <FormLabel htmlFor='for'>Name</FormLabel>
                     <FormInput 
                      type='text' 
                      placeholder="Enter your name" 
                      required 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      />
                     <FormLabel htmlFor='for'>Email / Phone</FormLabel>
                     <FormInput
                     type='text'  
                     placeholder="Enter your email or phone" 
                     required
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     />
                     <FormButton 
                     type='submit'
                     >
                    <Link to='/Thanks' style={linkStyle}>Submit</Link></FormButton>
                   </Form>
               </FormContent>
           </FormWrap>
         </Container>   
        </>
    )
}

export default EmailPage;
