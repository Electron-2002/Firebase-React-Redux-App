const initialState = {
    projects: [
        { id: 1, title: 'A for Apple', content: 'Alphabets' },
        { id: 2, title: 'B for Ball', content: 'Alphabets' },
        { id: 3, title: 'C for Cat', content: 'Alphabets' },
    ],
};

const projectReducer = (state = initialState, action) => {
    return state;
};

export default projectReducer;
