import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useEffect, useState, useRef } from "react";
import { projectFirestore } from "../../firebase/config";

export const useCollection = (collectionName, _q) => {
    const [documents, setDocuments] = useState(null);
    const [error, setError] = useState(null);

    //useRef is used to avoid the infinite loop that reference types make when they are dependencies
    const q = useRef(_q).current;

    useEffect(() => {
        let ref = collection(projectFirestore, collectionName);
        if (q) {
            ref = query(ref, where(...q));
        }
        const unsub = onSnapshot(ref,
            (snapshot) => {
                let results = [];
                snapshot.docs.forEach((doc) => {
                    results.push({ ...doc.data(), id: doc.id });
                });

                //update state
                setDocuments(results);
                setError(null);
            },

            (error) => {
                setError("Could not fetch the data");
            }
        );

        //ubsubscribe on unmount
        return () => {
            unsub();
        };
    }, [collectionName, q]);

    return { documents, error };
};
