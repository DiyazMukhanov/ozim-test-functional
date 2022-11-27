import SessionRoom from "../components/SessionRoom";
import React, {useContext} from "react";
// import config from './config';
import SessionContext from "../store/sessionContext";


const Session = () => {
    const sessionCtx = useContext(SessionContext);

    const sessionId = sessionCtx.sessionData.sessionData.sessionId;
    const token = sessionCtx.sessionData.sessionData.token;

    console.log(token);
    return <div>
        <SessionRoom
            apiKey='47570931'
            sessionId={sessionId}
            // token={config.TOKEN}
            token={token}
        />
    </div>
}

export default Session;