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
        console.log(searchParams.get("admin-token"));
        let token = searchParams.get("token");
        let isAdmin = false;
        if (searchParams.get("admin-token")) {
            token = searchParams.get("admin-token");
            isAdmin = true;
        }
        confirmIP(searchParams.get('uname'), token, searchParams.get('ip'), isAdmin, (result) => {
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
                    <Header login={this.props.login} setLogin={this.props.setLogin} pfp = {this.props.pfp} setPFP = {this.props.setPFP} />
                    <h1 style={{"textAlign": "center", "margin-top": "2em"}}>Your ip has been confirmed!</h1>
                    
                </>
                
            );

        } 

        return (
            < >
                <Header login={this.props.login} setLogin={this.props.setLogin} pfp = {this.props.pfp} setPFP = {this.props.setPFP} />
                <h1 style={{"textAlign": "center", "margin-top": "2em"}}>Your IP could not be confirmed!</h1>
            </>
            
        );
    }
}

export default IpConfirmPage;