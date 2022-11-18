import Label from "../../atoms/Label/Label";
import Input from '../../atoms/Input/Input';
import "./inputitem.scss";
const InputItem = ({type,id,label,onChange, values, errors, name, hint}) =>{
    return(
    <div className="input-item">
            <Label id={id} label={label} hint ={hint} className="label" />
            <Input  type={type}
                    id={id}
                    name={name}
                    className="input"
                    value={values}
                    onChange={onChange}
                    />
                {errors&& (
                <p className="form-error">{errors}</p>
                )}
    </div>
    )
    }
    export default InputItem;