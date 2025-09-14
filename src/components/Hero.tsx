// import React from 'react'

import pin from 'public\pin.svg'
import camera from 'public\camera.svg'
import sendbutton from 'public\sendbutton.svg'
import Card  from './Card'

const Hero = () => {
    return (
        <>
            <div className="flex justify-center h-[90vh]">
                <div className="container w-[60vw] h-full  ">
                    <div className="text-wrapper p-6">
                        <h1 className="text-2xl font-bold ">👋🏼 Hi Laurence!</h1>
                        <p className="w-90 text-4xl my-2">What Do you Want to learn Today?</p>
                    </div>
                    
                    <Card/>


                    {/* Prompt Area */}
                    <div className="footer border-2 border-slate-200 rounded-2xl px-1">
                        <textarea name="text" id="" className='border border-slate-200 rounded-2xl w-full p-3 my-4 ' placeholder='Ask Me A Question...'></textarea>
                        <div className="last p-2 flex justify-between">
                                <div className="left flex gap-2">
                                    <img src={pin} alt="" width={20} /><img src={camera} width={20} alt="" />
                                </div>
                                <div className="right flex gap-4 items-center ">
                                    <div className="text">0/1000</div>
                                    <div className="button bg-blue-400 justify-center flex p-2 rounded-full">
                                        <img src={sendbutton} alt="" />
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>

        </>)

}
export default Hero



