import React, { useState } from 'react'
import TrelloProject from './TrelloProject/TrelloProject';

export default function Home() {

    const [projects] = useState(["First Project"])
    const [selectedProject] = useState(projects[0]);


    return (
        <>
            <TrelloProject project={selectedProject} />
        </>
    );
}