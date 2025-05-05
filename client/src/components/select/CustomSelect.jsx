import Select from 'react-select';

import { styles, options } from './CustomSelectProps.js';

export default function CustomSelect() {
  return (
    <div className="max-w-[9.5em] w-full">
      <Select
        styles={styles}
        options={options}
        placeholder="choose"
        isSearchable={false}
      />
    </div>
  );
}
