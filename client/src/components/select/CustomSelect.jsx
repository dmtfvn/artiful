import Select from 'react-select';

import { styles, options } from './CustomSelectProps.js';

export default function CustomSelect({
  setState,
}) {
  const selectHandler = (selectedValue) => {
    setState(() => selectedValue);
  }

  return (
    <div className="max-w-[9.5em] w-full">
      <Select
        styles={styles}
        options={options}
        placeholder="Search by"
        isSearchable={false}
        onChange={(val) => selectHandler(val)}
      />
    </div>
  );
}
