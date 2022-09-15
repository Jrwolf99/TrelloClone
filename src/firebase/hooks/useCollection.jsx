import { collection, onSnapshot, query, where, orderBy } from "firebase/firestore";
import { useEffect, useState, useRef } from "react";
import { projectFirestore } from "../config";

export const useCollection = (collectionName, _q, _ordBy) => {
    const [documents, setDocuments] = useState(null);
    const [error, setError] = useState(null);

    //useRef is used to avoid the infinite loop that
    // reference types make when they are dependencies
    const q = useRef(_q).current;
    const ordBy = useRef(_ordBy).current;

    useEffect(() => {
        let ref = collection(projectFirestore, collectionName);
        if (q) {
            ref = query(ref, where(...q));
        }
        if (ordBy) {
            try {
                ref = query(ref, orderBy(...ordBy));
            } catch (error) {
                console.log(error.message)
            }

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
                console.log(error.message)
                setError("Could not fetch the data");
            }
        );

        //ubsubscribe on unmount
        return () => {
            unsub();
        };
    }, [collectionName, q, ordBy]);

    return { documents, error };
};
