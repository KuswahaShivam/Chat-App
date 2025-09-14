import nav from '../assets/svg/Icon.svg'
import search from '../assets/svg/search.svg'
import home from '../assets/svg/HomeIcon.svg'
import library from '../assets/svg/LibraryIcon.svg'
import history from '../assets/svg/historyicon.svg'
import explore from '../assets/svg/Explore.svg'
import profile from '../assets/png/Profile.jpg';
import '../index.css'
const SideBar = () => {
  return (
    <>
      <div className="sidebar w-[25vw] h-[100vh] bg-[#f3f1ff] flex items-center justify-center" >
        <div className="w-80 sm:mx-3 md:mx-3  h-full ">
          <div className="top my-3">
            <img src={nav} width={110} alt="" />
          </div>
          <div className="searchbar flex items-center mx-1 rounded-xl bg-white px-2 ">
            <div className="search w-8 h-8  py-1">
              <img src={search} width={100} alt="" />
            </div>
            <input type="text" className='bg-white w-full h-9 rounded-xl px-2 focus:outline-none ' placeholder='Search for chats' />
          </div>
          <div className="list w-full my-4">
            <div className="home bg-white h-10 rounded-xl flex items-center justify-between px-3 my-3 ">
              <div className="side flex">
                <img src={home} alt="" className='mx-1.5' />
                <p>Home</p>
              </div>

            </div>
            <div className="home bg-white h-10 rounded-xl flex items-center justify-between px-3 my-3 ">
              <div className="side flex">
                <img src={library} alt="" className='mx-1.5' />
                <p>Library</p>
              </div>

            </div>
            <div className="home bg-white h-10 rounded-xl flex items-center justify-between px-3 my-3 ">
              <div className="side flex">
                <img src={history} alt="" className='mx-1.5' />
                <p>History</p>
              </div>

            </div>
            <div className="home bg-white focus:bg-white h-10 rounded-xl cursor-pointer flex items-center justify-between px-3 ">
              <div className="side flex">
                <img src={explore} alt="" className='mx-1.5' />
                <p>Explore</p>
              </div>

            </div>
          </div>

        <div className="last grid grid-row gap-14">
            <div className="recentChats w-full p-1">
            <h3 className='font-bold text-lg'>Recent Chats</h3>

            <p className='bg-white w-full rounded-xl my-2 px-2 h-10 flex items-center'>Lorem, ipsum dolor sit am Lorem ipsum.</p>
            <p className='bg-white w-full rounded-xl my-2 px-2 h-10 flex items-center'>Lorem, ipsum dolor sit am Lorem ipsum.</p>
            <p className='bg-white w-full rounded-xl my-2 px-2 h-10 flex items-center'>Lorem, ipsum dolor sit am Lorem ipsum.</p>
            <p className='bg-white w-full rounded-xl my-2 px-2 h-10 flex items-center'>Lorem, ipsum dolor sit am Lorem ipsum.</p>
            
          </div>

          <div className="profile w-[21vw] px-2 py-2 flex gap-3 items-center bg-white rounded-xl">
            <img src={profile} alt="" className='bg-blue-300 rounded-full w-10 ' />
            <p>Name</p>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default SideBar
