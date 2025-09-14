import ChatGpt4 from '../assets/png/Chatgpt.png'
// import Claude from '../assets/png/Claude.png'
// import Copilot from '../assets/png/copilot.png'
// import Gemini from '../assets/png/Gemini.png'
// import Deepseek from '../assets/png/deepseek.png'
import share from '../assets/svg/share.svg'
import info from '../assets/svg/info.svg'
import dropdown from '../assets/svg/dropdown.svg'

const Navbar = () => {
    
    return (
        <>
            <div className="w-full h-15 bg-white rounded-xl flex px-3 justify-between">

                <div className="left w-90  flex items-center justify-between">
                    <div className="dropdown bg-white w-50 h-10 rounded-full border-2 border-blue-400 ">
                        <div className='flex px-4 py-1.5 justify-around'>
                           <div className="left flex ">
                             <img className='w-10' src={ChatGpt4} alt="ChatGPT 4"/>
                             <p>ChatGPT 4</p>
                           </div>
                            <img src={dropdown} alt="" />
                        </div>
                        {/* <div className='flex px-4 py-1.5'>
                            <img className='w-5 mx-2' src={Claude} alt="" />Claude
                        </div>
                        <div className='flex px-4 py-1.5'>
                            <img className='w-5 mx-2' src={Copilot} alt="" />CoPilot
                        </div>
                        <div className='flex px-4 py-1.5'>
                            <img className='w-5 mx-2' src={Gemini} alt="" />Gemini
                        </div>
                        <div className='flex px-4 py-1.5'>
                            <img className='w-5 mx-2' src={Deepseek} alt="" />Deepseek
                        </div> */}
                    </div>
                </div>
                <div className="right px-5 flex text-white font-semibold gap-3 items-center">
                    <img src={share} alt="" className='w-5 '  />
                    <img src={info} alt=""  className='w-5 ' />
                    
                     <button className='bg-blue-600  rounded-full px-4 py-1 flex gap-2 items-center'><h2 className='text-xl'>+</h2> New Chat</button>
                </div>


            </div>
        </>
    )
}

export default Navbar
