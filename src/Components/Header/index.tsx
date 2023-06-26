import "./header.css"
import DigitalHive from "../../assets/icons/digital_hive.png"
import { LuBellDot } from "react-icons/lu"
import { RiSettingsLine } from "react-icons/ri"
import { FiSearch } from "react-icons/fi"

const header = () => {
  return (
    <>
      <div className='header'>
        <div className='logo-section'>
          <img src={DigitalHive} alt='digital hive' className='logo-img' />
          <span className='logo'>D'LittMan</span>
        </div>
        <div className='other-section'>
          <div className='header-icons'>
            <FiSearch size={24} />
          </div>
          <div className='header-icons'>
            <RiSettingsLine size={24} />
          </div>
          <div className='header-icons'>
            <LuBellDot size={24} />
          </div>
          <div className='profile'>
            <span>A</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default header
