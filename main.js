const employeesData = [
    {
      fullName: { firstName: "Ahmed", lastName: "Khalid" },
      department: "Human Resources (HR)",
      baseSalary: 2000,
      entryDate: "01/01/2022",
      exitDate: "01/03/2023",
      age: 30,
      hoursWorked: 8,
      experience: ["Recruitment", "Employee Training", "HR Policy"],
    },
    {
      fullName: { firstName: "Mohamed", lastName: "Ali" },
      department: "Human Resources (HR)",
      baseSalary: 2500,
      entryDate: "01/01/2022",
      exitDate: "01/03/2023",
      age: 28,
      hoursWorked: 8,
      experience: ["Compensation & Benefits", "Performance Appraisals", "Onboarding"],
    },
    {
      fullName: { firstName: "Sara", lastName: "Noor" },
      department: "Human Resources (HR)",
      baseSalary: 1800,
      entryDate: "01/01/2021",
      exitDate: "01/03/2023",
      age: 32,
      hoursWorked: 7,
      experience: ["Employee Relations", "HR Compliance", "Benefits Administration"],
    },
    // Add 10 more employees with experience
    {
      fullName: { firstName: "John", lastName: "Doe" },
      department: "Management",
      baseSalary: 3000,
      entryDate: "01/02/2022",
      exitDate: "01/04/2023",
      age: 35,
      hoursWorked: 8,
      experience: ["Strategic Planning", "Team Leadership", "Budget Management"],
    },
    {
      fullName: { firstName: "Alice", lastName: "Johnson" },
      department: "Contractors",
      baseSalary: 2200,
      entryDate: "01/03/2021",
      exitDate: "01/05/2023",
      age: 28,
      hoursWorked: 6,
      experience: ["Construction", "Project Management", "Supplier Relations"],
    },
    {
      fullName: { firstName: "Bob", lastName: "Smith" },
      department: "Management",
      baseSalary: 3200,
      entryDate: "01/04/2022",
      exitDate: "01/06/2023",
      age: 40,
      hoursWorked: 7,
      experience: ["Business Strategy", "Operations Management", "Staff Development"],
    },
    {
      fullName: { firstName: "Emily", lastName: "Davis" },
      department: "Contractors",
      baseSalary: 2400,
      entryDate: "01/05/2021",
      exitDate: "01/07/2023",
      age: 30,
      hoursWorked: 8,
      experience: ["Construction Projects", "Site Supervision", "Quality Control"],
    },
    {
      fullName: { firstName: "Daniel", lastName: "Wilson" },
      department: "Management",
      baseSalary: 3100,
      entryDate: "01/06/2022",
      exitDate: "01/08/2023",
      age: 38,
      hoursWorked: 8,
      experience: ["Strategic Planning", "Leadership Development", "Project Management"],
    },
    {
      fullName: { firstName: "Linda", lastName: "Brown" },
      department: "Contractors",
      baseSalary: 2300,
      entryDate: "01/07/2021",
      exitDate: "01/09/2023",
      age: 29,
      hoursWorked: 7,
      experience: ["Construction", "Subcontractor Management", "Safety Regulations"],
    },
    {
      fullName: { firstName: "Chris", lastName: "Anderson" },
      department: "Management",
      baseSalary: 3300,
      entryDate: "01/08/2022",
      exitDate: "01/10/2023",
      age: 42,
      hoursWorked: 8,
      experience: ["Business Strategy", "Financial Analysis", "Team Leadership"],
    },
    {
      fullName: { firstName: "Megan", lastName: "Evans" },
      department: "Contractors",
      baseSalary: 2500,
      entryDate: "01/09/2021",
      exitDate: "01/11/2023",
      age: 31,
      hoursWorked: 8,
      experience: ["Construction Projects", "Project Scheduling", "Quality Assurance"],
    },
    {
      fullName: { firstName: "William", lastName: "Clark" },
      department: "Management",
      baseSalary: 3400,
      entryDate: "01/10/2022",
      exitDate: "01/12/2023",
      age: 45,
      hoursWorked: 8,
      experience: ["Business Development", "Team Building", "Budget Management"],
    },
    {
      fullName: { firstName: "Olivia", lastName: "Moore" },
      department: "Contractors",
      baseSalary: 2600,
      entryDate: "01/11/2021",
      exitDate: "01/01/2024",
      age: 32,
      hoursWorked: 8,
      experience: ["Construction Planning", "Supplier Relations", "Cost Control"],
    },
    {
      fullName: { firstName: "Matthew", lastName: "Lee" },
      department: "Management",
      baseSalary: 3500,
      entryDate: "01/12/2022",
      exitDate: "01/02/2024",
      age: 47,
      hoursWorked: 8,
      experience: ["Strategic Planning", "Financial Analysis", "Team Leadership"],
    },
  ];


// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//-----------------Q1---------------------

//   1- View HR department employees only.
let hrEmpoyee = employeesData.filter((e)=> e.department == 'Human Resources (HR)');
console.log('HR Department Employees');
console.log(hrEmpoyee);



// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// -----------------Q2---------------------

// 2-Display total salaries for each department.
let totalSalary = [0.0,0.0,0.0]
employeesData.forEach(e=>{
    if(e.department=='Human Resources (HR)'){
        totalSalary[0]+=e.baseSalary;
    } else if (e.department == 'Management') {
        totalSalary[1]+=e.baseSalary;
    }
    else {
        totalSalary[2]+=e.baseSalary;
    }
});
console.log(`Total Salaries by Department
Human Resources (HR): ${totalSalary[0]}$
Management: ${totalSalary[1]}$ 
Contractors: ${totalSalary[2]}$`)


// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//-----------------Q3---------------------

// 3-Calculate the average salary for all employees in all departments.
avrSalary = totalSalary.reduce((sum,indexVal)=>sum+indexVal)/employeesData.length
console.log(`Average Salary for All Departments: $${parseFloat(avrSalary)}`);


// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//-----------------Q4---------------------

// 4-Calculate the average age of all employees.
let ages = Array()
employeesData.forEach((e)=> ages.push(e.age));
avrAges = ages.reduce((sum,currVal)=> sum+currVal)/ages.length;
console.log(`Average Age of Employees: ${avrAges.toFixed(2)} years`);


// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// -----------------Q5---------------------

// **hint**: Every hour an employee works is 0.25% more than the basic salary
// 5-Ahmed worked for 3 extra hours. Calculate the bonus he received and prind the bouns and the salary after add the bouns. update salary for ahmed in the object and print his data.
employeesData.forEach((e)=>{
    if(e.fullName.firstName=="Ahmed"){
    ahmed = e;
    index = employeesData.indexOf(ahmed)
    }
});
ahmedBonus = 0.0025*3;
employeesData[index].baseSalary=(ahmedBonus*ahmed.baseSalary)+ahmed.baseSalary;
console.log(`Ahmed's Bonus: ${ahmedBonus}
Ahmed's Salary after Bonus: ${employeesData[index].baseSalary}`);
console.log(employeesData[index]);

/*here I think the real result is wrong, the bonus is 0.75% which is 0.0075
so, if we calsulate the bonus it will be 0.0075 * 2000 which is 15
then the salary after bonus is 15+2000 = 2015 // Bonus is 0.0075 or 0.75% NOT 0.75
*/



// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//-----------------Q6---------------------

// 6-Number of Continuous Employees by (Year) you can do it by all Date if you want.
let numberOfContinuos = employeesData.filter((e) => e.exitDate[9]=='4') //index 9 is the year 2024
console.log(`Number of Continuous Employees: ${numberOfContinuos.length}`); //length is the number of employee


// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//-----------------Q7---------------------

// 7-A new deal worth 3 million was completed and it was decided that all employee receives an amount of 0.5%. What is the increase in Ahmed’s salary? update salary for ahmed in the object and print his data.
let increace = 3000000/employeesData.length*0.005
employeesData[index].baseSalary += increace
console.log(`Increase in Ahmed's Salary: $${increace.toFixed(2)}`);
console.log(employeesData[index])

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//-----------------Q8---------------------

// 8- Print FullName of employees who have this experience [Construction Projects] .
let emplyeeConstructionProjects = Array()
emplyeeConstructionProjects = employeesData.filter(e=>e.experience.find(e=>e=='Construction Projects'))
console.log(`Employees with "Construction Projects" Experience:`);
emplyeeConstructionProjects.forEach((e)=>console.log(e.fullName.firstName+' '+e.fullName.lastName))



// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//-----------------Q9---------------------

// 9-how many hour all employees work.
totalHours = Array()
employeesData.forEach((e)=>totalHours.push(e.hoursWorked));
console.log(`Total Hours Worked by All Employees: ${totalHours.reduce((acc,currVal)=> acc+currVal)} hours`);


// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//-----------------Q10---------------------

// 10-list the all experience without repeat the same experience.
let unique = Array()
let  j = 1
employeesData.forEach(
    (e)=>{
        for(var i=0 ; i<3 ; i++){
        if(i<3 && !unique.includes(e.experience[i])){
            unique.push(e.experience[i])
        }
    }
    }
)
console.log('Unique Experiences:');
unique.forEach((e)=> {
    console.log(`${j}. ${unique[j-1]}`)
    j++
})
