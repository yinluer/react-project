import React from 'react';

export default function ChildrenMethodTest(props) {
  return (
    <div>
      {React.Children.map(props.children, item => <div>{item}eee</div>)}
    </div>
  )
}