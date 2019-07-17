import React, { Component } from 'react';
import {FormControl,Button,InputGroup} from 'react-bootstrap';
import {connect} from 'react-redux';
import {addTodo,deleteTodo,} from './actions';



class todo extends Component {
    state={
        title:''
    }
    handleInput=(e)=>{
        this.setState({
            title:e.target.value
        })
    }
    handleClick=()=>{
        this.props.addTodo(this.state.title);
        this.setState({
            title:'',
        })
    }
    onKeyUp=(e)=>{

        console.log('inOnKEYUP')
        if(e.keyCode===13){
            this.props.addTodo(this.state.title);
            this.setState({
                title:'',
                    
            })
    }
    if(e.keyCode===27){
        
        this.setState({
            title:'',
                
        })
}
}
    
    render() {      

        return (
           
            
          <div>
             <InputGroup 
             className='mb-3'
            >
                <FormControl
      placeholder='Enter Task'
      value={this.state.title}
      onChange={this.handleInput}
      onKeyUp={this.onKeyUp}
   
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
            {console.log(this.state)}
            <InputGroup.Append>
            <Button 
            onClick={this.handleClick}
            variant='outline-secondary'>AddTask</Button>   
            </InputGroup.Append>
            </InputGroup></div>

        );
  
    }
}

 const mapStateToProps=(state)=>({
    todo:state.todo.todo,
})
const mapDispatchToProps=(dispatch)=>({
    addTodo:(data)=>dispatch(addTodo(data)),
    deleteTodo:(key)=>dispatch(deleteTodo(key)),
  
  
})
export default connect(mapStateToProps,mapDispatchToProps)(todo);

