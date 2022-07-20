
const setProblemHeading = (heading) => {
    return async (dispatch) => {
        dispatch({
            type: 'set-problem-header',
            payload: heading
        })
    }
}

const setProblemDescription = (description) => {
    return async (dispatch) => {
        dispatch({
            type: 'set-problem-description',
            payload: description
        })
    }
}

const addHelper = (heading, description, backgroundColor, collapsable) => {
    return async (dispatch) => {
        dispatch({
            type: 'add-helper',
            payload: { heading: heading, description: description, backgroundColor: backgroundColor, collapsable: collapsable }
        })
    }
}

const editHelperHeading = (heading, position) => {
    return async (dispatch) => {
        dispatch({
            type: 'edit-helper-heading',
            payload: { heading, position }
        })
    }
}


const editHelperDescription = (description, position) => {
    return async (dispatch) => {
        dispatch({
            type: 'edit-helper-description',
            payload: { description, position }
        })
    }
}

const editHelperColor = (backgroundColor, position) => {
    return async (dispatch) => {
        dispatch({
            type: 'edit-helper-color',
            payload: { backgroundColor, position }
        })
    }
}

const editHelperCollapsable = (collapsable, position) => {
    return async (dispatch) => {
        dispatch({
            type: 'edit-helper-collapsable',
            payload: { collapsable, position }
        })
    }
}

const removeHelper = (position) => {
    return async (dispatch) => {
        dispatch({
            type: 'remove-helper',
            payload: position
        })
    }
}

const setAlgoCategory = (categoryId) => {
    return async (dispatch) => {
        dispatch({
            type: 'set-category-id',
            payload: categoryId
        })
    }
}

const setLevel = (level) => {
    return async (dispatch) => {
        dispatch({
            type: 'set-level',
            payload: level
        })
    }
}

const addSolutionInLanguage = (languagePosition) => {
    return async (dispatch) => {
        dispatch({
            type: 'add-language-solution',
            payload: languagePosition
        })
    }
}



const editSolutionForLanguage = (value, languagePosition, solutionPosition) => {
    return async (dispatch) => {
        dispatch({
            type: 'edit-language-solution',
            payload: {
                value: value,
                languagePosition: languagePosition,
                solutionPosition: solutionPosition
            }
        })
    }
}

const deleteSolutionForLanguage = (languagePosition, solutionPosition) => {
    return async (dispatch) => {
        dispatch({
            type: 'delete-language-solution',
            payload: {
                languagePosition: languagePosition,
                solutionPosition: solutionPosition
            }
        })
    }
}






export default {
    setProblemHeading,
    addHelper,
    removeHelper,
    setAlgoCategory,
    setLevel,
    setProblemDescription,
    editHelperHeading,
    editHelperDescription,
    editHelperColor,
    editHelperCollapsable,
    addSolutionInLanguage,
    editSolutionForLanguage,
    deleteSolutionForLanguage
}
