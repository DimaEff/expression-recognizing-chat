import React, {useState} from "react";
import Auth from "./components/Auth";
import Chat from "./components/Chat";
import EmotionDetector from "./components/EmotionDetector";

export const AuthContext = React.createContext(null);
export const InterlocutorContext = React.createContext(null);

function App() {
    const [user, setUser] = useState(null);
    const [interlocutorUid, setInterlocutorUid] = useState(null);

    return (
        <>
            <AuthContext.Provider value={{user, setUser}}>
                <InterlocutorContext.Provider value={{interlocutorUid, setInterlocutorUid}}>
                    {!!user && <EmotionDetector/>}
                    <Auth/>
                    {!!user && <Chat/>}
                </InterlocutorContext.Provider>
            </AuthContext.Provider>
        </>
    );
}

export default App;
