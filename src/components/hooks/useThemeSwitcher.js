import React, { useEffect, useState } from 'react'

const useThemeSwitcher = () => {    //function name must start with use here to work as dark
    const preferDarkQuery = "(prefer-color-scheme:dark)" //must match media query to make it functioning
    const [mode,setMode]=useState("")

    useEffect(()=>{
        const mediaQuery=window.matchMedia(preferDarkQuery) //matching query
        const userPref=window.localStorage.getItem("theme") //storing preference in local storage

        const handleChange=()=>{
            if(userPref){
                let check=userPref==="dark"?"dark":"light"
                setMode(check)
                if(check==="dark"){
                    document.documentElement.classList.add("dark") //checking if dark then add dark class 
                }else{
                    document.documentElement.classList.remove("dark") //checking if dark then removing dark class 
                }
            }else{
                let check=mediaQuery.matches?"dark":"light"
                setMode(check)
                if(check==="dark"){
                    document.documentElement.classList.add("dark")
                }else{
                    document.documentElement.classList.remove("dark")
                }
            }
        }

        // handleChange()  //to check all conditions

        // if any change in media query handleChange will work
        mediaQuery.addEventListener("change",handleChange)

        // removing eventListener
        return()=>mediaQuery.removeEventListener("change",handleChange)
    })

    useEffect(()=>{
        if(mode==="dark"){
            window.localStorage.setItem("theme","dark")
            document.documentElement.classList.add("dark") 
        }else{
            window.localStorage.setItem("theme","light")
            document.documentElement.classList.remove("dark") 
        }
    },[mode])

    return [mode,setMode]
}

export default useThemeSwitcher

// exported on all place 
// 🍀 It come to dark theme after sometime on load because of focus of unstyled contain
        // which is an instance where a web page appear briefly for few seconds with 
        // browser default setting then after checking all condition i.e local storage 
        // then it changes things back to user preferred state 