import "../../assets/css/main.css"
import { AiOutlineRight } from "react-icons/ai"
import Layout from "../../Components/Layout"
// import { Input, CreateDynamicElement } from "../Components/ui/formElement"
import { useState } from "react"
import FormElement from "../../Components/ui/FormElement"
import Section from "../../Components/common/Section"
import PopupBox from "../../Components/common/Popupbox"

const Home = () => {
  const [tabName, setTabs] = useState("Basic Info")
  const [isPopupBoxOpen, setPopupBox] = useState(false)
  const [tabCount, settabCount] = useState(1)
  const [text, setText] = useState({
    client_group_name: "",
    email_id: "",
    mobile_no: "",
    address_type: "",
    premises: "",
    address_line1: "",
    address_line2: "",
    state: "",
    city: "",
    pincode: "",

    client_access: "yes",
    client_admin1_first_name: "",
    client_admin1_last_name: "",
    client_admin1_email_id: "",
    client_admin1_mobile_no: "",

    client_admin2_first_name: "",
    client_admin2_last_name: "",
    client_admin2_email_id: "",
    client_admin2_mobile_no: "",

    assigned_firm: "",
    firm_admin1_email_id: "",
    firm_admin1_first_name: "",
    firm_admin1_last_name: "",
    firm_admin1_mobile_no: "",

    firm_admin2_email_id: "",
    firm_admin2_first_name: "",
    firm_admin2_last_name: "",
    firm_admin2_mobile_no: "",
  })
  console.log(tabCount)
  const handlechange = (e: any) => {
    setText((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }
  const changeTab = (e: any) => {
    if (tabName === "Basic Info") {
      settabCount(2)
      setTabs("Client Access")
    } else if (tabName === "Client Access") {
      settabCount(3)
      setTabs("Firm Access")
    } else if (tabName === "Firm Access") {
      // settabCount(3)
      setPopupBox(true)
    }
  }
  const personal_details = [
    {
      type: "text",
      name: "client_group_name",
      placeholder: "Client Group Name",
      value: text.client_group_name,
      onChange: handlechange,
      innerClassname: "general_element_design",
      outerClassname: "inputbox",
    },
    {
      type: "text",
      name: "email_id",
      placeholder: "Email ID",
      onChange: handlechange,
      innerClassname: "general_element_design",
      outerClassname: "inputbox",
    },

    {
      type: "text",
      name: "mobile_no",
      placeholder: "Mobile No.",
      onChange: handlechange,
      innerClassname: "general_element_design",
      outerClassname: "inputbox",
    },
  ]
  const Address = [
    {
      type: "select",
      name: "address_type",
      placeholder: "Address Type",
      onChange: handlechange,
      options: [
        { value: "Registered Office", label: "Registered Office" },
        { value: "UnRegistered Office", label: "UnRegistered Office" },
      ],
      innerClassname: "general_element_design",
      outerClassname: "inputbox",
    },
    {
      type: "select",
      name: "premises",
      placeholder: "Premises",
      onChange: handlechange,
      options: [
        { value: "Owned", label: "Owned" },
        { value: "Rental", label: "Rental" },
      ],
      innerClassname: "general_element_design",
      outerClassname: "inputbox",
    },
    {
      type: "text",
      name: "address_line1",
      placeholder: "Address Line 1",
      onChange: handlechange,
      innerClassname: "general_element_design join_grid",
      outerClassname: "inputbox mid_to_last_grid_join",
    },
    {
      type: "text",
      name: "address_line2",
      placeholder: "Address Line 2",
      onChange: handlechange,
      innerClassname: "general_element_design join_grid",
      outerClassname: "inputbox first_to_mid_grid_join",
    },
    {
      type: "text",
      name: "state",
      placeholder: "State",
      onChange: handlechange,
      innerClassname: "general_element_design",
      outerClassname: "inputbox",
    },
    {
      type: "select",
      name: "city",
      placeholder: "City",
      onChange: handlechange,
      options: [
        { value: "Mumbai", label: "Mumbai" },
        { value: "Pune", label: "Pune" },
      ],
      innerClassname: "general_element_design",
      outerClassname: "inputbox",
    },
    {
      type: "text",
      name: "pincode",
      placeholder: "Pincode",
      onChange: handlechange,
      innerClassname: "general_element_design",
      outerClassname: "inputbox",
    },
  ]
  const Client_Admin1 = [
    {
      type: "text",
      name: "client_admin1_first_name",
      placeholder: "First Name",
      value: text.client_group_name,
      onChange: handlechange,
      innerClassname: "general_element_design",
      outerClassname: "inputbox",
    },
    {
      type: "text",
      name: "client_admin1_last_name",
      placeholder: "Last Name",
      value: text.client_group_name,
      onChange: handlechange,
      innerClassname: "general_element_design",
      outerClassname: "inputbox",
    },
    {
      type: "text",
      name: "client_admin1_email_id",
      placeholder: "Email ID",
      value: text.client_group_name,
      onChange: handlechange,
      innerClassname: "general_element_design",
      outerClassname: "inputbox",
    },
    {
      type: "text",
      name: "client_admin1_mobile_no",
      placeholder: "Mobile No.",
      value: text.client_group_name,
      onChange: handlechange,
      innerClassname: "general_element_design",
      outerClassname: "inputbox",
    },
  ]
  const Client_Admin2 = [
    {
      type: "text",
      name: "client_admin2_first_name",
      placeholder: "First Name",
      value: text.client_group_name,
      onChange: handlechange,
      innerClassname: "general_element_design",
      outerClassname: "inputbox",
    },
    {
      type: "text",
      name: "client_admin2_last_name",
      placeholder: "Last Name",
      value: text.client_group_name,
      onChange: handlechange,
      innerClassname: "general_element_design",
      outerClassname: "inputbox",
    },
    {
      type: "text",
      name: "client_admin2_email_id",
      placeholder: "Email ID",
      value: text.client_group_name,
      onChange: handlechange,
      innerClassname: "general_element_design",
      outerClassname: "inputbox",
    },
    {
      type: "text",
      name: "client_admin2_mobile_no",
      placeholder: "Mobile No.",
      value: text.client_group_name,
      onChange: handlechange,
      innerClassname: "general_element_design",
      outerClassname: "inputbox",
    },
  ]

  const Firm_Access = [
    {
      type: "text",
      name: "assigned_firm",
      placeholder: "Assigned Firm",
      value: text.client_group_name,
      onChange: handlechange,
      innerClassname: "general_element_design",
      outerClassname: "inputbox",
    },
  ]

  const Firm_admin1 = [
    {
      type: "text",
      name: "firm_admin1_email_id",
      placeholder: "Emain ID",
      value: text.client_group_name,
      onChange: handlechange,
      innerClassname: "general_element_design",
      outerClassname: "inputbox",
    },
    {
      type: "text",
      name: "firm_admin1_first_name",
      placeholder: "First Name",
      value: text.client_group_name,
      onChange: handlechange,
      innerClassname: "general_element_design",
      outerClassname: "inputbox",
    },
    {
      type: "text",
      name: "firm_admin1_last_name",
      placeholder: "Last Name",
      value: text.client_group_name,
      onChange: handlechange,
      innerClassname: "general_element_design",
      outerClassname: "inputbox",
    },
    {
      type: "text",
      name: "firm_admin1_mobile_no",
      placeholder: "Mobile No.",
      value: text.client_group_name,
      onChange: handlechange,
      innerClassname: "general_element_design",
      outerClassname: "inputbox",
    },
  ]
  const Firm_admin2 = [
    {
      type: "text",
      name: "firm_admin2_email_id",
      placeholder: "Emain ID",
      value: text.client_group_name,
      onChange: handlechange,
      innerClassname: "general_element_design",
      outerClassname: "inputbox",
    },
    {
      type: "text",
      name: "firm_admin2_first_name",
      placeholder: "First Name",
      value: text.client_group_name,
      onChange: handlechange,
      innerClassname: "general_element_design",
      outerClassname: "inputbox",
    },
    {
      type: "text",
      name: "firm_admin2_last_name",
      placeholder: "Last Name",
      value: text.client_group_name,
      onChange: handlechange,
      innerClassname: "general_element_design",
      outerClassname: "inputbox",
    },
    {
      type: "text",
      name: "firm_admin2_mobile_no",
      placeholder: "Mobile No.",
      value: text.client_group_name,
      onChange: handlechange,
      innerClassname: "general_element_design",
      outerClassname: "inputbox",
    },
  ]

  return (
    <Layout>
      <div className='Breadcrumb'>
        Group Settings <AiOutlineRight /> <b>Account/Group Details</b>
      </div>

      <div className='tabs'>
        <div className='startborderHexagon'>
          <div
            className='starthexagon'
            style={tabCount < 2 ? { backgroundColor: "white" } : {}}
          >
            <span style={{ marginLeft: 24 }}>Basic Info</span>
          </div>
        </div>
        <div className='midborderHexagon'>
          <div
            className='midhexagon'
            style={tabCount < 3 ? { backgroundColor: "white" } : {}}
          >
            <span style={{ marginLeft: 24 }}>Client Access</span>
          </div>
        </div>
        <div className='endborderhexagon'>
          <div
            className='endhexagon'
            style={tabCount < 4 ? { backgroundColor: "white" } : {}}
          >
            <span style={{ marginLeft: 24 }}>Firm Access</span>
          </div>
        </div>
      </div>
      <div className='container'>
        {tabName === "Basic Info" ? (
          <>
            <Section title='Basic Information' className='main_form_section'>
              <FormElement INPUT_DATA={personal_details} />
            </Section>
            <Section title='Address' className='main_form_section'>
              <FormElement INPUT_DATA={Address} />
            </Section>
          </>
        ) : tabName === "Client Access" ? (
          <>
            <div style={{ display: "flex", margin: "18px 24px" }}>
              <b>Client Access</b>
              <div className='radiobtn'>
                <input
                  type='radio'
                  name='client_access'
                  value='yes'
                  onChange={handlechange}
                  checked
                />
                Yes
              </div>
              <div className='radiobtn'>
                <input
                  type='radio'
                  name='client_access'
                  value='no'
                  onChange={handlechange}
                />
                No
              </div>
            </div>
            <div style={{ margin: "0 24px", fontWeight: "bold" }}>
              Client Admin Users
            </div>
            <Section title='Client Admin#1' className='main_form_section'>
              <FormElement INPUT_DATA={Client_Admin1} />
            </Section>
            <Section title='Client Admin#2' className='main_form_section'>
              <FormElement INPUT_DATA={Client_Admin2} />
            </Section>
          </>
        ) : (
          <>
            <Section className='main_form_section'>
              <FormElement INPUT_DATA={Firm_Access} />
            </Section>
            <Section title='Firm Admin#1:' className='main_form_section'>
              <FormElement INPUT_DATA={Firm_admin1} />
            </Section>
            <Section title='Firm Admin#2:' className='main_form_section'>
              <FormElement INPUT_DATA={Firm_admin2} />
            </Section>
          </>
        )}
        {isPopupBoxOpen === true && (
          <PopupBox
            close={(value: boolean) => {
              setPopupBox(value)
            }}
            save={(data: string) => {
              data === "save" && console.log(text)
            }}
          />
        )}
        <div style={{ margin: 24, bottom: "60px" }}>
          <button className='button_primary' onClick={(e: any) => changeTab(e)}>
            Save
          </button>
        </div>
      </div>
    </Layout>
  )
}

export default Home
