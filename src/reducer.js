export const initialState ={
    user:null,
    playlists: [],
    playing: false,
    item: null,
    token: null
};

// reducer will keep on listening to all the changes that are made to the dataLayer
// there will be some actions
const reducer = (state, action) => {
        //action has a type and a [payload] 

    switch(action.type){
        case 'SET_USER':
            return {
                ...state, 
                user: action.user
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        case 'SET_PLAYLIST':
            return{
                ...state,
                playlists: action.playlists
            }
        case 'SET_DISCOVER_WEEKLY':
            return{
                ...state,
                discover_weekly: action.discover_weekly
            }
        default:
            return state;
    }


}
export default reducer;
