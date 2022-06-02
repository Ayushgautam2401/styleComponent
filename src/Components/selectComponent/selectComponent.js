import React, { Component } from 'react'
import theme from '../../theme'
import ReactSelect from 'react-select'
import styled  from 'styled-components'

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

export const RenderSelectInput = () => {
  return (

    <ReactSelect
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
    />
  )
}
