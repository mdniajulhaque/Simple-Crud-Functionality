import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css'
import DeleteTeacher from './component/Teacher/deleteteacher';
import UpdateTeacher from './component/Teacher/updateteacher';
import ReadStudent from './component/Student/readstudentdata';
import CreateStudent from './component/Student/createstudent';
import DeleteStudent from './component/Student/deletestudent';
import UpdateStudent from './component/Student/updatestudent';
import CreateTeacher from './component/Teacher/createteachercomponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
const Modalr = ReactDOM.createRoot(document.getElementById('modal'));
const deleteTeacher = ReactDOM.createRoot(document.getElementById('deletT'))
const updateTeacher = ReactDOM.createRoot(document.getElementById('UpdateT'))
const readStudent = ReactDOM.createRoot(document.getElementById('ReadS'))
const createStudent = ReactDOM.createRoot(document.getElementById('creatT'))
const deleteStudent = ReactDOM.createRoot(document.getElementById('deletes'))
const updateStudent = ReactDOM.createRoot(document.getElementById('UpdateS'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
Modalr.render(
  <React.StrictMode>
    <CreateTeacher />
  </React.StrictMode>
);
deleteTeacher.render(
  <React.StrictMode>
  <DeleteTeacher />
</React.StrictMode>

)
updateTeacher.render(
  <React.StrictMode>
  <UpdateTeacher />
</React.StrictMode>

)
readStudent.render(
  <React.StrictMode>
  <ReadStudent />
</React.StrictMode>
)
createStudent.render(
  <React.StrictMode>
  <CreateStudent />
</React.StrictMode>
)
deleteStudent.render(
  <React.StrictMode>
  <DeleteStudent />
</React.StrictMode>
)
updateStudent.render(
  <React.StrictMode>
  <UpdateStudent />
</React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
