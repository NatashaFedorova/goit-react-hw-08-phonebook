import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';
import { selectFilterValue } from 'redux/selectors';
import { Description, FilterInput } from './Filter.styled';

const FilterBlock = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectFilterValue);

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
        value={value}
        onChange={handleChange}
      />
    </>
  );
};
export default FilterBlock;
