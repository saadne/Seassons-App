import React from 'react';
import ReactDOM from 'react-dom';
import SeassonDisplay from './SeassonDisplay';
import Spinner from './Spinner';

class App extends React.Component{
    
    state = {lat: null,errorMessage:''}
    
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat:position.coords.latitude}),
            err =>this.setState({errorMessage: err.message })
            
        )
    }
    renderBody(){
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error: { this.state.errorMessage}</div>
        }
        if(!this.state.errorMessage && this.state.lat){
            return <div><SeassonDisplay lat ={this.state.lat}/></div>
        }
        return <Spinner message = "Please accept location request"/>
        //return <div>loiding</div>
    }
    render() { 
        return(
            <div className="border red">
                {this.renderBody()}
            </div>
        )    
    }
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)