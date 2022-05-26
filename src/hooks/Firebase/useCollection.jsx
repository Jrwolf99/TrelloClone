import { useEffect, useState, useRef } from "react";
import { projectFirestore } from "../../firebase/config";

export const useCollection = (collection, _query) => {
    const [documents, setDocuments] = useState(null);
    const [error, setError] = useState(null);

    //useRef is used to avoid the infinite loop that reference types make when they are dependencies
    const query = useRef(_query).current;

    useEffect(() => {
        let ref = projectFirestore.collection(collection);

        if (query) {
            ref = ref.where(...query);
        }

        const unsub = ref.onSnapshot(
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
                console.log(error);
                setError("Could not fetch the data");
            }
        );

        //ubsubscribe on unmount
        return () => {
            unsub();
        };
    }, [collection, query]);

    return { documents, error };
};
