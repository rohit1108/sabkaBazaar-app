import "./Label.scss";
const Label = ({id,label, hint, className}) =>{
    return (
        <label 
            htmlFor={id} 
            className={className}>
                <span>{label}</span>
                <span className="hint">{hint}</span>
        </label>
    )
}

export default Label;