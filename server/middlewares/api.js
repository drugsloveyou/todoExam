module.exports = app => {
  const msg = text => JSON.stringify({ errCode: 0, errMsg: `success ${text}` });

  app.get("/json/addTodo", (req, res) => {
    res.send(msg("addTodo"));
  });
  
  app.get("/json/deleteTodo", (req, res) => {
    res.send(msg("deleteTodo"));
  });
  
  app.get("/json/editTodo", (req, res) => {
    res.send(msg("editTodo"));
  });
  
  app.get("/json/completeTodo", (req, res) => {
    res.send(msg("completeTodo"));
  });
  
  app.get("/json/completeAllTodo", (req, res) => {
    res.send(msg("completeAllTodo"));
  });
  
  app.get("/json/deleteCompletedTodo", (req, res) => {
    res.send(msg("deleteCompletedTodo"));
  });
  
  app.get("/json/filterTodo", (req, res) => {
    res.send(msg("filterTodo"));
  });
};
