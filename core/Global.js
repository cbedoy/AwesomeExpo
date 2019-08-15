const state = {
    userToken: '',
    streamId: '',
    streamKey: ''
}

hasSession = () => {
    return state.userToken.length > 0
}

export default {state, hasSession}