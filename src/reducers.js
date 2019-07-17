
const initialState={
    todo:[],
    
}
export default (state=initialState,action)=>{

    switch(action.type){
        case 'ADDTODO':
            return {
                ...state,
                todo:[...state.todo,
                    {
                        id:`${+new Date()}`,
                    title:action.payload,
            
                    isRemoved:false,
                    isChecked:false,
                                        
                    }]
            }
            case 'DELETETODO':
                        {
                                    console.log('indelete');
                            return {
                        ...state,
                        todo:state.todo.map(todo=>todo.id===action.payload ? {...todo,isRemoved:true} : todo)
                    }    
                }
                case 'CHECKED':
                        {
                                    console.log('inchecked');
                                    console.log(action.payload,'id',)
                            return {
                        ...state,
                        todo:[
                            ...state.todo.map(todo=>todo.id===action.payload? {...todo,isChecked:true,}:todo)
                        ],
                        
                    }    
                }
                case 'UNCHECKED':
                        {
                                    console.log('inUnchecked');

                            return {
                        ...state,
                        todo:state.todo.map(todo=>todo.id===action.payload? {...todo,isChecked:false,}:todo)
                        
                    }    
                }
        default:
            return state;    
    }
}