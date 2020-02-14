import React from 'react';
import styled from '@emotion/styled';


const PhraseContend = styled.div `
    padding: 3rem;
    border-radius: .5rem;
    max-width: 800px;
    margin-top:10rem;
    

    @media(min-width: 992px){
        margin-top:10rem;
    }

    h1{
        font-family: Arial, Helvetica, sans-serif;
        text-align:center;
        font-size: 1.5em;
        position: relative;
        padding-left: 4rem;
        color: #d6d6d6;

        &:before{
            content: open-quote;
            font-size: 10rem;
            color: red;
            position:absolute;
            left: -1rem;
            top: -2rem;

        }

        
    }

    p{
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size:1.4rem;
        font-weight: bold;
        text-align:right;
        color: red;
        margin-top: 2rem;

    }

`;


const Phrase = ({phrase}) => {

    if(Object.keys(phrase).length === 0) return null;
    return ( 

        <PhraseContend>
            <h1>{phrase.quote}</h1>
            <p>{phrase.character}</p>
        </PhraseContend>
        
     );
}
 
export default Phrase;