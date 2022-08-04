import { createStore } from "redux";

let initialState = {
    students: []
}


function SMSReducer(state = initialState, action) {

    switch (action.type) {

        case "add_new_student":
            let newStudent = action.payload;
            newStudent.id = Date.now();
            return { ...state, students: [...state.students, newStudent] }
        case "delete_student":
            let allSavedStudents = state.students;
            let allOtherStudents = allSavedStudents.filter(s => s.id != action.payload.id)
            return { ...state, students: allOtherStudents };
        // case "edit_student":
        //     let allPerfectStudents = state.students;
        //     let allEditStudents = allPerfectStudents.filter(s => s.id != action.payload.id)
        //     return { ...state, students: allEditStudents };
        // case "edit_student":
        //     let allPerfectStudents = state.students;
        //     let allEditStudents = allPerfectStudents.filter(s => s.id != action.payload.id)
        //     return { ...state, students: allEditStudents };
        default:
            return { ...state };

    }

}

let smsStore = createStore(SMSReducer);

export default smsStore;