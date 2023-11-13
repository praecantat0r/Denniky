import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase';
import Body from "./Body";

function Main() {
    const navigate = useNavigate();
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid
                console.log("uid", uid)
            }
            else {
                navigate('/')
            }
        })
    })
    return (
        <div>
            <Body></Body>
        </div>
    )
}
export default Main