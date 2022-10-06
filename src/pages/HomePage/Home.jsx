import React from 'react'
import { ProjectStoreProvider } from './TrelloProject/ProjectMobxStore/ProjectStoreContext';
import { TrelloProject } from './TrelloProject/TrelloProject';

export default function Home() {

    // const { user } = useAuthContext();
    // const { userprojects, addProject } = useAccessDatabase(user);
    //TODO: Firebase should now have one collection 
    //full of userprojects, where those projects are singualr data stuctures for the user.
    //You can now access those projects through the useAccessDatabase, and you
    //should really only CRUD the collection through this hook. change the useAccessDatabase hook
    //to be able to modify the data how it is needed, and then populate it below throughout the
    //application. This way, all your database access and info is decoupled from the
    //react tree of visual components.  
    //TrelloProjectNext is the new version of this refactoring. Finish out this component tree, 
    //and then delete the old TrelloProject folder.

    return (
        <>
            <ProjectStoreProvider><TrelloProject /></ProjectStoreProvider>
        </>


    );
}