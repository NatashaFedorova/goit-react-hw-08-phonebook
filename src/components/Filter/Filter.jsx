import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/contacts/filterSlice';
import { selectFilterValue } from 'redux/contacts/selectors';
import { Description, FilterInput } from './Filter.styled';

const FilterBlock = () => {
  const dispatch = useDispatch();
  const handleChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <>
      <Description>Find contacts by name</Description>
      <FilterInput
        type="text"
        name="filter"
        autoComplete="off"
        onChange={handleChange}
      />
    </>
  );
};
export default FilterBlock;
