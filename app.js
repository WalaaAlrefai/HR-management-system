`use strict`
const allEmployee=[]
function Employee (employeeId,fullName,department,level,imageUrl,salary) {
    this.employeeId=employeeId;
    this.fullName=fullName;
    this.department=department;
    this.level=level;
    this.imageUrl=imageUrl;
    this.salary=salary;
    allEmployee.push(this)
}

let firstEmployee=new Employee(1000,"Ghazi Samer","Administration","Senior",);
let secondEmployee=new Employee(1001,"Lana Ali","Finance","Senior",);
let thirdEmployee=new Employee(1002,"Tamara Ayoub","Marketing","Senior",);
let forthEmployee=new Employee(1003,"Safi Walid","Administration","Mid-Senior",);
let fifthEmployee=new Employee(1004,"Omar Zaid","Development","Senior",);
let sixthEmployee=new Employee(1005,"Rana Saleh","Development","Junior",);
let seventhEmployee=new Employee(1006,"Hadi Ahmad","Finance","Mid-Senior",);

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
    document.write(`<h1>the employee name is ${this.fullName} and the salary is ${this.netSalary()}.</h1>`);
}

for (let i = 0; i < allEmployee.length; i++) {
    allEmployee[i].render();
}