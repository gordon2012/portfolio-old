export default function(state = {}, action) {
    switch(action.type) {
        case 'SET_STATE':
            return action.state;
        case 'SET_PROJECT':
            return {
                ...state,
                project: action.project
            };
        default:
            return state;
    }
}
