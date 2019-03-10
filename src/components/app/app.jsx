import React from 'react'

import AppHeader from '../app-header'
import SearchPanel from '../search-panel'
import TodoList from '../todo-list'
import ItemStatusFilter from '../item-status-filter'

import './app.sass'

const App = () => {
  const todoData = [
    {label: 'Drink Coffee', important: false, id: 0},
    {label: 'Learn React', important: true, id: 1},
    {label: 'Write 2do App', important: true, id: 2}
  ]

  return (
  <div className="todo-app">
    <AppHeader toDo = { 5 } done = { 3 } />
    <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
    </div>
    <TodoList todoData = { todoData } />
  </div>
  )
}

export default App
