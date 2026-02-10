
(() => {
  const form = document.querySelector('#taskForm');
  const input = document.querySelector('#taskInput');
  const list = document.querySelector('#taskList');

  // Optional starter tasks (можешь удалить)
  const initialTasks = ['First item', 'Second item', 'Third item'];
  initialTasks.forEach((text) => addTask(text));

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const text = input.value.trim();
    if (!text) return;

    addTask(text);
    input.value = '';
    input.focus();
  });

  function addTask(text) {
  
    const li = document.createElement('li');
    li.classList.add('task-item');

    // checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('task-checkbox');

    // text
    const span = document.createElement('span');
    span.classList.add('task-text');
    span.textContent = text;

    // delete button
    const delBtn = document.createElement('button');
    delBtn.type = 'button';
    delBtn.classList.add('icon-btn');
    delBtn.setAttribute('aria-label', 'Delete task');

    const trash = document.createElement('span');
    trash.classList.add('trash');
    trash.textContent = '🗑';
    delBtn.appendChild(trash);

    // events
    checkbox.addEventListener('change', () => {
      li.classList.toggle('done', checkbox.checked); // classList.toggle из лекции :contentReference[oaicite:2]{index=2}
    });

    delBtn.addEventListener('click', () => {
      li.remove(); // modern remove из лекции :contentReference[oaicite:3]{index=3}
    });

    // build structure
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(delBtn);
    list.appendChild(li); // appendChild из лекции :contentReference[oaicite:4]{index=4}
  }
})();
