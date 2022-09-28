import React, {FC, useState} from "react";
import {Todos} from "./interface/todos";
import {
	useDeleteTodosMutation,
	useGetTodosIdQuery,
	useGetTodosQuery,
	useSetTodosMutation,
} from "./store/apis/todosApi";

export const TodoApp: FC = () => {
	const [id, setId] = useState<number>(1);

	const {data: todos = [], isLoading} = useGetTodosQuery("todos");
	const {data: todo} = useGetTodosIdQuery(id);

	const handleTodoIDNext = () => {
		setId((prev) => prev + 1);
	};

	const handleTodoIDPrev = () => {
		if (id > 1) {
			setId((prev) => prev - 1);
		}
	};

	const [setTodos, {isLoading: startSend}] = useSetTodosMutation();

	const [deleteTodos, {isLoading: startDelete}] = useDeleteTodosMutation();

	const handleSend = () => {
		setTodos({
			completed: false,
			id: 1,
			title: "hola",
			userId: 1,
		});
	};

	const handleDelete = () => {
		deleteTodos(200);
	};

	return (
		<div className="App">
			<h1>TodoApp RTK Query</h1>
			<hr />

			<p>Cargando: {isLoading ? "Cargando.." : "Realizado"}</p>
			<p>Solicitando {isLoading ? "Cargando.." : "Realizado"}</p>

			<pre>{JSON.stringify(todo)}</pre>

			{/* <ul>
				{todos.map((todo: Todos) => (
					<li key={todo.id}>
						{todo.title}
						<strong>{todo.completed ? "realizado" : "no realizado"}</strong>
					</li>
				))}
			</ul> */}

			<button onClick={handleTodoIDPrev}>Anterior</button>
			<button onClick={handleTodoIDNext}>Siguiente</button>
			<button onClick={handleSend}>Enviar</button>
			<button onClick={handleDelete}>Eliminar</button>
		</div>
	);
};
