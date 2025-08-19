    import React from 'react'
    import { useRef } from 'react'

    const Manager = () => {
        const showpassword = ()=>{
            const ref=useRef()
            ref.current.src="icons/eyecross.png"

        }
        return (
            <>
                <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div class="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div></div>

                <div className="   mycontainer">
                    <h1 className='text-3xl font-bold text-center' >
                        <span className='text-green-500'>&lt;</span>
                        Pass
                        <span className='text-green-500'>OP&gt;</span></h1>
                    <p className='text-lg text-center text-green-500' >Your own Password Manager </p>

                    <div className=' flex flex-col gap-8 p-4 items-center ' >
                        <input placeholder='Enter website URL' className='bg-white rounded-full text-black border w-full border-green-500 p-3 py-1 ' type="text" />
                        <div className="flex w-full gap-8">
                            <input placeholder='Enter Username' className='bg-white rounded-full text-black border w-full border-green-500 p-3 py-1 ' type="text" />
                            <div className="relative">
                                <input placeholder='Enter Password' className='bg-white rounded-full text-black border w-full border-green-500 p-3 py-1 ' type="text" />
                                <span className='absolute right-[3px] top-[3px] cursor-pointer ' onClick={showpassword}>
                                    <img  className='p-1' width={30} src="icons/eye.png" alt="eye"/>
                                </span>
                            </div>
                        </div>

                        <button className='text-white gap-2 text-black flex justify-center items-center rounded-full bg-green-400 hover:bg-green-300 px-6 py-2 w-fit border border-green-600 ' >
                            <lord-icon
                                src="https://cdn.lordicon.com/efxgwrkc.json"
                                trigger="hover">
                            </lord-icon>
                            Add Password
                        </button>
                    </div>
                </div>
            </>

    )
}

export default Manager
