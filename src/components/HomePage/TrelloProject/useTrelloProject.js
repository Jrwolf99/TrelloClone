import { useAuthContext } from "../../../context/useAuthContext";
import { useCollection } from "../../../firebase/hooks/useCollection";
import { useFirestore } from "../../../firebase/hooks/useFirestore";

export const useTrelloProject = (projectID) => {
  const { user } = useAuthContext();
  const { addDocument, deleteDocument, updateDocument } = useFirestore(
    `projects/${projectID}/columns`
  );
  const { documents } = useCollection(
    `projects/${projectID}/columns`,
    ["uid", "==", user.uid],
    ["createdAt", "asc"]
  );

  return { addDocument, deleteDocument, updateDocument, user, documents };
};
