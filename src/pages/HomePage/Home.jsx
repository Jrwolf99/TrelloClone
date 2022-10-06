import React from 'react'
import { useAuthContext } from '../../context/authentication/useAuthContext';
import { useAccessDatabase } from '../../hooks/useAccessDatabase';
import { ProjectStoreProvider } from './TrelloProject/ProjectMobxStore/ProjectStoreContext';
import { TrelloProject } from './TrelloProject/TrelloProject';

export default function Home() {

    const { user } = useAuthContext();
    const { userprojects, addProject } = useAccessDatabase(user);
    return (
        <>
            <ProjectStoreProvider>
                {(userprojects && (Object.keys(userprojects).length > 0))
                    ?
                    <TrelloProject />
                    :
                    <button onClick={() => {
                        addProject(
                            {
                                uid: user.uid,
                                content: {}
                            }
                        );
                    }}>
                        It seems that there are no projects on this account.
                        Click here to start one!
                    </button>}

            </ProjectStoreProvider>
        </>


    );
}