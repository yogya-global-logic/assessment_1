import React from "react";
class OpenTicket extends React.Component{
    constructor(props){
        super(props);
        this.state={
            desc:"",
            color:"red",
            id:0
        }
    }
   
    // below fn is used to capture input provided   
    captureDescription=(e,itemId)=>{
        e.preventDefault();
        
        this.setState({desc:e.target.value})
        // if input is empty setting id to 0 so that button will be disabled
        // in else setting state to that id whose description is entered
        // this will ensure that only that button will get enable whose input is given
        if(e.target.value==="")
        this.setState({id:0})
        else
        this.setState({id:itemId})

        
    }
    render(){
        return(
            <div className="rounded w-50 bg-light m-auto p-2">
                <h1 style={{color:this.state.color}}  className="justify-content-center d-flex">Open Tickets</h1>
                {
                    this.props.data.map((item)=>(
                       
                        <div 
                            style={{backgroundColor:item.color}} 
                            className= "m-2 border border-primary justify-content-evenly d-flex p-2">
                            
                            <h2 className="mx-4 p-1">{item.priority}</h2>
                           
                            <input style={{width:"20vw",height:"9vh"}} className="form-control" placeholder="Enter Description" onChange={(e)=>this.captureDescription(e,item.id)}></input>
                            
                             <button 
                                onClick={()=>this.props.changeCompletionStatus(item.id,this.state.desc)} 
                                className="btn btn-primary m-1 " 
                                disabled={this.state.id!==item.id}>
                                    Submit
                             </button>
                                 <h4 style={{margin:"inherit"}}>{item.timestamp}</h4>
                           
                        </div>
                       
                    ))
                }
            </div>
        )
    }
}
export default OpenTicket;