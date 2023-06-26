type CreateDynamicElementType = {
  INPUT_DATA: Array<{
    type: string
    title?: string
    name?: string
    placeholder?: string
    value?: any
    onChange?: any
    options?: any
    innerClassname?: string
    outerClassname?: string
  }>
}

const FormElement = (CreateDynamicElement: CreateDynamicElementType) => {
  const { INPUT_DATA } = CreateDynamicElement
  return (
    <>
      {INPUT_DATA.map((data: any) => {
        return (
          <>
            {data.type === "text" ? (
              <div className={data.outerClassname}>
                <label>{data.placeholder}</label>
                <input
                  type={data.type}
                  name={data.name}
                  placeholder={data.placeholder}
                  onChange={data.onChange}
                  className={data.innerClassname}
                />
              </div>
            ) : data.type === "select" ? (
              <div className={data.outerClassname}>
                <label>{data.placeholder}</label>
                <select
                  name={data.name}
                  className={data.innerClassname}
                  onChange={data.onChange}
                >
                  {data.options.map((opt: any) => {
                    return <option value={opt.value}>{opt.label}</option>
                  })}
                </select>
              </div>
            ) : (
              data.type === "button" && (
                <div style={{ display: "flex", alignItems: "center" }}>
                  <button type={data.type} className={data.innerClassname}>
                    {data.title}
                  </button>
                </div>
              )
            )}
          </>
        )
      })}
    </>
  )
}

export default FormElement
