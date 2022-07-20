const formatCreateAlgoData = (data)=>{
    // generating problem array 
    let problem = [];
    problem.push({
        heading:data.problem_heading, 
        description:data.problem_description, 
        backgroundColor:"", 
        collapsable:false})
        for(var i = 0 ; i < data.problem_helper.length ; i++){
            problem.push(data.problem_helper[i])
        }


    return {
        category_id:data.category_id,
        problem:problem,
        solution:data.solution,
        level:data.level
    }

}


export default {formatCreateAlgoData}