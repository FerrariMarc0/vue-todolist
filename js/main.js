/* 'use strict'; */

const { createApp } = Vue

    createApp({
    data() {
        return {
        newTodo: '',
        message: 'Compila la lista',
        todos: [
            
            {
                id: 0,
                title: '',
                completed: 'false'
            }
        ]
    }
    },
    methods:{
        addTodo(){
            this.todos.push({title: this.newTodo, completed: 'false', id: 1})
            this.newTodo='';
        },
        deleteLine(todo){
            this.todos.splice(this.todos.indexOf(todo), 1);
        }
    }
}).mount('#app')