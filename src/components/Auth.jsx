import React, {useContext} from 'react';
import {AuthContext} from "../App";
import {authUser, signOut} from "../firebase";

const Auth = () => {
    const {user, setUser} = useContext(AuthContext);

    const handleSignOut = async () => {
        // should not wait
        signOut();
        setUser(null);
    };

    const handleAuth = async () => {
        const u = await authUser();
        setUser(u);
    }

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
