
import EnrollStudentForm from './components/sms/EnrollStudent'
import { useSelector } from 'react-redux';
import ListStudents from './components/sms/ListStudent';

import { BrowserRouter, Route, Link } from 'react-router-dom';

function App2() {

    let students = useSelector(state => state.students);

    return <>
        <BrowserRouter>
            <h2>Total Registererd Students are {students.length}</h2>

            <Link to='/enroll'>Enroll</Link> | <Link to='/list'>List</Link>
            <hr />
            <Route path='/enroll'>
                <EnrollStudentForm />
            </Route>
            <Route path='/list'>
                <ListStudents />
            </Route>
        </BrowserRouter>


    </>
}

export default App2;