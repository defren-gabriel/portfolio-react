import { useState, useEffect } from 'react';

import { auth } from './conection';
import { onAuthStateChanged } from 'firebase/auth';

import { Navigate } from 'react-router-dom'

function Private({ children }){
    const [loading, setLoading] = useState(true);
    const [signed, setSigned] = useState(false);

    useEffect(() => {
        async function checkLogin(){
            onAuthStateChanged(auth, (user) => {
                //se tem user logado
                if(user){
    
                    setLoading(false);
                    setSigned(true);
    
                } else{
                    //nao possui user logado
                    setLoading(false);
                    setSigned(false);
                }
            })
        }

        checkLogin();
    }, []);

    if(loading){
        return(
            <div></div>
        )
    }

    if(signed === false){
        return <Navigate to="/GetIn"/>
    }

    return children;
}

export default Private;