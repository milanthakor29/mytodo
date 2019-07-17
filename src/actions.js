

export const addTodo=(title)=>{
    if(title.length===0){
        alert('Doing Nothing is not Considered As Task. Please Enter Something');
        return ({
            type:'zzzz'
        })
    }
    else
    return({
    type:'ADDTODO',
    payload:title
})
}
export const deleteTodo=(key)=>({
    type:'DELETETODO',
    payload:key
})

export const done=(id)=>({
    
    type:'CHECKED',
    payload:id,
})

export const UnDone=(id)=>({
    type:'UNCHECKED',
    payload:id,
})