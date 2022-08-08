import React from "react";
class ClosedTicket extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="rounded w-50 p-2">
                <h1  className="justify-content-center d-flex text-warning">Closed Tickets</h1>
                {
                    this.props.data.map((item)=>(
                        <div style={{backgroundColor:"lime"}} className="my-1 border border-primary justify-content-center p-2">
                        <div className="d-flex justify-content-center" >
                            <h3 className="mx-2">{item.priority}</h3>
                            <h3 className="mx-2">{item.timestamp}</h3>
                        </div>
                        <div >
                            <h2 className="text-danger"> {item.description}</h2>
                        </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}
export default ClosedTicket;