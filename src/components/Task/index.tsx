import { CheckContainer, Container, DeleteButton } from './styles';

import { TbTrash } from "react-icons/tb";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { ITask } from '../../App';

interface Props {
  task: ITask;
  onDelete: (taskId: string) => void;
  onComplete: (taskId: string) => void;
}

export function Task({task, onDelete, onComplete}: Props) {

  return (
    <Container>
      <CheckContainer onClick={() => onComplete(task.id)}>
        {task.isCompleted ? <BsFillCheckCircleFill /> : <div />}
      </CheckContainer>

      <p className={task.isCompleted ? 'textCompleted' : ''}>
       {task.title}
      </p>

      <DeleteButton
      onClick={() => onDelete(task.id)}>
        <TbTrash size={20} />
      </DeleteButton>
    </Container>
  );
}
