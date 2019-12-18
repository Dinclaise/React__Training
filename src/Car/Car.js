import React from 'react'
import cls from './Car.module.css';
import withClass from './../hoc/withClass';
import PropTypes from 'prop-types';



class Car extends React.Component {

  constructor(props) {
    super(props)

    this.inputRef = React.createRef();
  }

  componentDidMount() {
    if (this.props.index === 0) {
      this.inputRef.current.focus() 
    }
  }

  render() {
    console.log('Car render')
    let inputClasses = [cls.input];

  if (this.props.name !== '') {
    inputClasses.push(cls.yellow);
  } else  {
    inputClasses.push(cls.red);
  }

  if (this.props.name.length > 3) {
    inputClasses.push(cls.bold);
  }

  return (
    <React.Fragment>
      <h3>Сar name: {this.props.name}</h3>
      <p>Year: <strong>{this.props.year}</strong></p>
      <input 
        ref={this.inputRef}
        type="text" 
        onChange={this.props.onChangeName} 
        value={this.props.name}
        className={inputClasses.join(' ')}
      />
      <button onClick={this.props.onDelete}>Delete</button>
    </React.Fragment>
  )
  }
}

Car.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.number,
  index: PropTypes.number,
  onChangeName: PropTypes.func,
  onDelete: PropTypes.func
}

export default withClass(Car, cls.Car)