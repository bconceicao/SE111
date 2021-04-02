"use strict";

const domain = "https://jsonplaceholder.typicode.com";

const getTodo = async id => {

    if (id < 1 || id > 10) {
        return Promise.reject( new Error ("User ID msut be between 1 and 10"));
    }

    else {

        const r1 = await fetch(`${domain}/users/${id}`);
        const user = await r1.json();

        const r2 = await fetch(`${domain}/todos/${id}`)
        const todo = await r2.json();
        user.todo = todo;

        

        return user;
    }
};

const todoData = user => {
    let html = `<h3>User: ${user.id}</h3>`;
    html    += `<h4>Name: ${user.name}</h4>`;
    html    += `<p>Username: ${user.username}</p>`;
    html    += `<p>User Email: ${user.email}</p>`;
    html    += `<p>To-Do ID: ${user.todo.id}</p>`
    html    += `<p>To-Do Title: ${user.todo.title}</p>`
    $("#todo").html(html);
};

const displayError = e => {
    let html = `<span>${e}</span>`;
    $("#todo").html(html);
};

$(document).ready( () => {

    $("#view_button").click( async () => {
        const todo_id = $("#todo_id").val();

        try{
            const user = await getTodo(todo_id);

            todoData(user);
        }
        catch(e){
            displayError(e);
        }
    });
});