import React, { useState, useEffect } from 'react'
import { useAuthContext } from "../../hooks/useAuthContext"

import TrelloProject from './TrelloProject';




export default function Home() {

    const [projects] = useState(["First Project"])
    const [selectedProject] = useState(projects[0]);


    return (
        <>
            <TrelloProject project={selectedProject} />
        </>
    );
}