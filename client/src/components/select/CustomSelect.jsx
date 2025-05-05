import Select from 'react-select';

import { styles, options } from './CustomSelectProps.js';

export default function CustomSelect() {
  return (
    <Select
      styles={styles}
      options={options}
      placeholder="choose"
      isSearchable={false}
    // menuIsOpen={true}
    />
  );
}
