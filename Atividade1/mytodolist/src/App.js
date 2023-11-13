//codigo para executar a aplicação
import 'bootstrap/dist/css/bootstrap.min.css';//importação do bootstrap normal
import {  Button, InputGroup, FormControl, ListGroup, Container } from 'react-bootstrap';//importação do bootstrap-react
import { useState } from 'react';

const TodoApp = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, { name: task, completed: false }]);
      setTask('');
    }
  };

  const handleRemoveTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleToggleCompletion = (index) => {
    const updatedTasks = tasks.map((t, i) =>
      i === index ? { ...t, completed: !t.completed } : t
    );
    setTasks(updatedTasks);
  };

  /*view do resultado do app em execução*/
  return (
    //container para centralizar
    <Container className="text-center">
      <h1>To-Do List</h1>
        <InputGroup className="mb-3">
          <FormControl
            type="text"
            value={task}
            onChange={handleInputChange}
            placeholder="Digite uma nova atividade"
          />
          <Button variant="primary" onClick={handleAddTask}>
            Adicionar
          </Button>
        </InputGroup>
   
      
      <ListGroup>
        {tasks.map((task, index) => (
          <ListGroup.Item
            key={index}
            style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
          >
            {task.name}
            <Button
              variant="danger"
              className="ml-2"
              onClick={() => handleRemoveTask(index)}
            >
              Excluir
            </Button>
            <Button
              variant={task.completed ? 'secondary' : 'success'}
              className="ml-2"
              onClick={() => handleToggleCompletion(index)}
            >
              {task.completed ? 'Desmarcar' : 'Marcar como Concluído'}
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
     </Container>
  
  );
};

export default TodoApp;
