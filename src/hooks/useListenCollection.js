import { query, onSnapshot, collection } from "firebase/firestore";
import {useEffect} from "react";
import {db} from "../firebase";
import {COLLECTIONS_NAMES} from "../consts";

export const useListenCollection = () => {
    useEffect(() => {
        const q = query(collection(db, COLLECTIONS_NAMES.MESSAGES));
        onSnapshot(q, (querySnapshot) => {
            const cities = [];
            querySnapshot.forEach((doc) => {
                console.log(doc.data());
            });
        });
    }, []);
};
