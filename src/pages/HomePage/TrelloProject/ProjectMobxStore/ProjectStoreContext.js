import { useLocalObservable } from "mobx-react";
import { createContext, useEffect } from "react";
import uuid from "react-uuid";
import { useAuthContext } from "../../../../context/authentication/useAuthContext";
import { useCollection } from "../../../../features/firebase_firestore/useCollection";
import { useAccessDatabase } from "../../../../hooks/useAccessDatabase";

export const ProjectStoreContext = createContext();

export const ProjectStoreProvider = ({ children, initialProjectContent }) => {
  console.log("initialProjectContent: ", initialProjectContent);
  const store = useLocalObservable(() => {
    return {
      projectColumnsList: [...initialProjectContent],
    };
  });

  return (
    <ProjectStoreContext.Provider value={store}>
      {children}
    </ProjectStoreContext.Provider>
  );
};
