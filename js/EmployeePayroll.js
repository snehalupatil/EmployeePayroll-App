class EmployeePayroll{

    //getter and Setter for name
    get name() {return this._name;}
    set name(name){
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if(nameRegex.test(name))
            this._name = name;
        else 
            throw "Name is incorrect";
    }

    

    //getter and Setter for startDate
    get startDate() {return this.startDate;}
    set startDate(startDate){
        let startDateRegex = RegExp('^((0?[1-9]|1[012])[/](0?[1-9]|[12][0-9]|3[01])[/](19|20)?[0-9]{2})*$');
        if(startDateRegex.test(startDate))
            this._startDate = startDate;
        else 
            throw "Start Date is incorrect";
    }


    //method
    toString(){
        const options = {year: 'numeric', month: 'long', day: 'numeric'};   
        const empDate = this.startDate === undefined ? "undefined" :
                        this.startDate.toLocaleDateString("en-US",options);
        return "id=" +this.id+ ", name=" +this.name+ ", salary=" +this.salary+
        ", Gender=" +this.gender+ ",department= "+this.department+ ", ProfilePic= "+this.profilePic+
        ", startDate= " +empDate+ ", note= "+this.note;
    }

}
