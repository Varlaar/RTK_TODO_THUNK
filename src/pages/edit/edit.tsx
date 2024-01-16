import { EditTodo } from '@feature/editTodo';

import styles from './ui/edit.module.scss';

export const EditPage = () => {
  return (
    <div>
      <h1>Редактирование задачи</h1>
      <EditTodo />
    </div>
  );
};
