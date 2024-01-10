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
            todos: [
                {
                    text: 'mangiare',
                    done: true,
                },
                {
                    text: 'dormire',
                    done: false,
                },
                {
                    text: 'respirare',
                    done: true,
                }
            ],
        };
    },
    methods: {
        removeTodo(index){
            this.todos.splice(index, 1); //primo argomento indice da cui inizio la cancellazione, secondo argomento indici da cancellare
        },
        
    }
}).mount('#app');