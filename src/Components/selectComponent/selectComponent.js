import React, { Component } from 'react'
import theme from '../../theme'
import ReactSelect from 'react-select'
import styled  from 'styled-components'
import { useLocation } from 'react-router-dom'

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

export const RenderSelectInput = () => {
  const location = useLocation();
  return (
    <>
    {location.pathname === `/select` ?(
      <p>select components</p>  
        ):null}
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
    </>
  )
}
