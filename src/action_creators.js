export function setState(state) {
    return {
        type: 'SET_STATE',
        state
    };
}

export function setProject(project) {
    return {
        type: 'SET_PROJECT',
        project
    };
}
