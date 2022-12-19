import React from 'react';
import Header from '../navbar/Header';
import { confirmIP } from '../backend_communication/ipConfirm';

class IpConfirmPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            status:false
        }

        const searchParams = new URLSearchParams(document.location.search);
        console.log(searchParams.get("token"));
        confirmIP(searchParams.get('uname'), searchParams.get('token'), searchParams.get('ip'), (result) => {
            if(result){
                this.setState({status : true});
            }else{
                this.setState({status: false});
            }
        })
    }


    


    render() {
        
        
        if (this.state.status) {
            return (
                < >
                    <Header token={this.props.token} setToken={this.props.setToken}  />
                    <h1>Your ip has been confirmed!</h1>
                    
                    
                </>
                
            );

        } 

        return (
            < >
                <Header token={this.props.token} setToken={this.props.setToken}  />
                <h1>Your IP could not be confirmed!</h1>
                
            </>
            
        );
    }
}

export default IpConfirmPage;