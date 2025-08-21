import React, { useEffect, useState } from 'react'
import { useRef } from 'react'

const Manager = () => {
    const ref = useRef()
    const [form, setform] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setpasswordArray] = useState([])

    useEffect(() => {
        let passwords = localStorage.getItem("passwords")
        if (passwords) {
            setpasswordArray(JSON.parse(passwords))
        }
    }, [])



    const showpassword = () => {
        if (ref.current.src.includes("icons/eyecross.png")) {
            ref.current.src = "icons/eye.png"
        }
        else {
            ref.current.src = "icons/eyecross.png"
        }
    }


    const savePassword = () => {
        setpasswordArray([...passwordArray, form])
        localStorage.setItem("password", JSON.stringify([...passwordArray, form]))
        console.log([...passwordArray, form])
    }

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }




    return (
        <>
            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div></div>

            <div className="   mycontainer">
                <h1 className='text-3xl font-bold text-center' >
                    <span className='text-green-500'>&lt;</span>
                    Pass
                    <span className='text-green-500'>OP&gt;</span></h1>
                <p className='text-lg text-center text-green-500' >Your own Password Manager </p>

                <div className=' flex flex-col gap-8 p-4 items-center ' >


                    <input value={form.site} onChange={handleChange} placeholder='Enter website URL' className='bg-white rounded-full text-black border w-full border-green-500 p-3 py-1 '
                        type="text" name="site" />


                    <div className="flex w-full gap-8">

                        <input value={form.username} onChange={handleChange} placeholder='Enter Username' className='bg-white rounded-full text-black border w-full border-green-500 p-3 
                        py-1 ' type="text" name="username" />


                        <div className="relative">

                            <input value={form.password} onChange={handleChange} placeholder='Enter Password' className='bg-white rounded-full text-black border w-full border-green-500 p-3 
                            py-1 ' type="text" name='password' />


                            <span className='absolute right-[3px] top-[3px] cursor-pointer ' onClick={showpassword}>
                                <img ref={ref} className='p-1' width={30} src="icons/eye.png" alt="eye" />
                            </span>
                        </div>
                    </div>

                    <button onClick={savePassword} className='text-white gap-2  flex justify-center items-center rounded-full bg-green-400 hover:bg-green-300 px-6 py-2 w-fit border border-green-600 ' >
                        <lord-icon
                            src="https://cdn.lordicon.com/efxgwrkc.json"
                            trigger="hover">
                        </lord-icon>
                        Add Password
                    </button>
                </div>
                <div className="passwords">
                    <h2 className='font-bold text-2xl py-4 '  >Your Passwords</h2>
                    {passwordArray.length===0 && <div>No Passwords to Show</div>}
                    {passwordArray.length !=0 &&<table className="table-auto w-full rounded-md  overflow-hidden">
                        <thead className='bg-green-700 text-white' >
                            <tr>
                                <th className='py-2' >Site</th>
                                <th className='py-2' >Username</th>
                                <th className='py-2' >Password</th>
                            </tr>
                        </thead>
                        <tbody className='bg-green-100' >
                            {passwordArray.map((item,index)=>{
                                return<tr key={index} >
                                <td className=' border border-white py-2 text-center w-32' ><a href={item.site} target='_blank' >{item.site}</a></td>
                                <td className=' border border-white py-2 text-center w-32' >{item.username} </td>
                                <td className=' border border-white py-2 text-center w-32' >{item.password}</td>
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
