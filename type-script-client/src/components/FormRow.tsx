//review types later... set them up for now to be able to create a build and link BE and FE

type FormRowProps = {
  type? : any;
  name?:  any;
  value? : any;
  handleChange? : any;
  labelText? : any;
  handleOnKeyDown? : any;
  handleBlur? : any;
  handleFocus? : any;
  selected? : boolean;
}

const FormRow = ({ type, name, value, handleChange, labelText, handleOnKeyDown, handleBlur, handleFocus, selected }: FormRowProps) => {
  return (
    <div className='form-row'>
      <label htmlFor={name} className={selected ? 'form-label form-label-selected' : 'form-label'}>
        {labelText || name}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        onKeyDown={handleOnKeyDown}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className='form-input'
      />
    </div>
  );
};
export default FormRow;
