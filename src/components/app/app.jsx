import React, { Component } from 'react'

import AppHeader from '../app-header'
import SearchPanel from '../search-panel'
import TodoList from '../todo-list'
import ItemStatusFilter from '../item-status-filter'
import AddItem from '../add-item'

import './app.sass'

export default class App extends Component {
  maxId = 100

  state = {
    todoData: [
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Learn React'),
      this.createTodoItem('Write 2do App')
    ],
    term: '',
    filter: 'all'
  }

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    }
  }

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id)

      const newTodoData = [
        ...todoData.slice(0, idx),
        ...todoData.slice(idx + 1)
      ]

      return {
        todoData: newTodoData
      }
    })
  }

  addItem = (text) => {
    const newItem = {
      label: text,
      important: false,
      id: this.maxId++
    }

    this.setState(({ todoData }) => {
      const newTodoData = [...todoData, newItem]

      return {
        todoData: newTodoData
      }
    })
  }

  toggleProperty(arr, id, propertyName) {
    const idx = arr.findIndex((el) => el.id === id)

    const oldItem = arr[idx]
    const newItem = { ...oldItem, [propertyName]: !oldItem[propertyName] }

    return [
      ...arr.slice(0, idx),
      newItem,
      ...arr.slice(idx + 1)
    ]
  }

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      }
    })
  }

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      }
    })
  }

  onSearchChange = (term) => {
    this.setState({ term })
  }

  onFilterChange = (filter) => {
    this.setState({ filter })
  }

  search(items, term) {
    if (term === '') return items
    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1
    })
  }

  filter(items, filter) {
    switch (filter) {
      case 'all': return items;
      case 'active': return items.filter((item) => !item.done);
      case 'done': return items.filter((item) => item.done);
      default: return items;
    }
  }

  render() {

    const { todoData, term, filter } = this.state

    const visibleData = this.filter(this.search(todoData, term), filter)
    const doneCount = todoData.filter((el) => el.done).length
    const todoCount = todoData.length - doneCount

    return (
      < div className="todo-app" >
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel onSearchChange={this.onSearchChange} />
          <ItemStatusFilter
            filter={filter}
            onFilterChange={this.onFilterChange}
          />
        </div>
        <TodoList
          todoData={visibleData}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <AddItem onItemAdded={this.addItem} />
      </div >
    )
  }
}
