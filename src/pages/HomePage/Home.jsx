import React from 'react'
import uuid from 'react-uuid';
import styled from 'styled-components';
import { useAuthContext } from '../../context/authentication/useAuthContext';
import { useAccessDatabase } from '../../hooks/useAccessDatabase';
import { ProjectStoreProvider } from './TrelloProject/ProjectMobxStore/ProjectStoreContext';
import { TrelloProject } from './TrelloProject/TrelloProject';


const StyledButton = styled.button`
    margin: auto;
    color: white;
    background-color: #ffffff54;
    padding: 2em 5em;
    border-radius: 5px;
    transition: all .2s;
    &:hover {
        background-color: #cccccc53;
    }
`;

export default function Home() {

    const { user } = useAuthContext();
    const { addProject, getProjectContent, isUserProjectLoaded } = useAccessDatabase(user);

    return (
        <>
            {
                (isUserProjectLoaded) &&
                <ProjectStoreProvider initialProjectContent={getProjectContent()}>
                    <TrelloProject />
                </ProjectStoreProvider>
            }
            {(!isUserProjectLoaded) && <StyledButton onClick={() => {
                addProject(
                    {
                        uid: user.uid,
                        content: [
                            {
                                id: uuid(),
                                title: "Help",
                                cardsList: [
                                    { id: uuid(), text: "Drag these notes to wherever you need." },
                                    { id: uuid(), text: "You can also move the columns around." },
                                ],
                            },
                            {
                                id: uuid(),
                                title: "To Do",
                                cardsList: [{ id: uuid(), text: "Write your notes here!" }],
                            },
                            {
                                id: uuid(),
                                title: "In Progress",
                                cardsList: [{ id: uuid(), text: "Write your notes here!" }],
                            },
                            {
                                id: uuid(),
                                title: "Finished",
                                cardsList: [{ id: uuid(), text: "Write your notes here!" }],
                            },
                        ],
                    }
                );
            }}>
                It seems that there are no projects on this account.
                Click here to start one!
            </StyledButton>
            }
        </>
    );
}