import React, { useState, useEffect } from 'react'
import { useAuthContext } from "../../hooks/useAuthContext"

import styled from "styled-components";
import Dropdown from './Dropdown';
import TrelloProject from './TrelloProject';

const StyledProjectMenu = styled.div`
display: flex;
justify-content: left;
gap: 10px;
margin: .5rem 2rem;
&>button {
    color: white;
    font-size: 1.6rem;
}
`;



export default function Home() {

    //grab user from firebase
    const { user } = useAuthContext();
    const [projects, setProjects] = useState(["First Project"])
    const [selectedProject, setSelectedProject] = useState(projects[0]);







    return (
        <>
            <StyledProjectMenu>
                {/* <button>+</button>
                <Dropdown
                    projects={projects}
                    setSelectedProject={setSelectedProject}
                    selectedProject={selectedProject} /> */}
            </StyledProjectMenu>
            <TrelloProject project={selectedProject} />
        </>
    );
}