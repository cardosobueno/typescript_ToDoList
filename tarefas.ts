export class ClasseTarefas {
  list: string[] = [];
  ul: HTMLElement;

  constructor(e: HTMLElement) {
    this.ul = e;
    this.ler();
    this.render();
  }

  salvar() {
    localStorage.setItem('lista-afazeres-ts', JSON.stringify(this.list));
  }

  ler() {
    let saved = localStorage.getItem('lista-afazeres-ts');
    if (saved) {
      this.list = JSON.parse(saved);
    }
  }

  render() {
    this.ul.innerHTML = '';
    this.list.forEach((task) => {
      const li = document.createElement('li');
      const btn = document.createElement('button');

      btn.innerHTML = '-';
      btn.addEventListener('click', () => {
        this.remove(task);
      });
      li.innerText = task;
      li.appendChild(btn);
      this.ul.appendChild(li);
    });
  }
  add(task: string) {
    this.list.push(task);
    this.salvar();
    this.render();
  }
  remove(task: String) {
    const i = this.list.indexOf(task);
    if (i >= 0) {
      this.list.splice(i, 1);
      this.salvar();
      this.render();
    }
  }
}
