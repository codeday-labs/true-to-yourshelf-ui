import '../styles/Results.css';
import ReactDOM from 'react-dom';
import Header from '../components/Header';
import Cards from '../components/Cards';
import React from 'react';
import { Modal } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import getEmotions from "../api/TrueToYourShelfApi";

import { render } from '@testing-library/react';
import TrueToYourShelfApi from "../api/TrueToYourShelfApi";


const root = ReactDOM.createRoot(document.getElementById('root'));
var emotion = "EMOTION"


class Results extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            emotions: []
        }
    }
    componentDidMount() {
        TrueToYourShelfApi.getEmotions()
            .then(response => {
                this.setState({emotions: response})
            })
            .catch(error => console.log(error));
    }

    render(){
        return (
            <div className='Container'>
                <Header/>
                <div className="static-modal">
                <Modal.Dialog className='testing'>
                    <Modal.Header>   <Modal.Title>How are you feeling?</Modal.Title>   </Modal.Header> 
                    <Modal.Body>EMOTION HERE</Modal.Body> 
                    <Modal.Header >   <Modal.Title>How do you want to feel?</Modal.Title>   </Modal.Header>
                    <Modal.Body>OTHER EMOTION HERE</Modal.Body>
                </Modal.Dialog>
                </div>          
                <h1 className='title'>Here are some book recommendations for {emotion}</h1>

                <select>
                    {this.state.emotions.map(emotion =>(
                        <option key={emotion} value={emotion}>
                            {emotion}
                        </option>
                        ))}
                </select>

                <Cards/>
            </div>
        );
    }
}
root.render(<Results/>);
export default Results;