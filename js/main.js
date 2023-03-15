/* 'use strict'; */

const { createApp } = Vue

    createApp({
    data() {
        return {
        newTodo: '',
        todos: [
            
            {
                id: 0,
                text: '',
                done: 'true'
            }
        ]
    }
    },
    methods:{
        addTodo(){
            this.todos.push({text: this.newTodo, done: 'false', id: 1})
            this.newTodo='';
        },
        deleteLine(todo){
            this.todos.splice(this.todos.indexOf(todo), 1);
        }
    }
}).mount('#app')