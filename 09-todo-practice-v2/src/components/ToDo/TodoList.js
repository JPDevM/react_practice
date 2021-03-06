import Todo from './Todo'

export default function TodoList({ todosData: todos, fnCheck }) {
  return (
    <>
      {
        todos && todos.map( todo => {
          return <Todo key={ todo.id } todo={ todo } handlerCheck={fnCheck} />
        })
      }
      
      { todos.length <= 0 && <p>Ingresá tu primer tarea</p> }
    </>
  )
}

// export default function TodoList(props) {
//   let { todos, otra, unaMas } = props;
//   console.log(todos, otra, unaMas);
//   return (
//     todos.map(todo => {
//       return <Todo key={todo.id} todo={todo} />
//     })
//   )
// }