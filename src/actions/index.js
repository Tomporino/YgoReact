export const ACTION_TYPES = () => {
    return {
        CREATE: 'CREATE',
        UPDATE: 'UPDATE',
        DELETE: 'DELETE',
        FETCH_ALL: 'FETCH_ALL'
    }
}

export const fetchAll = () => dispatch =>{
    return {
        type: 'FETCH_ALL',
        payload: []
    }
}

// export const login = (data) => {
//     return {
//         type: 'login',
//         payload: data
//     }
// }

// export const logout = () => {
//     return {
//         type: 'logout'
//     }
// }