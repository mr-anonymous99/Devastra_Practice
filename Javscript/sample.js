const numbers=[1,2,3,4,5]

const newnumbers=[...numbers,6,7]
// console.log(newnumbers);

const {name,...values}={name:"vinay",place:"bhimavram",age:20}

// console.log(name);
// console.log(values);



//this can later known in the discussion of forms !!!
const key="email"
const email="vinay@gmail.com"

const obj={
    [key]:email
}

console.log(obj);

