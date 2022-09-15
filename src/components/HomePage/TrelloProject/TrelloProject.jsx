import React from 'react'

import styled from "styled-components";

import TrelloColumn from './TrelloColumn';
import { useTrelloProject } from './useTrelloProject';


const StyledWorkspace = styled.div`
    display: flex;
    align-items: flex-start;
    overflow: auto;
    padding-right: 2em;
    &>button {
        font-size: 2rem;
        font-weight: 100;
        color: white;
        background-color: #ffffff45;
        border-radius: 3px;
        margin: 1rem;
        padding: .2em .7em;
    }
    &>button:hover{
        background-color: #d4d4d445;

    }

`;



export default function TrelloProject({ projectID }) {

    const { addDocument,
        deleteDocument,
        updateDocument,
        user,
        documents } = useTrelloProject(projectID);

    return (
        <>
            <StyledWorkspace>
                {
                    documents && documents.map((column) => {
                        return (
                            <TrelloColumn
                                key={column.id}
                                columnId={column.id}
                                title={column.title}
                                path={`projects/${projectID}/columns/${column.id}`}
                                deleteColumn={deleteDocument}
                                updateColumn={updateDocument}
                            />
                        )
                    })
                }

                <button onClick={() => {
                    addDocument({ uid: user.uid, title: "" });
                }}>+</button>
            </StyledWorkspace>
        </>
    )
}