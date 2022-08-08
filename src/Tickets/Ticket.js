import React from "react";
import data from "./data";

import OpenTicket from "./OpenTicket";
import ClosedTicket from "./ClosedTicket";

class Ticket extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:data,
        }
    }
    openTicket=()=>{
        // filtering on basis of status
        // true means open false means close
        const result = this.state.data.filter((item)=>
        item.status===true)
        // sorting on basis of priority
        const sorteddata=[...result]
        .sort((a,b)=>Number(a.priority)-Number(b.priority))
        return sorteddata;
    }
    closedTicket=()=>{
        // filtering closed tickets
        const result = this.state.data.filter((item)=>
        item.status===false)
        console.log(result);
        return result;
    }

    changeCompletionStatus=(itemId,desc)=>{
        // taking itemId and desc from open ticket
        
        // 
        const temp=[...this.state.data];
        // finding the ticket which is being completed
        let k = temp.find((item)=>
        item.id===itemId);
        // setting status to false to transfer that ticket to closed
        // setting description received from openTicket
        k.status = false;
        k.description = desc;
        this.setState({data:temp})

    }

    render(){
        return(
            <div className="d-flex">
                   {/* calling both component while passing appropriate data  */}
                <OpenTicket
                changeCompletionStatus={this.changeCompletionStatus}  
                data = {this.openTicket()}></OpenTicket>
                <ClosedTicket data={this.closedTicket()}></ClosedTicket>
            </div>
        )
    }
}
export default Ticket;