import CollectionItem from "./collection-item";

function FormInput({ handleChange, label, ...otherProps }) {
    return (
        <div className='flex flex-col mb-4'>
            {label ? <label>{label}</label> : null}
            <input className='border p-2' onChange={handleChange} {...otherProps} />
        </div>
    );
}

export default FormInput;
