fetch('http://5af373afcca5e20014bba4d7.mockapi.io/tasks')
.then(function(response){
    return response.json()
})
.then(function (tasks) {
    console.log(tasks);
    for (let i = 0; i <tasks.length; i++){
        console.log(tasks[i]);
        // console.log(tasks[i].task_name);
    document.getElementById("taskName").innerHTML += `
    <tr>
        <td onclick="myFunction(`+tasks[i].id +`)">`+tasks[i].task_name +`</td>
        <td>`+tasks[i].task_status +`</td>
    </tr>
    `            
    }  
})
 
function myFunction(id){
    console.log(id)
    fetch('http://5af373afcca5e20014bba4d7.mockapi.io/tasks/'+id)
    .then(function(response){
        return response.json()
    })
    .then(function(task){
        console.log(task)
    document.getElementById('nume-task').innerHTML = task.task_name;
    document.getElementById('status').innerHTML = task.task_description;
    })
    
}

