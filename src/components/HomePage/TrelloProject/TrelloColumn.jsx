import React from 'react'
import styled from "styled-components";
import TrelloCard from './TrelloCard';
import { FaTrashAlt } from "react-icons/fa"
import { useTrelloColumn } from './useTrelloColumn';

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

    const { addDocument, updateDocument, deleteDocument, user, documents } = useTrelloColumn(path);
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
                        <TrelloCard
                            key={card.id}
                            card={card}
                            updateCard={updateDocument}
                            deleteCard={deleteDocument}
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