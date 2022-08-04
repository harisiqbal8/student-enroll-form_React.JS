import { useSelector, useDispatch } from 'react-redux'

function NoDataState() {
    return <>
        <h2>No student enrolled yet..!</h2>
    </>
}


function StudentsTable(prop) {

    let dispatch = useDispatch()
    // function DeleteStudent(student) {

    //     let dispatch = useDispatch()

    // dispatch({
    //     type: 'delete_student',
    //     payload: student
    // })

    // }
    return <>
        <table border='2'>
            <tbody>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>City</th>
                    {/* <th>Edit</th> */}
                    <th>Action</th>
                </tr>
                {prop.allStudents.map(s => (
                    <tr key={s.id}>
                        <td><input value={s.id} onChange = {() => {
                            // dispatch({
                            //     type: 'edit_student',
                            //     payload: s
                            // })
                        }} /></td>
                        <td><input value={s.name} /></td>
                        <td><input value={s.email} /></td>
                        <td><input value={s.city} /></td>
                        {/* <th><button onClick={() => {
                            dispatch({
                                type: 'edit_student',
                                payload: s
                            })
                        }}>Edit</button></th> */}
                        <th><button onClick={() => {
                            dispatch({
                                type: 'delete_student',
                                payload: s
                            })
                        }}>X</button></th>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
}

function ListStudents() {

    let sList = useSelector(state => state.students)

    return <>
        {
            sList.length ? <StudentsTable allStudents={sList} /> : <NoDataState />
        }
    </>

}

export default ListStudents;