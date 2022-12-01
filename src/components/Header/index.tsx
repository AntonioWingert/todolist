import { Container } from './styles';
import {AiOutlinePlusCircle} from 'react-icons/ai';
import todoLogo from '../../assets/todoLogo.svg'
import { ChangeEvent, FormEvent, useState } from 'react';

interface Props {
  onAddTask: (taskTitle: string) => void;
}

export function Header({ onAddTask}: Props) {
  const [title, setTitle] = useState('');

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    onAddTask(title);
    setTitle('');
  }

  return (
    <Container>
      <img src={todoLogo} alt="logo-toDo" />
      <form onSubmit={handleSubmit}>
        <input 
        value={title}
        onChange={({target}) => setTitle(target.value)}
        placeholder='Adicione uma nova tarefa'
        type="text" />
        <button type='submit'>Criar <AiOutlinePlusCircle size={20} /></button>
      </form>
    </Container>
  );
}
