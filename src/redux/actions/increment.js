// Action: Description of what we want to do

export const increment = (value) => {
    return {
        type: 'INCREMENT',
        payload: value
    }
}

export const decrement = (value) => {
    return {
        type: 'DECREMENT',
        payload: value
    }
}