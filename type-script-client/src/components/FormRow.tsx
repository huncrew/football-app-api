const FormRow = ({ type, name, value, handleChange, labelText, handleOnKeyDown, handleBlur, handleFocus, selected }) => {
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
