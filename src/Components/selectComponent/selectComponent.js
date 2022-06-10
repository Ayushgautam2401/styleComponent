import React, { Component } from 'react'
import theme from '../../theme'
import Select from 'react-select'
import styled from 'styled-components'
export const RenderSelectInput = ({input, options, ...props}) => {
  console.log ("ptani",input,props)
  return (
    <Select
      {...input}
      options={options}
      theme={(theme) => ({
        ...theme,
        borderRadius: "10px",
        colors: {
          ...theme.colors,
          primary25: 'blue',
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
