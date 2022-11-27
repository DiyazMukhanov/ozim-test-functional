import React, {createContext, useContext, useEffect, useMemo, useReducer, useState} from 'react';

const SessionContext = createContext({
    sessionData: {
        sessionId: '',
        token: ''
    },
    setSessionData: (sessionData) => {}
});

const defaultSessionState = {
    sessionData: {
        sessionId: 'default Id',
        token: 'default token'
    }
};

const sessionReducer = (state, action) => {
    if(action.type === 'SET') {
        const newSessionData = action.newSessionData;

        return {
            sessionData: newSessionData
        }
    }

    return defaultSessionState;
}

export const SessionProvider = props => {
    const [sessionState, dispatchSessionAction] = useReducer(sessionReducer, defaultSessionState);

    const setSessionData = (newSessionData) => {
        dispatchSessionAction({
            type: 'SET',
            newSessionData: newSessionData
        })
    }

    const sessionContext = {
        sessionData: sessionState,
        setSessionData: setSessionData
    }

    return <SessionContext.Provider value={sessionContext}>
        {props.children}
    </SessionContext.Provider>
}

export default SessionContext;

























//
// // const SessionContext = React.createContext({
// //     sessionData: {},
// //     setSessionData: () => {}
// // });
//
// // const defaultSessionState = {
// //     sessionId: null,
// //     token: null
// // }
//
// // const sessionReducer = (state, action) => {
// //    if(action.type === 'SET') {
// //        return {
// //            sessionData: action.sessionData
// //        }
//        // async function fetchSession() {
//        //     console.log('In process');
//        //     console.log(state.sessionId);
//        //     const response = await fetch(`https://ozimtestapi1.onrender.com/api/v1/sessions/${action.idOfSession}`);
//        //     if (!response.ok) {
//        //         const message = `An error has occured: ${response.status}`;
//        //         throw new Error(message);
//        //     }
//        //     const data = await response.json();
//        //     // console.log(data);
//        //     return {
//        //         sessionId: data.sessionId,
//        //         token: data.token
//        //     }
//        // }
//        //
//        // fetchSession();
//
//        // console.log('Works!');
//
//        // return {
//        //     sessionId: sessionId,
//        //     token: undefined
//        // }
// //    }
// //
// //    return defaultSessionState;
// // }
//
// export const SessionProvider = props => {
//     // const [sessionState, dispatchSessionActions] = useReducer(sessionReducer, defaultSessionState);
//     const [sessionData, setSessionData] = useState({});
//
//
//     // const sessionId = sessionState.sessionId;
//     // const token = sessionState.token;
// //
// //     // const setSessionData = (sessionData) => {
// //     //      dispatchSessionActions({type: 'SET', sessionData: sessionData});
// //     // }
// //
// //     // const sessionContext = {
// //     //     sessionId: sessionId,
// //     //     token: token,
// //     //     setSessionData: setSessionData
// //     // }
// //
// //     return <SessionContext.Provider value={sessionContext}>
// //         {props.children}
// //     </SessionContext.Provider>
// // }
//
// const SessionContext = createContext();
//
// export const SessionProvider = props => {
//     const [sessionData, setSessionData] = useState('test session global state');
//
//            // async function fetchSession() {
//            //     console.log('In process');
//            //     const response = await fetch(`https://ozimtestapi1.onrender.com/api/v1/sessions`);
//            //     if (!response.ok) {
//            //         const message = `An error has occured: ${response.status}`;
//            //         throw new Error(message);
//            //     }
//            //     const data = await response.json();
//            //     setSessionData(data);
//            // }
//
//     // fetchSession();
//     const provided = useMemo(() => (
//         {
//             value: sessionData,
//             setValue: (value) => setSessionData(value)
//         }
//     ), [value]);
//
//     return <SessionContext.Provider value={provided}>
//         {props.children}
//     </SessionContext.Provider>
// }
//
//
//
//
// export default SessionContext