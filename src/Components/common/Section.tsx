const Section = ({ title, className, children }: any) => {
  return (
    <div className={className}>
      {title !== "" && <h4>{title}</h4>}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
        }}
      >
        {children}
      </div>
    </div>
  )
}

export default Section
