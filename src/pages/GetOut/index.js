import React, { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { auth } from '../../conection';
import { signOut } from 'firebase/auth';

function GetOut(){
    const navigate = useNavigate();

    useEffect(()=>{
        async function logout(){
            await signOut(auth)
            .then(()=>{
                navigate('/', { replace: true });
            })
        }

        logout();
    }, [navigate]);

    return(
        <div>
            <p className='texto'>Voltando a pagina inicial sem login...</p>
        </div>
    );
}

export default GetOut;