import axios from 'axios';

export const manisfest = {
    base_url:"http://localhost:3000/api/",
    tablesBD:{
        
        Users:{
            users:"Users_tbl",
            employee:"Employee_tbl",
            students:"Students_tbl",
        },

        Institution:{
            adress:"Adress_tbl",
            institution:"Instruction_tbl",
            educationHub:"EducationHub_tbl",
            laboratory:"labs_tbl",
            courses:"Courses_tbl",
            schoolSubject:"SchoolSubject_tbl",
            assets:"fixedAssent_tbl"
        }
    }
}

export const api = axios.create({
    baseURL:"http://localhost:3000/api/",
    timeout: 3000,
    headers: {
        'Content-Type':'application/json'
    }
});