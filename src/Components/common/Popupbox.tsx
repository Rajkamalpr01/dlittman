import savefile from "../../assets/icons/popupfile.png"
type popupBoxprops = {
  close: any
  save: any
}
const Popup = ({ close, save }: popupBoxprops) => {
  return (
    <div className='popupBox'>
      <button className='close' onClick={() => close(false)}>
        X
      </button>
      <div className='d-flex justifyCenter'>
        <h4>Unsaveed Changes</h4>
      </div>
      <div className='d-flex justifyCenter'>
        <img src={savefile} alt='Popup box icon' />
      </div>
      <div className='d-flex justifyCenter'>
        <b>Their are Unsaved Changes</b>
      </div>
      <div className='d-flex justifyCenter' style={{ fontSize: 14 }}>
        Are you sure want to cancel?
      </div>

      <div className='d-flex justifyCenter'>
        <button className='cancel_shanges_btn' onClick={() => close(false)}>
          Cancel
        </button>
        <button className='save_changes_btn' onClick={() => save("save")}>
          Save Changes
        </button>
      </div>
    </div>
  )
}

export default Popup
