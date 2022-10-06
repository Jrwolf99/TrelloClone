import { useCollection } from "../features/firebase_firestore/useCollection";
import { useFirestore } from "../features/firebase_firestore/useFirestore";

export const useAccessDatabase = (user) => {
  const { addDocument: addProject, updateDocument: updateProject } =
    useFirestore("userprojects");

  const { documents: userprojects } = useCollection("userprojects", [
    "uid",
    "==",
    user.uid,
  ]);

  const refreshFireContent = (newContent) => {
    userprojects &&
      updateProject(
        {
          content: { ...newContent },
        },
        userprojects[0].id
      );
  };

  return {
    userprojects,
    addProject,
    refreshFireContent,
  };
};
