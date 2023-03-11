`use strict`
const allEmployee=[]
let secEl=document.getElementById("sec1");
let secEl2=document.getElementById("sec2");
let secEl3=document.getElementById("sec3");
let secEl4=document.getElementById("sec4");
let form=document.getElementById("form");

function Employee (fullName,department,level,imageUrl,salary) {
    this.fullName=fullName;
    this.department=department;
    this.level=level;
    this.imageUrl=imageUrl;
    this.salary=salary;
    allEmployee.push(this)
}

// let firstEmployee=new Employee("1000","Ghazi Samer","Administration","Senior","assets/Ghazi.jpg");
// let secondEmployee=new Employee("1001","Lana Ali","Finance","Senior","assets/Lana.jpg");
// let thirdEmployee=new Employee("1002","Tamara Ayoub","Marketing","Senior","assets/Tamara.jpg");
// let forthEmployee=new Employee("1003","Safi Walid","Administration","Mid-Senior","assets/Safi.jpg");
// let fifthEmployee=new Employee("1004","Omar Zaid","Development","Senior","assets/Omar.jpg");
// let sixthEmployee=new Employee("1005","Rana Saleh","Development","Junior","assets/Rana.jpg");
// let seventhEmployee=new Employee("1006","Hadi Ahmad","Finance","Mid-Senior","assets/Hadi.jpg");

Employee.prototype.calculateSalary= function (){
    if(this.level=="Senior"){
        return Math.floor(Math.random() * (2000 - 1500) ) + 1500;
    }else if(this.level=="Mid-Senior"){
        return Math.floor(Math.random() * (1500 - 1000) ) + 1000;
    }else if (this.level=="Junior"){
        return Math.floor(Math.random() * (1000 - 500) ) + 500;   
    }
}
Employee.prototype.netSalary= function (){
  
   let tax =this.calculateSalary()*0.075;
   let netSal=this.calculateSalary()-tax;
   this.salary=netSal;
   return netSal;
}

Employee.prototype.render=function(){
    let imgEmp=document.createElement("img");
    imgEmp.src=this.imageUrl;
    secEl.appendChild(imgEmp);
    let h4El=document.createElement("h4");
    h4El.textContent=`Name: ${this.fullName} - ID: ${this.getEmpId()}`;
    secEl.appendChild(h4El);
    let h4El2=document.createElement("h4");
    h4El2.textContent=`Department: ${this.department} - Level: ${this.level}.`;
    secEl.appendChild(h4El2);
    let h4El3=document.createElement("h4");
    h4El3.textContent=this.netSalary()
    secEl.appendChild(h4El3);
      
}

for (let i = 0; i < allEmployee.length; i++) {
    allEmployee[i].render();
}
Employee.prototype.getEmpId=function(){
       let empId;
    switch(this.fullName){
        case "Ghazi Samer":
            empId=1000;
            break;
        case "Lana Ali":
            empId=1001;
            break;
        case "Tamara Ayoub":
            empId=1002;
            break;
        case "Safi Walid":
            empId=1003;
            break;
        case "Omar Zaid":
            empId=1004;
            break;
        case "Rana Saleh":
            empId=1005;
            break;
        case "Hadi Ahmad":
            empId=1006;
            break;
    }
    this.employeeId=empId;
    return empId ;
}


form.addEventListener("submit", submitHandler);
function submitHandler(event) {
    event.preventDefault();
    let flName=(event.target.fname.value);
    let dept=(event.target.department.value);
    let levelVar=(event.target.level.value);
    let imgVar=(event.target.img.value);
    let showNewEmployee=new Employee(flName,dept,levelVar,imgVar);
    showNewEmployee.render();
}