import React, { useReducer } from 'react';

const initialState = {
    name: '',
    age: '',
    hobbies: [],

};

const reducer = (currentState, action) => {
    switch (action.type) {
        case 'addName':
            return { ...currentState, name: 'Sakib' };
        default:
            break;
    }
};

const UserInfoWithUseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(state);
    return (
        <form >
            <input onChange={() => dispatch({ type: "addName" })}
                className='border border-purple-300 m-10' type='text' name='name' id='name' placeholder='name'></input>
            <input
                className='' type='number' name='age' id='age' placeholder='age'></input>
            <input
                className='' type='text' name='hobbies' id='hobbies' placeholder='hobby'></input>
            <button type="submit" >Submit</button>
        </form>
    );
};

export default UserInfoWithUseReducer;