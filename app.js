
  /*
    Bonjour et bienvenue dans cette session de Programming pour les RH :)
    J'espère que vous allez apprécier cette petite expérience avec votre pair !

    # Comment ça marche

    Vous allez trouver certains morceaux de code contenant //Hey, codez moi !
    Je vous donne l'ensemble des choses à faire pour que vous puissiez accomplir
    votre travail et finir de créer cette application.

    Bon courage :)
  */

  /*
    Ici, c'est vos données.
    listTodos représente l'ensemble des todos à afficher.
    C'est un tableau contenant des éléments représentant un todo.
    Un todo est représenté comme suit :

    C'est un objet qui a un label (qui est une chaîne de caractères) et une valeur completed
    pour savoir s'il est complété ou non.

    Exemple :

    {
      label: "Je suis un todo",
      completed: false
    }

    A vous de jouer !

    Créer un tableau vide
  */
  var listTodos = //Hey, codez moi !

  /*
    Ici ça représente l'élement HTML contenant les todos à afficher.
  */
  var list = document.querySelector('.todo-list');

  /*
    Cette fonction permet d'ajouter un todo à votre tableau de todos
    Comme vous pouvez le voir, il y a déjà un peu de code
    Voyons ensemble
  */
  function ajouterUnTodo() {
    /*
      Ici nous allons récupérer l'élément qui contient la donnée de notre todo
      Il s'agit de l'input text
    */
    var nouveauTodoData = document.querySelector('.new-todo');

    /*
      Ici c'est à vous de jouer, vous devez ajouter un nouveau todo dans le tableau de todos
      Pensez à utiliser la méthode push
      Le tableau s'appele listTodos
      Ajoutez un élément comme expliqué au début :)
    */

    //Hey, codez moi !

    /*
      On efface ce qu'il y a d'écrit dans l'input
      Ben oui, sinon l'utilisateur il va raler :D
      Si vous voulez tester, enlevez cette ligne ;)
    */
    nouveauTodoData.value = '';

    /*
      On demande à afficher nos todos à l'écran, on va donc changer le HTML
    */
    afficher();
  }

  /*
    C'est une fonction qui permet de changer votre HTML pour afficher les éléments
    de votre tableau listTodos
  */
  function afficher () {
    /*
      Ici j'efface toute la liste HTML.
      Je prends l'élément list que nous avions récupéré au début du fichier.
    */
    list.innerHTML = '';
    /*
      Je vais itérer au travers de mon tableau
      A vous de compléter cette boucle
    */
    for (/* Hey, codez moi */) {

      /*
        Ici c'est une fonction un peu compliquée.
        Elle permet de créer un élement HTML
        Vous pouvez demander à votre Pair de vous expliquer
      */
      var todo = creerUnTodo(i, listTodos[i]);

      /*
        Ici j'ajoute des intéractions ( des évènements ;) ) pour cocher un todo et
        pour le supprimer. Nous verrons cela un peu plus tard. Ne vous inquiétez pas.
        Ignorez les pour le moment.
      */
      todo.querySelector('.toggle').addEventListener('click', cocherUnTodo);
      todo.querySelector('.destroy').addEventListener('click', supprimerUnTodo);

      /*
        Ajoutez l'élément dans la liste HTML (votre <ul>) (attention pas dans le tableau ;) )
        Pensez à utiliser la fonction appendChild avec l'objet list
        Pensez à utiliser l'objet todo créé juste au-dessus
      */

      //Hey, codez moi !
    }
  }


  /*
    A partir d'ici, vous devriez pouvoir faire fonctionner un peu votre application !!!
    Félicitation !!!

    Vous pouvez continuer pour effacer et cocher un todo.
  */



  function cocherUnTodo(event) {
    /*
      On s'embête beaucoup ici :D
      Mais on récupére l'élement cliqué, puis on remonte jusqu'à la balise <li>
      qui représente le todo afin de récupérer son identifiant
      Cet identifiant permet de faire la relation entre ce que vous voyez
      et l'élement dans votre tableau.
    */
    var checkbox = event.target;
    var todo = checkbox.parentElement.parentElement;
    var id = todo.dataset.id;

    /*
      Ici vous devez cocher ou décocher votre todo.
      Vous devez donc "inverser" la valeur de completed
      Demandez à votre Pair de vous expliquer la notion de boolean
      Et inversez là :)
    */

    //Hey, codez moi !

    afficher();
  }


  function supprimerUnTodo() {
    /*
      On s'embête beaucoup ici :D
      Mais on récupére l'élement cliqué, puis on remonte jusqu'à la balise <li>
      qui représente le todo afin de récupérer son identifiant
      Cet identifiant permet de faire la relation entre ce que vous voyez
      et l'élement dans votre tableau.
    */
    var checkbox = event.target;
    var todo = checkbox.parentElement.parentElement;
    var id = todo.dataset.id;

    /*
      Ici vous devez retirer un élément de votre tableau.
      Vous avez sa "place" dans le tableau grâce à id
      A vous de jouer :)
      Pensez à utiliser splice (demandez à votre Pair)
      Pensez à utiliser listTodos
    */

    //Hey, codez moi !

    afficher();
  }






















































  var nouveauTodoData = document.querySelector('.new-todo');

  nouveauTodoData.addEventListener('keyup', function(event) {
    if(event.keyCode === 13){
      ajouterUnTodo();
    }
  });

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
