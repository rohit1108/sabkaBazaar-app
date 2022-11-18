import "./Input.scss";
const Input = ({type,id, className, onChange, values}) =>{
        return (
            <input
                type={type}
                id={id}
                className={className}  
                value={values}
                onChange={onChange}
            />
        )
     }
export default Input