//review types later... set them up for now to be able to create a build and link BE and FE
// remember to also review the list witht he map below

type FormRowSelectProps = {
  labelText? : any;
  name? : any;
  value? : any;
  handleChange : any;
  list? : any;
}

// type listMapObj = {
//   itemValue? : any;
//   index? : any;
// }

const FormRowSelect = ({ labelText, name, value, handleChange, list }: FormRowSelectProps) => {
  return (
    <div className='form-row'>
      <label htmlFor={name} className='form-label'>
        {labelText || name}
      </label>
      <select
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
        className='form-select'
      >
        {list.map((itemValue: any, index: number) => {
          return (
            <option key={index} value={itemValue}>
              {itemValue}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default FormRowSelect;
