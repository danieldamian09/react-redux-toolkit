import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { Todos } from '../../interface/todos';

export const todosApi = createApi({
  reducerPath: 'todos',

  baseQuery: fetchBaseQuery({
    baseUrl:"https://jsonplaceholder.typicode.com"
  }),

  endpoints: (builder) => ({
    getTodos: builder.query<Todos[], string>({
      query: () => '/todos'
    }),

    // Probar despues del endopints

    getTodosId: builder.query<Todos, number>({
      query: (id) => `/todos/${id}`
    }),

    setTodos: builder.mutation<Todos, Todos>({
      query: (body) => ({
        url: '/todos',
        method: 'POST',
        body: body
      })
    }),

    deleteTodos: builder.mutation<Todos, number>({
      query: (id) => ({
        url: `/todos/${id}`,
        method: 'DELETE'
      }),
    }),
  })
})

export const  {useGetTodosQuery, useSetTodosMutation, useDeleteTodosMutation, useGetTodosIdQuery } = todosApi;