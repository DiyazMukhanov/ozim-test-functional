import {useEffect} from "react";


const FetchTest = (props) => {
    // console.log('test')
    async function fetchSession() {
        console.log('In process');
        const response = await fetch(`https://ozimtestapi1.onrender.com/api/v1/sessions/${props.idOfSession}`);
        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            throw new Error(message);
        }
        const data = await response.json();
        console.log(data);
    }



    // useEffect(() => {
    //
    // }, [])
   return (<button onClick={fetchSession}>
       Fetch Test
   </button>)
}

export default FetchTest;