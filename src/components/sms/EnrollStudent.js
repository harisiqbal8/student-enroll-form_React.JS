import { useState } from 'react'
import { useDispatch } from 'react-redux'

function EnrollStudent() {

    const cities = [
        'Karachi',
        'Lahore',
        'Islamabad',
        'Peshawar',
        'Quetta',
    ]

    const [userName, setUserName] = useState('')
    const [emailAddress, setEmailAddress] = useState('')
    const [city, setCity] = useState('')
    const dispatch = useDispatch()

    function onFormSubmission(event) {
        event.preventDefault();
        dispatch({
            type: 'add_new_student',
            payload: {
                name: userName,
                email: emailAddress,
                city: city
            }
        })
        
    }

    return <>

        <form onSubmit={onFormSubmission}>
            <table>
                <tr>
                    <td><label for='userNameField'> User Name </label></td>
                    <td><input type='text' id='userNameField' onChange={e => { setUserName(e.target.value) }} />  </td>
                </tr>
                <tr>
                    <td><label for='emailField'> Email Address </label></td>
                    <td><input type='text' id='emailField' onChange={e => { setEmailAddress(e.target.value) }} />  </td>
                </tr>
                <tr>
                    <td><label for='cityField'> City </label></td>
                    <td>
                        <select id='cityField' onChange={e => { setCity(e.target.value) }} >
                            <option selected disabled value=''>Please select an option</option>
                            {
                                cities.map(city => <option value={city} > {city.toUpperCase()}</option>)
                            }
                        </select>
                    </td>
                </tr>
                <tr>

                    <th colSpan='2'> <button type='submit' 
                    // onClick={document.getElementById('userNameField').innerHTML=''}
                    >Save My Information</button> </th>
                </tr>

            </table>
        </form>
    </>

}

export default EnrollStudent;