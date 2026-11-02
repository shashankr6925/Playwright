
const emp = {
    emp1: {
        firstname: "SHASHANK",
        lastname: "R"
    },

    emp2: {
        firstname: "Alex",
        lastname: "A"
    },

    emp3: {
        firstname: "Adam",
        lastname: "B"
    }
};

for (const employee in emp) {
    console.log(emp[employee].firstname);
    console.log(emp[employee].lastname);
}
