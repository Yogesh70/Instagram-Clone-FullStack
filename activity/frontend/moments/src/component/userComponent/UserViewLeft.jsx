import React, { Component } from 'react';
import axios from "axios";
class UserViewLeft extends Component {
    state = { 
        src: "",
        title: "Data will be filled"
    }
    
    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/photos/1")
            .then((res) => {
                console.log(res.data);
                let { title, url } = res.data;
                this.setState({
                    src: url,
                    title: title 
                })
            })
            .catch(function (err) {      
            console.log(err);                     
        })  
    }
    
    // Ui pe print
    render() { 
        let { src,title } = this.state;
        return (<React.Fragment>
            <img src={src} alt="profile-img" />
            <p> { title } </p>
            </React.Fragment>
        );
    }
}

export default UserViewLeft;