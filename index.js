// todo

const text = document.getElementById("input-todo");
const list = document.getElementById("list");

function add(){

    if(text.value==""){
        alert("Please enter some text to add");
    }
    else{
        
    var item = document.createElement("div");
    item.classList.add("items");
    var check = document.createElement("input");
    check.classList.add("completed");
    check.setAttribute("name","completed");
    check.type = "checkbox";
    check.setAttribute("disabled","true");
    var lbl = document.createElement("label");
    lbl.setAttribute("for","completed");
    var todo = document.createElement("h4");
    todo.classList.add("text-field");
    todo.textContent = text.value;
    var del = document.createElement("i");
    del.classList.add("far", "fa-trash-alt", "trash");
    del.setAttribute("onclick","this.parentNode.remove(),rem()");
    item.appendChild(check);
    item.appendChild(lbl);
    item.appendChild(todo);
    item.appendChild(del);
    list.appendChild(item);
    store();
    text.value="";
  }
};

function store(){
    localStorage.setItem("todo", JSON.stringify(list.innerHTML));
}

function get(){
    var storedvalue = JSON.parse(localStorage.getItem("todo"));

    if(storedvalue!==null){
    list.innerHTML = storedvalue;
    }
}
get();

function rem(){
    localStorage.setItem("todo", JSON.stringify(list.innerHTML));
}

function rem_all(){
    location.reload();
    localStorage.removeItem("todo");
}

list.addEventListener("click", function(e){

    var t = e.target;
    var selected_tar = t.querySelector(".completed").checked;

    if(selected_tar){
        t.classList.remove("complete");
        t.querySelector(".completed").removeAttribute("checked");
        t.querySelector(".completed").setAttribute("disabled","true");
        t.querySelector("label").textContent="";
        store();
    }
    else{
        t.classList.add("complete");
        t.querySelector(".completed").setAttribute("checked","true"); 
        t.querySelector("label").textContent="completed";
        t.querySelector(".completed").removeAttribute("disabled");
        store();
    }
})