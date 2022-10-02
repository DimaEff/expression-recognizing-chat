import React, {useContext, useEffect} from 'react';
import {AuthContext, InterlocutorContext} from "../App";
import {authUser, getInterlocutorId, signOut} from "../firebase";

const Auth = () => {
    const {user, setUser} = useContext(AuthContext);
    const {setInterlocutorUid} = useContext(InterlocutorContext);

    const handleSignOut = async () => {
        // should not wait
        signOut();
        setUser(null);
    };

    const handleAuth = async () => {
        const u = await authUser();
        setUser(u);
    }

    useEffect(() => {
        const fetchInterlocutorId = async () => {
            if (user) {
                const iId = await getInterlocutorId(user.uid);
                setInterlocutorUid(iId);
            }
        };
        fetchInterlocutorId();
    }, [user]);

    return (
        <div>
            {
                user ?
                    <>
                        <button onClick={handleSignOut}>sign out</button>
                        <div>{user.uid}</div>
                    </> :
                    <button onClick={handleAuth}>sign in</button>
            }
        </div>
    );
};

export default Auth;
