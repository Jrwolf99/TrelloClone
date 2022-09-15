import { useAuthContext } from "../../../context/useAuthContext";
import { useCollection } from "../../../firebase/hooks/useCollection";
import { useFirestore } from "../../../firebase/hooks/useFirestore";

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
