
import {useState,useEffect} from 'react'

const useOnlineStatus=()=>{

const [onlineStatus,setOnlineStatus]=useState(true);

    useEffect(()=>{
        window.addEventListener("offline",()=>{
            setOnlineStatus(false);
        })
        window.addEventListener("online",()=>{
            setOnlineStatus(true);
        })
    },[])

    return onlineStatus;
}
export default useOnlineStatus;
// This hook returns true immediately on first render (initial state) becouse it is declared true at initial declaration
// useEffect is scheduled to run after the parent component renders completely and DOM updates are committed.
// Only then are the online/offline event listeners set up by useEffect.
// So the first return value is initial state, not actual network status.
// useEffect comes into picture after parent DOM render.