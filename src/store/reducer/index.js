

const INITIAL_STATE ={
    users:[],
    current_user:{},
    personalinformation:[]
}

export default (state=INITIAL_STATE,action)=>{

    switch(action.type){
        case "SETUSER":
            // console.log("From redux store currentuser",action)
            return ({
                ...state,
                current_user:action.payload
            })
        case "SETFIREBASEUSERS":
            // console.log("From redux store",action)
            return ({
                ...state,
                users:action.payload
            })    
        case "SETFIREBASEPERSONALINFORMATION":
            return ({
                ...state,
                personalinformation :action.payload
            })
    }



    return state
}