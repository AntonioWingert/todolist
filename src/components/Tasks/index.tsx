import { ITask } from '../../App';
import { Task } from '../Task';
import { Container, List, EmptySection } from './styles';
import { TbClipboardText } from "react-icons/tb";

interface Props {
  tasks: ITask[];
  onDelete: (taskId: string) => void;
  onComplete: (taskId: string) => void;
}

export function Tasks({tasks, onDelete, onComplete}: Props) {
  const tasksQuantity = tasks.length;
  const completedTasks = tasks.filter(task => task.isCompleted).length;

  return (
    <Container>
      <header>
        <div>
          <p>Tarefas criadas</p>
          <span>{tasksQuantity}</span>
        </div>
        <div>
          <p className='purpleText'>Concluídas</p>
          <span>{completedTasks} de {tasksQuantity}</span>
        </div>
      </header>
      <List>
        {tasks.map((task) => (
          <Task key={task.id} task={task} onDelete={onDelete} onComplete={onComplete} />
        ))}

        {tasks.length <= 0 && (
          <EmptySection>
            <TbClipboardText size={50} />
            <div>
              <p>Você ainda não tem tarefas cadastradas</p>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
          </EmptySection>
        )}
      </List>
    </Container>
  );
}
