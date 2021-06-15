class EmployeePayroll{

    //getter and Setter for id
    get id() {return this.id;}
    set id(id){
        this._id = id;
    }

    //getter and Setter for name
    get name() {return this._name;}
    set name(name){
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if(nameRegex.test(name))
            this._name = name;
        else 
            throw "Name is incorrect";
    }

    //getter and Setter for profilePic
    get profilePic() {return this._profilePic};
    set profilrPic(profilePic){
        this._profilePic = profilePic;
    }

    //getter and Setter for gender
    get gender() {return this._gender;}
    set gender(gender){
        this._gender = gender;
    }

    //getter and Setter for department
    get department() {return this._departmetnt;}
    set department() {
        this._departmetnt = this.department;
    }

    //getter and Setter for note
    get note() {return this._note;}
    set note(note){
        this._note = note;
    }

    //getter and Setter for salary
    get salary() { return this._salary;}
    set salary(salary){
        this._salary = salary;
    }

    //getter and Setter for startDate
    get startDate() {return this.startDate;}
    set startDate(startDate){
        this._startDate = startDate;
        
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