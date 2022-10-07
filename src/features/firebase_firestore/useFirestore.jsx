import { addDoc, collection, deleteDoc, doc, Timestamp, updateDoc } from "firebase/firestore";
import { useReducer, useEffect, useState, useCallback } from "react";
import { projectFirestore } from "../firebase_config/config";

let initialState = {
  document: null,
  isPending: false,
  error: null,
  success: null,
};

const firestoreReducer = (state, action) => {
  switch (action.type) {
    case "IS_PENDING":
      return { isPending: true, error: null, success: false, document: null };

    case "DELETED_DOCUMENT":
      return {
        isPending: false,
        document: null,
        success: true,
        error: null,
      };
    case "UPDATED_DOCUMENT":
      return {
        isPending: false,
        document: action.payload,
        success: true,
        error: null,
      };
    case "ADDED_DOCUMENT":
      return {
        isPending: false,
        document: action.payload,
        success: true,
        error: null,
      };
    case "ERROR":
      return { ...state, error: action.payload };

    default:
      return state;
  }
};


//USEFIRESTORE: Use this hook to add, delete, or update an existing collection.
export const useFirestore = (collectionName) => {
  const [response, dispatch] = useReducer(firestoreReducer, initialState);
  const [isCancelled, setIsCancelled] = useState(false);

  //collection ref
  const ref = collection(projectFirestore, collectionName);
  const dispatchIfNotCancelled = (action) => {
    if (!isCancelled) {
      dispatch(action);
    }
  };

  //add a document
  const addDocument = async (doc) => {
    dispatch({ type: "IS_PENDING" });
    try {
      const createdAt = Timestamp.fromDate(new Date());
      const addedDocument = await addDoc(ref, { ...doc, createdAt });
      dispatchIfNotCancelled({
        type: "ADDED_DOCUMENT",
        payload: addedDocument,
      });
    } catch (error) {
      dispatchIfNotCancelled({ type: "ERROR", payload: error.message });
    }
  };

  //add a document
  const updateDocument = async (partialDoc, docId) => {
    dispatch({ type: "IS_PENDING" });
    try {
      const docRef = doc(ref, docId)
      const updatedDocument = await updateDoc(docRef, partialDoc);
      dispatchIfNotCancelled({
        type: "UPDATED_DOCUMENT",
        payload: updatedDocument,
      });
    } catch (error) {
      console.log("error: ", error.message)
      dispatchIfNotCancelled({ type: "ERROR", payload: error.message });
    }
  };

  //delete a document
  const deleteDocument = async (docId) => {
    dispatch({ type: "IS_PENDING" });
    try {
      const docRef = doc(ref, docId)
      await deleteDoc(docRef);
      dispatchIfNotCancelled({
        type: "DELETED_DOCUMENT"
      });
    } catch (error) {
      console.log("error: ", error.message)
      dispatchIfNotCancelled({ type: "ERROR", payload: error.message });
    }


  };

  useEffect(() => {
    return () => {
      setIsCancelled(true);
    };
  }, []);

  return { addDocument, updateDocument, deleteDocument, response };
};
