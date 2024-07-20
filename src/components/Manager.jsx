import React from 'react'

import { useRef, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Manager = () => {
    const ref = useRef()
    const passwordRef = useRef()
    const [form, setform] = useState({ site: "", username: "", password: "" })
    let [passwordArray, setPasswordArray] = useState([]);
    useEffect(() => {
        let passwords = localStorage.getItem("passwords")
        let passwordArray;
        if (passwords) {
            setPasswordArray = JSON.parse(passwords)
        }
    }, [])

    const copyText = (text) => {
        toast('Copied to clipboard!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark"
            });
        navigator.clipboard.writeText(text)
    }

    const showpassword = () => {
        passwordRef.current.type = "text";

        if (ref.current.src.includes("icons/eyecross.png")) {
            ref.current.src = "icons/eye.png"
            passwordRef.current.type = "password";
        } else {
            ref.current.src = "icons/eyecross.png"
            passwordRef.current.type = "text";
        }

    }

    const savePassword = () => {
       if (form.site.length> 3&& form.username.length>3&&form.password.length>3){
        setPasswordArray([...passwordArray, {...form,id: uuidv4()}])
        
        localStorage.setItem("passwords", JSON.stringify([...passwordArray, {...form,id: uuidv4}]))
        setform({site:"",username:"",password:""})
        toast('Password Saved!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark"
            });
       }else{
        toast('Error :Password Not Saved!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark"
            });
       }
       
    }

    const deltePassword = (id) => {
        let c= confirm("Do you really want to delete this password")
        if (c){
            setPasswordArray(passwordArray.filter(item=>item.id!==id))
         localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item=>item.id!==id)))
         toast('Password Deleted!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark"
            });
        }
    }
    const editPassword=(id)=>{
     setform(passwordArray.filter(i=>i.id===id)[0])
    setPasswordArray(passwordArray.filter(item=>item.id!==id))
    }

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }



    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition="Bounce"
            />
            {/* Same as */}
            <ToastContainer />

            <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div></div>

            <div className="p-2 md:px-0 mycontainer">
                <h1 className='text-4xl text font-bold text-center'>
                    <span className='text-green-700'>/&lt;</span>
                    <span>Pass</span>
                    <span className='text-green-500'>OP/&lt;</span>


                </h1>
                <p className='text-green-900 text-lg text-center'>Your own Password Manager</p>
                <div className=' flex flex-col p-4 text-black gap-8 items-center'>
                    <input value={form.site} onChange={handleChange} placeholder='Enter Website URL' className='rounded-full border border-green-500 w-full p-4 py-1' type="text" name="site" id="site" />
                    <div className='flex flex-col md:flex-row p-4 w-full justify-between gap-8'>
                        <input value={form.username} onChange={handleChange} placeholder='Enter  Username' className=' rounded-full border border-green-500 w-full p-4 py-1' type="text" name="username" id="username" />
                        <div className="relative">
                            <input ref={passwordRef} value={form.password} onChange={handleChange} placeholder='Enter  Password' className='rounded-full border border-green-500 w-full p-4 py-1' type="password" name="password" id="password" />
                            <span className="absolute left right-[3px] top-[3px] cursor-pointer" onClick={showpassword}>
                                <img ref={ref} className='p-1' width={26} src="icons/eye.png" alt="eye" />
                            </span>

                        </div>
                    </div>

                    <button onClick={savePassword} className='flex justify-center gap-3 items-center bg-green-400 hover:bg-green-300 rounded-full px-8 py-2 w-fit border border-green-900'>
                        <lord-icon
                            src="http://cdn.lordicon.com/jgnvfzqg.json"
                            trigger="hover">

                        </lord-icon>
                         Save Password</button>
                </div>
                <div className="passwords">
                    <h2 className='font-bold text-2xl py-4'>Your Passwords</h2>
                    {passwordArray.length === 0 && <div>No Password to show </div>}
                    {passwordArray.length != 0 && <table className="table-auto w-full rounded-md overflow-hidden ">
                        <thead className='bg-green-800 text-white'>
                            <tr>
                                <th className='py-2'>Site</th>
                                <th className='py-2'>Username</th>
                                <th className='py-2'>Password</th>
                                <th className='py-2'>Actions</th>
                            </tr>
                        </thead>
                        <tbody className='bg-green-100'>
                            {passwordArray.map((item, index) => {
                                return <tr key={index}>

                                    < td className='py-2 border border-white text-center '>
                                        <div className='flex items-center justify-center'>
                                            <a href={item.site} target='_blank'><span>{item.site}</span>
                                            </a>
                                            <div className='size-7 cursor-pointer' onClick={() => { copyText(item.site) }}>
                                                <lord-icon
                                                    style={{ "width": "25px", " height": "25px" }}
                                                    src="http://cdn.lordicon.com/iykgtsbt.json"
                                                    trigger="hover"></lord-icon>
                                            </div>
                                        </div>
                                    </td>
                                    < td className='  justify-center py-2 border border-white text-center '>
                                        <div className='flex items-center justify-center'>
                                            {item.username}
                                            <div className='size-7 cursor-pointer' onClick={() => { copyText(item.username) }}>
                                                <lord-icon
                                                    style={{ "width": "25px", " height": "25px" }}
                                                    src="http://cdn.lordicon.com/iykgtsbt.json"
                                                    trigger="hover"></lord-icon>
                                            </div>
                                        </div>
                                    </ td>
                                    < td className=' justify-center py-2 border border-white text-center '>
                                        <div className='flex items-center justify-center'>
                                            {item.password}
                                            <div className='size-7 cursor-pointer' onClick={() => { copyText(item.password) }}>
                                                <lord-icon
                                                    style={{ "width": "25px", " height": "25px" }}
                                                    src="http://cdn.lordicon.com/iykgtsbt.json"
                                                    trigger="hover"></lord-icon>
                                            </div>
                                        </div>
                                    </ td>
                                    < td className=' justify-center py-2 border border-white text-center '>
                                       <span className='cursor-pointer mx-1'onClick={()=>{editPassword(item.id)}}>
                                        <lord-icon
                                        src ="https://cdn.lordicon.com/gwlusjdu.json"
                                        trigger = "hover"
                                        style ={{"width":"25px", "height":"25px"}}></lord-icon>
                                        </span>
                                        <span className='cursor-pointer mx-1'onClick={()=>{deltePassword(item.id)}}>
                                        <lord-icon
                                        src ="https://cdn.lordicon.com/skkahier.json"
                                        trigger = "hover"
                                        style ={{"width":"25px", "height":"25px"}}></lord-icon>
                                       </span>
                                    </ td>
                                </tr>
                            })}


                        </tbody>
                    </table>}
                </div>
            </div>
        </>
    )
}

export default Manager
