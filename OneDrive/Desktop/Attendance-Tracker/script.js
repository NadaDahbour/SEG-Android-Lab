let saved = localStorage.getItem("attendance");
let students = ['Sara', 'Ali']
let date = "2026-02-16"
let attendance;
if (saved != null) {
    attendance = JSON.parse(saved);
} else {
    attendance = {}
}
if (attendance[date] == null){
    attendance[date] = {};
}

const studentList = document.getElementById("studentList");
 
for (let i=0; i < students.length; i++) {
    let div = document.createElement("div");
    let name = students[i];
    div.append(name);
    if (attendance[date][name] != null){
            if (attendance[date][name] === "Present"){
                div.style.color = 'green';
            } else if (attendance[date][name] === "Absent"){
                div.style.color = 'red';
            }
        }
    studentList.append(div);

    const present = document.createElement("button");
    present.textContent = "Present"
    const absent = document.createElement("button");
    absent.textContent = "Absent"

    present.addEventListener('click', () => {
        console.log(attendance[date][name] = "Present")
        div.style.color = 'green';
        localStorage.setItem("attendance", JSON.stringify(attendance))
    });

    absent.addEventListener('click', () => {
        console.log(attendance[date][name] = "Absent")
        div.style.color = 'red';
        localStorage.setItem("attendance", JSON.stringify(attendance))
    });

    div.append(present);
    div.append(absent);

    
}
