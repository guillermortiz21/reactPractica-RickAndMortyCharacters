import React from 'react';

function PageError(props){
  return(
    <h1>{props.error.message}</h1>
  )
}

export default PageError;