import React from 'react'
import Radium from 'radium';
import cls from './Car.module.css';


const Car = props => {

  let inputClasses = [cls.input];

  if (props.name !== '') {
    inputClasses.push(cls.yellow);
  } else  {
    inputClasses.push(cls.red);
  }

  if (props.name.length > 3) {
    inputClasses.push(cls.bold);
  }

  const style = {
    boxShadow: '0 4px 5px 0 rgba(0, 0, 0, .14)',
    border: '1px solid #ccc',
    ':hover': {
      border: '1px solid #aaa',
      boxShadow: '0 4px 15px 0 rgba(0, 0, 0, .25)',
      cursor: 'pointer'
    }

  }

  return (
    <div className={cls.Car} style={style}>
      <h3>Сar name: {props.name}</h3>
      <p>Year: <strong>{props.year}</strong></p>
      <input 
        type="text" 
        onChange={props.onChangeName} 
        value={props.name}
        className={inputClasses.join(' ')}
      />
      <button onClick={props.onDelete}>Delete</button>
    </div>
  )
}

export default Radium(Car)