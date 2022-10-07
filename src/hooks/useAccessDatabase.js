import { autorun } from "mobx";
import { createContext, useCallback, useEffect, useState } from "react";
import { useAuthContext } from "../context/authentication/useAuthContext";
import { useCollection } from "../features/firebase_firestore/useCollection";
import { useFirestore } from "../features/firebase_firestore/useFirestore";
import { useTimer } from "./useTimer";

export const useAccessDatabase = (user) => {
  const { addDocument: addProject, updateDocument: updateProject } =
    useFirestore("userprojects");

  const { documents: userprojects } = useCollection("userprojects", [
    "uid",
    "==",
    user.uid,
  ]);

  //TODO: Should be its own function somewhere --------------
  const { timerComplete, restartTimer } = useTimer(2000);
  const [tempContent, setTempContent] = useState(null);
  const refreshFireContent = (newContent) => {
    restartTimer();
    setTempContent(newContent);
  };
  useEffect(() => {
    if (timerComplete) {
      userprojects &&
        updateProject(
          {
            content: { ...tempContent },
          },
          userprojects[0].id
        );
      console.log("refreshing");
    }
  }, [timerComplete]);
  //--------------------------------------------------------------

  const isUserProjectLoaded =
    userprojects && Object.keys(userprojects).length > 0;

  const getProjectContent = () => {
    let myProjectContent;
    if (isUserProjectLoaded) {
      myProjectContent = Object.values(userprojects)[0].content;
    }
    return Object.values(myProjectContent);
  };

  return {
    userprojects,
    addProject,
    refreshFireContent,
    isUserProjectLoaded,
    getProjectContent,
  };
};
