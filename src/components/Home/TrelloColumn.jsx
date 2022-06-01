import React from 'react'
import styled from "styled-components";
import { useCollection } from '../../hooks/Firebase/useCollection';
import { useFirestore } from '../../hooks/Firebase/useFirestore';
import TrelloCard from './TrelloCard';
import { FaTrashAlt } from "react-icons/fa"
import { useAuthContext } from '../../hooks/useAuthContext';



const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
    &>input, &>button {
        margin: 0.5rem;
        font-size: 1rem;
    }
    &>input {
        background-color: transparent;
        border: none;
    }
`;


const StyledTrelloColumn = styled.div`
    min-width: 263px;
    background-color: #ebecf0;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    margin-left: 2rem;
    margin-bottom: 1rem;
   
    &>button {
        margin: .2rem .5rem .5rem .5rem;
        padding-left: .5em ;
        border-radius: 3px;
        text-align: left;
        transition: all .05s ease-in;
    }
    &>button:hover {
        background-color: #c5c5c5;
    }

`;



export default function TrelloColumn({ title, path, deleteColumn, updateColumn, columnId }) {

    const { user } = useAuthContext();
    const { addDocument, updateDocument, deleteDocument } = useFirestore(`${path}/cards`);
    const { documents } = useCollection(
        `${path}/cards`
        ,
        ["uid", "==", user.uid]
        ,
        ["createdAt", "asc"]

    );


    return (
        <StyledTrelloColumn>
            <StyledHeader>
                <input contentEditable
                    placeholder='New Column'
                    onChange={(e) => updateColumn({ title: e.target.value }, columnId)}
                    value={title}
                />
                <button>
                    <FaTrashAlt onClick={() => {
                        deleteColumn(columnId);
                    }} />
                </button>
            </StyledHeader>
            {
                documents && documents.map((card) => {
                    return (
                        <TrelloCard key={card.id}
                            cardId={card.id}
                            cardContent={card.content}
                            updateDocument={updateDocument}
                            deleteDocument={deleteDocument}
                        />
                    )
                })
            }
            <button onClick={() => {
                addDocument({ uid: user.uid, content: "" });
            }}>+</button>
        </StyledTrelloColumn>
    )
}