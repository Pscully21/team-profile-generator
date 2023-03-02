class employee {
    constructor(name, id, email,) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
    getName() {
        console.log(this.name);
        return `${this.name}`;
    }
    getId() {
        console.log(this.id);
        return`${this.id}`;
    }
    getEmail() {
        console.log(this.email);
        return `${this.email}`;
    }
    getRole() {
        console.log(this.role);
        return`Employee`;
    }
    printInfo() {
        console.log(`This Employee has the title of ${this.role}`);
    }
}
module.exports = employee;