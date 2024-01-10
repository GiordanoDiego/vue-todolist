/*
console.log('nomeVariabile', nomeVariabile, typeof nomeVariabile);

document.getElementById('idHtml').innerHTML = noveVariabileJS;

//valore input 
    userName = document.getElementById('userName');
    userNameValue = userName.value;

//controllare se il valore è Nan
    if(isNaN(kmValue))

*/
const { createApp } = Vue;
createApp({
    data() {
        return {
            newTodo: '',
            todos: [
                {
                    text: 'studiare',
                    done: true,
                },
                {
                    text: 'palestra',
                    done: false,
                },
                {
                    text: 'mangiare',
                    done: true,
                }
            ],
        };
    },
    methods: {
        removeTodo(index){
            this.todos.splice(index, 1); //primo argomento indice da cui inizio la cancellazione, secondo argomento indici da cancellare
        },
        addTodo(){
            if(this.newTodo.trim().length>0){
                const newTodo = {
                    text: this.newTodo.trim(),
                    done: false
                };
                this.todos.push(newTodo);
                this.newTodo =''; //svuoto il campo di aggiunta
            }
        }
         
    }
}).mount('#app');