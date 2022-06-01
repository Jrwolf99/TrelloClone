import React, { useState } from 'react'
import styled from "styled-components";
import { GrFormClose } from "react-icons/gr"


const StyledTrelloCard = styled.div`
    width: 250px;
    background-color: white;
    margin: .5rem;
    border-radius: 3px;
    box-shadow: 
     rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
     rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
    overflow-wrap: break-word;
    hyphens: auto;

    position: relative;
  

    &>button {
        font-size: 1rem;
        position: absolute;
        top: .3rem;
        right: .3rem;
        transition: all .05s;
    }
    &>button:hover {
        background-color: #eeeeee;
        color: white;
        border-radius: 3px;
    }
`;


const StyledTextArea = styled.textarea`
    resize: none;
    width: 100%;
    height: 80px;
    font-size: .85rem;
    padding: 1em;
    background-color: white;
    border-radius: 3px;
    overflow-wrap: break-word;
    hyphens: auto;

`;


export default function TrelloCard({ cardContent, updateDocument, deleteDocument, cardId }) {

    return (
        <StyledTrelloCard>
            <button><GrFormClose onClick={() => {
                deleteDocument(cardId);
            }} /></button>
            <StyledTextArea
                placeholder='New Card'
                onChange={(e) => updateDocument({ content: e.target.value }, cardId)}
                value={cardContent}
            ></StyledTextArea>
        </StyledTrelloCard>

    )
}