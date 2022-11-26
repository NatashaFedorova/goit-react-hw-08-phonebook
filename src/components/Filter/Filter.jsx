import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/contacts/filterSlice';
import { FilterInput } from './Filter.styled';

const FilterBlock = () => {
  const dispatch = useDispatch();
  const handleChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <FilterInput
      type="text"
      name="filter"
      autoComplete="off"
      placeholder="Find contacts by name"
      onChange={handleChange}
    />
  );
};
export default FilterBlock;
