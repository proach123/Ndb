
const users = [
{
        id: 0,
      name: 'Mod Patrick',
      condition: 'Happy',
      howIsYourDay: 'Feeling tired'
}
]

let id = 1;

module.exports = {
    

    getUser: (req,res)=>{
res.status(200).send(users)
    },

    createUser:(req,res)=>{
        const {name, condition, howIsYourDay} = req.body;
        users.push({
            id,
            name,
            condition,
            howIsYourDay
        });
        id++
        res.status(200).send(users);
    },

    deleteUser: (req, res)=>{
        const {id} = req.params;
        
        const index = users.findIndex(user=> user.id == id);

        users.splice(index,1);

        res.status(200).send(users)
    },

    updateUser: (req,res)=>{
        const {id}= req.params;
        const {name,condition,howIsYourDay} = req.body

        let index = users.findIndex(user => user.id == id);

        let foundUser = users[index];

        foundUser = {
            id:foundUser.id,
            name:name || foundUser.name,
            condition:condition || condition.name,
            howIsYourDay:howIsYourDay|| howIsYourDay.name
        };

        users.splice(index,1,foundUser);

        res.status(200).send(users)
    }
}