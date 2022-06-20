
import React from 'react'
import Select from 'react-select'
export const RenderSelectInput = ({input, options, ...props}) => {
  // console.log ("ptani",input,props)
  return (
    <Select
      {...input}
      options={options}
      theme={(theme) => ({
        ...theme,
        borderRadius: "10px",
        colors: {
          ...theme.colors,
          primary25: '#197A56',
          primary: 'black',
        },
      })}
      onChange={(value) => {
        input.onChange(value);
      }}
      onBlur={() => input.onBlur(input.value)}
    />
  )
}
