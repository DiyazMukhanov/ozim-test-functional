import FetchTest from "../components/FetchTest";
import {useNavigate} from "react-router-dom";
import SessionContext from "../store/sessionContext";
import {useCallback, useState, useContext, useEffect} from "react";


const Home = () => {

    const navigate = useNavigate();
    // const [sessionId, setSessionId] = useState('');

    const sessionCtx = useContext(SessionContext);


    const handleRoom = async (id) => {
        console.log('In process');
        const response = await fetch(`https://ozimtestapi1.onrender.com/api/v1/sessions/${id}`);
        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            throw new Error(message);
        }
        const data = await response.json();
            // console.log(data.data);
            sessionCtx.setSessionData({
                sessionId: data.data.sessionId,
                token: data.data.token
            });
            if(data) {
                navigate('/room', { replace: true }, [navigate]);
            }
            console.log(sessionCtx.sessionData);
    }

    // useEffect(() => {
    //     console.log(sessionCtx.sessionData);
    // }, [sessionCtx.sessionData])
    // const handleRoom = () => {
    //     sessionCtx.setSessionData({
    //         sessionId: 'new ID',
    //         sessionToken: 'new Token'
    //     })
    //     console.log(sessionCtx.sessionData);
    // }

    // useEffect(() => {
    //     console.log(sessionCtx.sessionData);
    // }, [sessionCtx.sessionData])

    // const handleRoom = () => {
    //     sessionCtx.setToken()
    // }
    // const handleRoom = (idOfSession) => {
    //     setSessionId(idOfSession);
    //     console.log(sessionId);
    //     // navigate('/room', { replace: true }, [navigate])
    // };

    return <div>
        Home
        <FetchTest idOfSession='637df77fe26b434cda5b5ef7'/><br/>
        <button onClick={() => handleRoom('637df77fe26b434cda5b5ef7')}>Chat Room 1</button><br/>
        <button onClick={() => handleRoom('637df797e26b434cda5b5ef9')}>Chat Room 2</button><br/>
        <button onClick={() => handleRoom('637df804e26b434cda5b5efb')}>Chat Room 3</button><br/>
    </div>
}


export default Home;