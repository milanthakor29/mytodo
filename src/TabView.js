import React,{Component} from 'react';

import {connect} from 'react-redux';

import {addTodo,deleteTodo,done,UnDone} from './actions';
import {Tabs , Tab,Button,ListGroup,ListGroupItem,Form} from 'react-bootstrap';
import styled from 'styled-components';




class TabView extends Component
    
{
        handleDelete=(key)=>{
        this.props.deleteTodo(key);
        }
    handleCheck=(id,checkstatus)=>{
        if(checkstatus){
           this.props.UnDone(id)
        }
        if(!checkstatus){
            this.props.done(id)
        }
    }
      
    render(){
        
        return(
              <Tabs defaultActiveKey="AllTask" id="tab-example">
  <Tab eventKey="AllTask" title="All-Tasks">
     {
        <div>   
{
    this.props.todo.length>0 && this.props.todo.filter(todo=>!todo.isRemoved).length>0 ?
     this.props.todo.length>0 && this.props.todo.filter(todo=>!todo.isRemoved).map(todo=>(
            
            <TaskList key={todo.id} style={{
                width:"100%",
                textAlign:'left',
                border:'1px solid rgba(0,0,0,0.125)' ,
            }}    >
             <Form ><Form.Check style={{
                 display:'inline-block',
                 marginLeft:'10px',
                 marginRight:'10px',
                 marginTop:'10px'
             }} aria-label="option 1"  id={todo.id} checked={todo.isChecked} onChange={() => this.handleCheck(todo.id,todo.isChecked)} /><Form.Check.Label>{todo.title}</Form.Check.Label></Form>
               <Button 
                  variant='light'
                        onClick={()=>this.handleDelete(todo.id)}>x</Button></TaskList>))
                        :<h4 style={{
                            textAlign:"left",
                            paddingLeft:"15px"
                          
                        }}>No Items Available</h4>
    
                    }
                    </div>             }

  </Tab>
  <Tab eventKey="ActiveTask" title="ActiveTasks">

      {
          <ListGroup>{
              
          this.props.todo.length>0 && this.props.todo.filter(todo=>!todo.isChecked && !todo.isRemoved).length > 0 ?
          
          this.props.todo.filter(todo=>!todo.isChecked && !todo.isRemoved).map(todo=>(
            <TaskList key={todo.id} style={{
                width:"100%",
                textAlign:'left',
                border:'1px solid rgba(0,0,0,0.125)' ,
            }}>
                <ListGroupItem className='notchecked'   id={todo.id} style={{
                     marginLeft:'10px',
                     marginRight:'10px',
                     marginTop:'10px',
                     padding:'0'
                
                }}>{todo.title}</ListGroupItem>
                <Button 
                variant='light'
                          onClick={()=>this.handleDelete(todo.id)}>x</Button></TaskList>))
                          : <h4 style={{
                              textAlign:"left",
                              paddingLeft:"15px"
                            
                          }}>No Items Available</h4>

     }
     </ListGroup>
    }
      
  </Tab>
  <Tab eventKey="DoneTask" title="DoneTasks" >

  {
      

      <ListGroup>
         {  this.props.todo.length>0 && this.props.todo.filter(todo=>todo.isChecked && !todo.isRemoved).length>0 ?
               this.props.todo.length>0 && this.props.todo.filter(todo=>todo.isChecked && !todo.isRemoved).map(todo=>(
                   
            <TaskList key={todo.id} style={{
                width:"100%",
                textAlign:'left',
                border:'1px solid rgba(0,0,0,0.125)' ,
            }}>
                <ListGroupItem style={{
                     marginLeft:'10px',
                     marginRight:'10px',
                     marginTop:'10px',
                     padding:'0'
                
                }}  className='notchecked'  id={todo.id} >{todo.title}</ListGroupItem>
                <Button 
                variant='light'
                          onClick={()=>this.handleDelete(todo.id)}>x</Button></TaskList>))
                            :<h4 style={{
                                textAlign:"left",
                                paddingLeft:"15px"
                              
                            }}>No Items Available</h4>
     }
     </ListGroup>

    }
 </Tab>
</Tabs>

        )
    }
}
const mapStateToProps=(state)=>({
    todo:state.todo.todo,
})
const mapDispatchToProps=(dispatch)=>({
    addTodo:(data)=>dispatch(addTodo(data)),
    deleteTodo:(key)=>dispatch(deleteTodo(key)),
    done:(key)=>dispatch(done(key)),
    UnDone:(key)=>dispatch(UnDone(key)),
   
  
})



export default connect(mapStateToProps,mapDispatchToProps)(TabView);

const TaskList=styled.div`

display:flex;
justify-content:space-between;`
