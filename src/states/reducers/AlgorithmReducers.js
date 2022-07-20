

const initialState = {
    category_id: '',
    problem_heading: "",
    problem_description: "",
    problem_helper: [],
    solution: [
        {
            language: "JAVA",
            solutions: [
                { code: "This is Java solution one" },
                { code: "This is Java solution two" }
            ]
        },
        {
            language: "Javascript",
            solutions: [
                
            ]
        }
    ],
    level: 1
}

const AlgorithmReducers = (state = initialState, action) => {
    if (action.type === 'set-problem-header') {
        return {
            ...state,
            problem_heading: action.payload
        };
    } if (action.type === 'set-problem-description') {
        return {
            ...state,
            problem_description: action.payload
        };
    } if (action.type === 'add-helper') {
        let array = state.problem_helper
        array.push(action.payload)
        return {
            ...state,
            problem_helper: array
        };
    } if (action.type === 'remove-helper') {
        let array = state.problem_helper;
        array.splice(action.payload, 1);
        return {
            ...state,
            problem_helper: array
        };
    } if (action.type === 'set-category-id') {
        return {
            ...state,
            category_id: action.payload
        };
    } if (action.type === 'set-level') {
        return {
            ...state,
            level: action.payload
        };
    } if (action.type === 'edit-helper-heading') {
        let array = state.problem_helper;
        array[action.payload.position].heading = action.payload.heading;
        return {
            ...state,
            problem_helper: array
        };
    }if(action.type === 'edit-helper-description'){
        let array = state.problem_helper;
        array[action.payload.position].description = action.payload.description;
        return {
            ...state,
            problem_helper: array
        };
    } if (action.type === 'edit-helper-color') {
        let array = state.problem_helper;
        array[action.payload.position].backgroundColor = action.payload.backgroundColor;
        return {
            ...state,
            problem_helper: array
        };
    } if (action.type === 'edit-helper-collapsable') {
        let array = state.problem_helper;
        array[action.payload.position].collapsable = action.payload.collapsable;
        return {
            ...state,
            problem_helper: array
        };
    }if (action.type === 'add-language-solution') {
        var array = state.solution ;
        array[action.payload].solutions.push({ code: "code added in reducer" })
        return {
            ...state,
            solution: array
        };
    } if (action.type === 'edit-language-solution') {
        let array = state.solution;
        array[action.payload.languagePosition].solutions[action.payload.solutionPosition].code = action.payload.value;
        return {
            ...state,
            solution: array
        };
    } if(action.type === 'delete-language-solution'){
        let array = state.solution[action.payload.languagePosition].solutions;
        array.splice(action.payload.solutionPosition, 1);
        state.solution[action.payload.languagePosition].solutions = array;
        return {
            ...state,
            solution: state.solution
        };

    }else {
        return state;
    }
}

export default AlgorithmReducers;

