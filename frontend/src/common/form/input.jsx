import React from 'react';

// import { Container } from './styles';

export default function form(props) {
  return (
    <input {...props.input}
      className='form-control'
      placeholder={props.placeholder}
      readOnly={props.readOnly}
      type={props.type} />
  );
}
