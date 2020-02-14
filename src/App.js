import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import Phrase from "./components/Phrase";


const Content = styled.div`
  box-sizing: content-box;
  display:flex;
  align-items: center;
  padding-top:10rem;
  flex-direction: column;

`;
const Button = styled.button`

  background: transparent;
  background-size:  300px;
  font-family: 'Fondamento';
  color: #9a9a9a;
  margin-top: 2rem;
  padding: 1rem 3rem;
  font-size: 1.5rem;
  border: 1.5px solid #9a9a9a;
  border-radius: 10px;
  display:inline-block;
  outline:none;

   &:hover{
     color: #fff;
     border: 1.5px solid #fff;
     cursor:pointer;
    

   }
`;

  

function App() {

    const [phrase, savePhrase] = useState({});

    //****API ****//

    const consultAPI= async () => {
    const api = await fetch('https://got-quotes.herokuapp.com/quotes?');
    const phrase = await api.json()
    savePhrase(phrase);
     
   }

   //****Load a Phrase */
   
   useEffect ( () => {

    consultAPI();

   }, []);

  return (
    <Content>

    <Phrase 
    phrase={phrase}/>
    <Button onClick={consultAPI}>
      Get phrase
    </Button>
   </Content>
  );
}

export default App;
