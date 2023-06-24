const saveStorage = (data) => {
  localStorage.setItem('tasksReact', JSON.stringify(data));
}

export default saveStorage;