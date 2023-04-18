import { FormRow, FormRowSelect } from '.';
import Wrapper from '../assets/wrappers/SearchContainer';
import { useSelector, useDispatch } from 'react-redux';
import { handleChange, clearFilters } from '../features/allJobs/allJobsSlice';
import { useState } from 'react';

const SearchContainer = () => {
  const { isLoading, search, searchStatus, searchType, sort, sortOptions } =
    useSelector((store) => store.allJobs);

  const { jobTypeOptions, statusOptions } = useSelector((store) => store.job);

  const [selects, setSelects] = useState({
    search: search ? true : false,
  })

  const handleFocus = (e) => {
    const title = e.target.name
    const value = !selects[title]
    if(!search){
      setSelects({ ...selects, [title]: value });
    }
  };

  const handleBlur = (e) => {
    const title = e.target.name
    const value = !selects[title]
  
    if(!search){
      setSelects({ ...selects, [title]: value });
    }
  };

  const dispatch = useDispatch();

  const handleSearch = (e) => {
    if (isLoading) return;
    dispatch(handleChange({ name: e.target.name, value: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(clearFilters());
  };

  return (
    <Wrapper>
      <form className='form'>
        <h4>Find Teams</h4>
        <div className='form-center'>
          {/* search position */}
          <FormRow
            type='text'
            name='search'
            value={search}
            handleChange={handleSearch}

            handleFocus={handleFocus}
            handleBlur={handleBlur}
            selected={selects.search}
          />
          <button
            className='btn btn-block btn-danger'
            disabled={isLoading}
            onClick={handleSubmit}
          >
            clear filters
          </button>
        </div>
      </form>
    </Wrapper>
  );
};
export default SearchContainer;
