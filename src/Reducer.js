
let user={
    name:"bhagya", 
    age:21
}

 export const Reducer = (state =user, action)=>{
    if(action.type=="change-name"){
        return{
            ...state,
name:action.payload
        }
    }
return state
}
