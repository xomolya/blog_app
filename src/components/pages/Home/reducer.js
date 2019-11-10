const initialState = {
    lastPosts: [],
}




export default (state = initialState, action) => {

    switch (action.type) {

        

        case 'SET_LAST_POSTS':

            return {
                ...state,
                lastPosts: action.posts,
            }
        default: return state;
       
    }
}
