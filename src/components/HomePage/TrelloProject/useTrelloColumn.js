import { useCollection } from "../../../hooks/Firebase/useCollection";
import { useFirestore } from "../../../hooks/Firebase/useFirestore";
import { useAuthContext } from "../../../hooks/useAuthContext";

export const useTrelloColumn = (path) => {
  const { user } = useAuthContext();
  const { addDocument, updateDocument, deleteDocument } = useFirestore(
    `${path}/cards`
  );
  const { documents } = useCollection(
    `${path}/cards`,
    ["uid", "==", user.uid],
    ["createdAt", "asc"]
  );

  return { addDocument, updateDocument, deleteDocument, user, documents };
};
