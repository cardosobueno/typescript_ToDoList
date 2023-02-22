// Import stylesheets
import './style.css';
import { ClasseTarefas } from './tarefas';

const ul = document.getElementById('ListaTarefas');
const input = document.getElementById('TextoTarefa');
const button = document.getElementById('BotaoTarefa');

let minhasTarefas = new ClasseTarefas(ul);
button.addEventListener('click', () => {
  let task = (<HTMLInputElement>input).value;
  (<HTMLInputElement>input).value = '';
  minhasTarefas.add(task);
});
