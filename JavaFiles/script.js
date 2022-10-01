let task1 = JSON.parse(data);

console.table(task1);

for (let tasks of task1) {
    document.getElementById("fotos").innerHTML += `
        
  
        <div class="card" style="width: 18rem; style="position: relative display: grid">

        <div class="header"><button type="button" style="width: 5rem; class="btn btn-info">Task</button></div>

            <img src="${tasks.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${tasks.taskName} ${tasks.description}</h5><hr>
                <div id="levl" class="inc"><img src="img/image0.jpeg" alt="" id="prio"> 
                <button class="btn1" type="button"  id="btn-p">${tasks.importance}</button></div><hr><br>
                <div class="d-grid gap-2 d-md-block">
                     <button class="btn btn-danger" type="button">Delete</button>
                    <button class="btn btn-success" type="button">Done</button>
                        </div>
            </div>
        </div>
      `;
}

function increase(index) {
    if (task1[index].importance != 10) {
        task1[index].importance++;
        document.getElementsByClassName("btn1")[index].innerHTML = task1[index].importance ;
    }
}
let increase_btns = document.getElementsByClassName("btn1");
for (let i = 0; i < increase_btns.length; i++) {
    increase_btns[i].addEventListener("click", function() {
        increase(i);
       
    })
}
