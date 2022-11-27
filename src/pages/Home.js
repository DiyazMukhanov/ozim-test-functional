import FetchTest from "../components/FetchTest";
import {useNavigate} from "react-router-dom";
import SessionContext from "../store/sessionContext";
import { useState, useContext } from "react";
import React from 'react';
import styles from './Home.module.css';


const Home = () => {

    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const sessionCtx = useContext(SessionContext);
    let errMessage;

    const handleRoom = async (id) => {
        setIsLoading(true);
        console.log('In process');
        const response = await fetch(`https://ozimtestapi1.onrender.com/api/v1/sessions/${id}`);

        if (!response.ok) {
            setIsError(true);
            const errMessage = `An error has occured: ${response.status}`;
            throw new Error(errMessage);
        }
        const data = await response.json();
            // console.log(data.data);
            sessionCtx.setSessionData({
                sessionId: data.data.sessionId,
                token: data.data.token
            });
            if(data) {
                setIsLoading(false);
                navigate('/room', { replace: true }, [navigate]);

            }
            console.log(sessionCtx.sessionData);
    }

    if(!isLoading && !isError) {
        return (<div className={styles.container}>
            <p>Пожалуйста выберите комнату для чата</p>
            <p>И попросите друга зайти в нее)</p>
            <button className={styles.btn} onClick={() => handleRoom('637df77fe26b434cda5b5ef7')}>Chat Room 1</button><br/>
            <button className={styles.btn} onClick={() => handleRoom('637df797e26b434cda5b5ef9')}>Chat Room 2</button><br/>
            <button className={styles.btn} onClick={() => handleRoom('637df804e26b434cda5b5efb')}>Chat Room 3</button><br/>
        </div>)
    } else if(isLoading && !isError){
        return <p>Загрузка сессии... Наберитесь терпения, это может быть долгим)</p>
    } else {
        return <p>Ошибка сети. Приносим свои извинения...</p>
    }

}


export default Home;