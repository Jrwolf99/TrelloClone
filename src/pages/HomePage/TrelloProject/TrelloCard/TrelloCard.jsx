import React from 'react'
import styled from "styled-components";
import { GrFormClose } from "react-icons/gr"
import { RiDragMoveFill } from 'react-icons/ri';
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { ProjectStoreContext } from '../ProjectMobxStore/ProjectStoreContext';

const StyledTrelloCard = styled.div`
    width: 95%;
    background-color: white;
    margin:  0;
    border-radius: 3px;
    box-shadow: 
     rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
     rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
    overflow-wrap: break-word;
    hyphens: auto;
    cursor: move;
    position: relative;
  

`;
const StyledCardMenu = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin: 0.3em;
margin-top: 0.1em;
padding: 0.1em;
border-bottom: 1px solid whitesmoke;
color: #626262;

    &>button{
        font-size: 1rem;
        top: .3rem;
        right: .3rem;
        transition: all .05s;
    }
    &>button:hover {
        background-color: #eeeeee;
        border-radius: 3px;
    }

`;
const StyledTextArea = styled.textarea`
    resize: vertical;
    display: block;
    width: 100%;
    min-height: 50px;
    font-size: .85rem;
    padding: 1em;
    border-radius: 3px;
    overflow-wrap: break-word;
    hyphens: auto;
    &:focus {
        outline: 1px solid black;
    }
`;


export const TrelloCard = observer(({ cardid }) => {

    const store = useContext(ProjectStoreContext);
    return (
        <StyledTrelloCard>
            <StyledCardMenu>
                <RiDragMoveFill />
                <button>
                    <GrFormClose onClick={() => store.deleteCard(cardid)} />
                </button>
            </StyledCardMenu>
            <StyledTextArea
                placeholder='New Card'
                onChange={(e) => {
                    store.setCardText(cardid, e.target.value)
                }}
                value={store.getCardText(cardid)}
            >
            </StyledTextArea>
        </StyledTrelloCard >
    )
}
)