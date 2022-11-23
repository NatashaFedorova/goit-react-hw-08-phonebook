import BarLoader from 'react-spinners/BarLoader';
import { Box } from './Loader.styled';

const Loader = () => {
  return (
    <Box>
      <BarLoader color="#ff7700" width={120} />
    </Box>
  );
};

export default Loader;
