(function () {
	'use strict';
  /*
    Bonjour et bienvenue dans cette session de Programming pour les RH :)
    J'esppère que vous allez apprécier cette petite expérience avec votre pair !

    # Comment ça marche

    Vous allez trouver certains morceaux de code contenant //Hey, codez moi !
    Je vous donne l'ensemble des choses à faire pour que vous puissiez accomplir
    votre travail et finir de créer cette application.

    Bon courage :)
  */

  var listTodos = [];
  var list = document.querySelector('.todo-list');
  var nouveauTodoData = document.querySelector('.new-todo');

  nouveauTodoData.addEventListener('keyup', function(event) {
    if(event.keyCode === 13){
      ajouterUnTodo();
    }
  });

  function ajouterUnTodo() {
    var nouveauTodoData = document.querySelector('.new-todo');

    listTodos.push(
      {
        label: nouveauTodoData.value,
        completed: false
      }
    );

    nouveauTodoData.value = '';

    afficher();
  }

  function cocherUnTodo(event) {
    var checkbox = event.target;
    var todo = checkbox.parentElement.parentElement;
    var id = todo.dataset.id;

    listTodos[id].completed = !listTodos[id].completed;

    afficher();
  }

  function supprimerUnTodo() {
    var checkbox = event.target;
    var todo = checkbox.parentElement.parentElement;
    var id = todo.dataset.id;

    listTodos.splice(id, 1);

    afficher();
  }

  function afficher () {
    list.innerHTML = '';
    for (var i = 0; i < listTodos.length; ++i) {
      var todo = creerUnTodo(i, listTodos[i]);
      todo.querySelector('.toggle').addEventListener('click', cocherUnTodo);
      todo.querySelector('.destroy').addEventListener('click', supprimerUnTodo);
      list.appendChild(todo);
    }
  }

































  function creerUnTodo(id, todo) {
    var todoLi = document.createElement('li');
    todoLi.className = todo.completed ? 'completed': '';
    todoLi.dataset.id = id;
    todoLi.innerHTML = `<div class="view">
        <input class="toggle" type="checkbox" ${todo.completed ? 'checked': ''}>
        <label>${todo.label}</label>
        <button class="destroy"></button>
      </div>`;
    return todoLi;
  }

})();
