var listElement = document.querySelector("#app ul");

var inputElement = document.querySelector("#app input");

var btnElement = document.querySelector("#app button");





var todos = JSON.parse(localStorage.getItem('list_todos')) || [];



function renderTodos() {

    listElement.innerHTML = '';

    for (todo of todos) {

        /*

        <div class="card border-success mb-3" style="max-width: 18rem;">

                                <div class="card-header bg-transparent border-success">Cabeçalho</div>

                                <div class="card-body text-success">

                                    <h5 class="card-title">Título de Card Success</h5>

                                    <p class="card-text">Um exemplo de texto rápido para construir o título do card e fazer preencher o conteúdo do card.</p>

                                </div>

                                <div class="card-footer bg-transparent border-success">Rodapé</div>

                            </div>

        */

        var divCard = document.createElement('div');

        divCard.setAttribute('class', 'card bg-light mb-3');

        divCard.setAttribute('style', 'max-width: 18rem;');

        var divCardHeader = document.createElement('div');

        divCardHeader.setAttribute('class', 'card-header');

        var divCardHeaderText = document.createTextNode("Tarefa");

        var divCardBody = document.createElement('div');

        divCardBody.setAttribute('class', 'card-body');

        var pCardText = document.createElement('p');

        pCardText.setAttribute('class', 'card-text');

        var divCardFooter = document.createElement('div');

        divCardFooter.setAttribute('class', 'card-footer');



        var tdElement = document.createElement('li');

        var tdText = document.createTextNode(todo);



        var linkElement = document.createElement('a');

        linkElement.setAttribute('href', '#');

        var pos = todos.indexOf(todo);

        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');



        var linkText = document.createTextNode("Excluir");



        linkElement.appendChild(linkText)

        linkElement.setAttribute('class', 'btn btn-danger')



        divCardHeader.appendChild(divCardHeaderText)

        pCardText.appendChild(tdText);

        divCardBody.appendChild(pCardText);

        divCardFooter.appendChild(linkElement);

        divCard.appendChild(divCardHeader);

        divCard.appendChild(divCardBody);

        divCard.appendChild(divCardFooter);







        tdElement.appendChild(divCard);

        //tdElement.appendChild(linkElement);



        listElement.appendChild(tdElement);

    }

}



renderTodos();



function addTodos() {

    var tdText = inputElement.value;



    todos.push(tdText);

    inputElement.value = '';

    renderTodos();

    saveToStorage();



}



btnElement.onclick = addTodos;



function deleteTodo(pos) {

    todos.splice(pos, 1);

    renderTodos();

    saveToStorage();

}





function saveToStorage() {



    localStorage.setItem('list_todos', JSON.stringify(todos));

}