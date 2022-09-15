import { useCollection } from "../../../hooks/Firebase/useCollection";
import { useFirestore } from "../../../hooks/Firebase/useFirestore";
import { useAuthContext } from "../../../hooks/useAuthContext";

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
