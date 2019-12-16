import React, { Component } from 'react';
import cls from './App.module.scss';
import Car from './Car/Car'

class App extends Component {

  state = {
    cars: [
      {name: 'Ford', year: 2018},
      {name: 'Audi', year: 2016},
      {name: 'Mazda', year: 2010}
    ],
    pageTitle: 'React components',
    showCars: false
  }

  toggleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  }

 onChangeName(name, index) {
    console.log(name, index);
    const car = this.state.cars[index];
    car.name = name;
    const cars = [...this.state.cars];
    cars[index] = car
    this.setState({
      cars: cars
    })
 }


 deleteHandler(index) {
    const cars = this.state.cars.concat();
    cars.splice(index, 1);
    this.setState({
      cars: cars
    })
 }


  render() {
    const divStyle = {
      textAlign: 'center'
    }


    return (
      <div style={divStyle}>
        <h1>{this.state.pageTitle}</h1>
        
        <button onClick={this.toggleCarsHandler} className={cls.AppButton}>Toggle cars</button>
        
        { this.state.showCars
          ? this.state.cars.map((car, index) => {
              return(
                <div style={{
                  width: 400,
                  margin: 'auto',
                  paddingTop: '20px'
                }}>
                  <Car 
                    key={index}
                    name={car.name}
                    year={car.year}
                    onDelete={this.deleteHandler.bind(this, index)}
                    onChangeName={event => this.onChangeName(event.target.value, index)}
                  />
                </div>
              )
            })
          : null
        }

        {/* <Car 
          name={cars[0].name} 
          year={cars[0].year}
          onChangeTitle={this.changeTitleHandler.bind(this, cars[0].name)}
        />
        <Car 
          name={cars[1].name} 
          year={cars[1].year}
          onChangeTitle={() => this.changeTitleHandler(cars[1].name)}
        />
        <Car 
          name={cars[2].name} 
          year={cars[2].year}
          onChangeTitle={() => this.changeTitleHandler(cars[2].name)}
        /> */}
      </div>
    );
  }
}

export default App;
