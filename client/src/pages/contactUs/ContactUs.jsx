import React from 'react-dom';
import Navbar from '../../components/navbar/Navbar';
import './contactUs.scss';
export default function ContactUs(){
return(
    <div className="contactUs">
        <Navbar/>
        <div className="contactContainer">
            <h2>If you have any questions or you're having an issue, you can message us here</h2>
            <form>
                <input type="text" placeholder="Enter your message here "/>
                <button className="messageButton" type="submit">
              Submit your message
            </button>
            </form>
        </div>
    </div>
);
}