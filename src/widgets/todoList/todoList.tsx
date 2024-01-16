import { TodoItem } from '@entities/todoItem';
import { useAppSelector } from '@shared/store/hooks';
import { selectAllTodos } from '@shared/store/todoSlice';
import { ITodo } from '@shared/types';

import styles from './todoList.module.scss';

export const TodoList = () => {
  const todos = useAppSelector(selectAllTodos);

  return (
    <ul className={styles.list}>
      {todos.map((todo: ITodo) => {
        return <TodoItem key={todo.id} {...todo} />;
      })}
    </ul>
  );
};
