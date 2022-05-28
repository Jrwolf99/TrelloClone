import React, { useState } from 'react'
import styled from "styled-components";



const StyledSelect = styled.select`
    font-size: 1rem;
    background-color: transparent;
    color: white;
    border: none;
    &>option {
        background-color: #363636 ;
    }

`;


export default function Dropdown({ projects, selectedProject, setSelectedProject }) {

    return (
        <StyledSelect value={selectedProject} onChange={(e) => {
            setSelectedProject(e.target.value)
        }}>
            {projects.map((project, index) => { //FIXME TO DOC ID FOR THE KEY
                return <option key={index} value={project}>{project}</option>
            })}
        </StyledSelect>
    )
}