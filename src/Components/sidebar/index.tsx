import "./sidebar.css"
import { LuLayoutDashboard } from "react-icons/lu"
import { RiCalendar2Line, RiFileList3Line } from "react-icons/ri"
import { IoMdAddCircleOutline } from "react-icons/io"

const Sidebar = () => {
  return (
    <>
      <div className='sidebar-container'>
        <div className='sidebar-navs'>
          <div className='clickable-icon'>
            <LuLayoutDashboard size={28} />
            <span className='title'>Dashboard</span>
          </div>
          <div className='clickable-icon'>
            <RiCalendar2Line size={28} />
            <span className='title'>Calender</span>
          </div>
          <div className='clickable-icon active'>
            <IoMdAddCircleOutline size={28} />
            <span className='title'>Create</span>
          </div>
          <div className='clickable-icon'>
            <RiFileList3Line size={28} />
            <span className='title'>Report</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar
