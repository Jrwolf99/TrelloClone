import { autorun } from "mobx";
import { createContext, useCallback, useEffect, useState } from "react";
import { useAuthContext } from "../context/authentication/useAuthContext";
import { useCollection } from "../features/firebase_firestore/useCollection";
import { useFirestore } from "../features/firebase_firestore/useFirestore";
import { ProjectStoreContext } from "../pages/HomePage/TrelloProject/ProjectMobxStore/ProjectStoreContext";
import { useTimer } from "./useTimer";

export const useAccessDatabase = (user) => {
  const { addDocument: addProject, updateDocument: updateProject } =
    useFirestore("userprojects");

  const { documents: userprojects } = useCollection("userprojects", [
    "uid",
    "==",
    user.uid,
  ]);

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

  return {
    userprojects,
    addProject,
    refreshFireContent,
  };
};
