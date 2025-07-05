import React from 'react'
import { render, screen } from '@testing-library/react'
import { expect } from 'vitest'
import Todo from './Todo'

test ('renders content', async () => {
    const todo1 = {
        text: "Go to France", 
        done: false, 
    }
    render(
      <Todo todo = {todo1} 
            deleteTodo = {() => {}} 
            completeTodo = {()=> {}}/>
    )
    const element = screen.getByText('Go to France')
    expect(element).toBeDefined()
    })