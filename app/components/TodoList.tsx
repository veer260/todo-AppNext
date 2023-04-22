import { Task } from "@/types/tasks";

import TaskComponent from "./TaskComponent";

interface TodoListProps {
  todos: Task[];
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Task</th>

              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {todos.map((todo) => {
              return <TaskComponent key={todo.id} task={todo} />;
            })}

            {/* row 2 */}
            {/* <tr>
              <td>Hart Hagerty</td>

              <td>Purple</td>
            </tr> */}
            {/* row 3 */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TodoList;
