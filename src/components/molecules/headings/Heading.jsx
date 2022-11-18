const Heading = ({heading,className,children}) =>{
    return (
        <div className={className}>
            <h1>{heading}</h1>
            <p>{children}</p>
        </div>
    )
 }
export default Heading

