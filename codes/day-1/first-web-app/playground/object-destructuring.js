var obj = {
    id: 1,
    name: 'anil',
    salary: 1000
}

// const id = obj.id
// const name = obj.name
// const salary = obj.salary

const { id, name, salary } = obj
console.log(id, name, salary);
//console.log(idVal, nameVal, salaryVal);

const numbers = [10, 21, 23, 45, 67]
// const second = numbers[1]
// const fourth = numbers[3]

const [, second, , fourth] = numbers
console.log(second, fourth);

var data = [
    {
        id: 1,
        name: 'anil',
        manager: true,
        projects: [
            {
                projId: 1,
                projName: 'CTA',
                teamMembers: [
                    {
                        name: 'sunil'
                    },
                    {
                        name: 'suresh'
                    }
                ]
            },
            {
                projId: 2,
                projName: 'abc',
                teamMembers: [
                    {
                        name: 'vinod'
                    },
                    {
                        name: 'ram'
                    }
                ]
            }
        ]
    }
]

const [{ projects: [, { teamMembers: [, { name: memberName }] }] }] = data
console.log(memberName);