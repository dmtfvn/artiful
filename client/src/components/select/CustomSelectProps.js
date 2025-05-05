export const styles = {
  control: (baseStyles) => ({
    ...baseStyles,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    width: '100%',
    minHeight: 0,
    border: 'none',
    borderRadius: '0.375rem',
    boxShadow: 'none',
    cursor: 'pointer',
  }),
  menu: (baseStyles) => ({
    ...baseStyles,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: '0.375rem',
    marginTop: '0.375em',
    padding: '0.125em 0',
    boxShadow: 'none',
  }),
  option: (baseStyles, state) => ({
    ...baseStyles,
    backgroundColor: state.isFocused ? 'rgb(0, 0, 0)' : 'none',
    padding: '0.375em 0.5em',
    color: state.isSelected ? 'rgb(128, 128, 128)' : 'rgb(51, 51, 51)',
  }),
  singleValue: (baseStyles) => ({
    ...baseStyles,
    color: 'rgb(54, 65, 83)',
    margin: 0,
  }),
  dropdownIndicator: (baseStyles) => ({
    ...baseStyles,
    color: 'rgb(54, 65, 83)',
    ':hover': {
      color: 'none',
    },
  }),
  indicatorSeparator: (baseStyles) => ({
    ...baseStyles,
    display: 'none',
  }),
  placeholder: (baseStyles) => ({
    ...baseStyles,
    color: 'rgb(54, 65, 83)',
    margin: 0,
  })
};

export const options = [
  { value: 'art-name', label: 'Art name' },
  { value: 'art-creator', label: 'Art creator' },
];
