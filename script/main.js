let form = document.getElementById("form"),
      input = document.getElementById("input"),
      list = document.querySelector(".list-group"),
      storage = window.localStorage,
      todos = [];


      //rendering localstorage 

   

      //end rendering


form.addEventListener('submit', e=> {
    e.preventDefault()

    // trimming input value 
    let todo = input.value.trim()
    //get unique id 
    let itmId = Date.now()
    
    if(todo.length>3) {

        //saving todo to Arry 
        todos.push({
            id:itmId,
            todo:todo,
            isDone:false
        })


        //creating list item 
        let li = document.createElement("li")
        li.setAttribute('class','list-group-item d-flex align-items-center')
        li.dataset.id=itmId
        list.prepend(li)

        //creating chekbox
        let check = document.createElement("input")
        check.setAttribute('type','checkbox')
        check.dataset.method='check'
        li.appendChild(check)

        //creating span
        let txt = document.createElement("span")
        txt.setAttribute('class','w-100 mx-3')
        txt.textContent=todo
        li.appendChild(txt)

        //creating edit button 
        let editBnt = document.createElement("button")
        editBnt.setAttribute('class','btn btn-warning mx-3')
        editBnt.setAttribute("data-bs-toggle","modal")
        editBnt.setAttribute("data-bs-target","#exampleModal")
        editBnt.dataset.method='edit'
        editBnt.textContent="Edit"

        li.appendChild(editBnt)

        //creating delete button 
        let delBtn = document.createElement("button")
        delBtn.setAttribute('class','btn btn-danger')
        delBtn.textContent="Delete"
        delBtn.dataset.method='delete'
        li.appendChild(delBtn)

        
        console.log(todos)

        //delete input old value 
        input.value=""
    }else {
        alert("3 ta harfdan ko'p bo'lgan so'z yozing")
    }
})

//function here

let rendertodo = arr => {

    todos.forEach(item=>{
        let li = document.createElement("li")
        li.setAttribute('class','list-group-item d-flex align-items-center')
        li.dataset.id=item.id
        list.prepend(li)
    
        //creating chekbox
        let check = document.createElement("input")
        check.setAttribute('type','checkbox')
        check.dataset.method='check'
        li.appendChild(check)
    
        //creating span
        let txt = document.createElement("span")
        txt.setAttribute('class','w-100 mx-3')
        txt.textContent=item.todo
        li.appendChild(txt)
    
        //creating edit button 
        let editBnt = document.createElement("button")
        editBnt.setAttribute('class','btn btn-warning mx-3')
        editBnt.setAttribute("data-bs-toggle","modal")
        editBnt.setAttribute("data-bs-target","#exampleModal")
        editBnt.dataset.method='edit'
        editBnt.textContent="Edit"
    
        li.appendChild(editBnt)
    
        //creating delete button 
        let delBtn = document.createElement("button")
        delBtn.setAttribute('class','btn btn-danger')
        delBtn.textContent="Delete"
        delBtn.dataset.method='delete'
        li.appendChild(delBtn)
    
    
        })
}

list.addEventListener('click',e=>{

    let currentTodo = Number(e.target.parentElement.dataset.id)

    let objTodo = todos.findIndex(item=>item.id==currentTodo)

    if(e.target.dataset.method=='delete'){
        e.target.parentElement.remove()
        //removing array element
        todos.splice(objTodo,1)
    }

    if(e.target.dataset.method=='check'){
       e.target.nextElementSibling.classList.toggle("text-decoration-line-through")
       //isDone here change  
       todos[objTodo].isDone=!todos[objTodo].isDone
    }
    if(e.target.dataset.method=='edit'){
        editInput.value=todos[objTodo].todo
        saveBtn.addEventListener('click',e=>{

        todos[objTodo].todo=editInput.value


        list.innerHTML=""

        rendertodo(todos)
        

        })

        
    }


        //rendering todos
        
})

