import React, {Component} from 'react'



    class User extends Component {
        constructor(props){
            super(props);

            this.state ={
                editing: false
            };
        }

edit(){
            const {user} = this.props;
            this.setState({
                editing: true
            });
            this.props.setEdit(user.name, user.condition, user.howIsYourDay);
        }
updateUser(id){
            this.props.updateUser(id)
            this.setState({
                editing: false
            })

        }



render(){
const{user, deleteUser, } = this.props;
console.log(this.props)  ///this is an important console log for debuffing
return(
        <div>
            <h4>{user.name}</h4>
            <p>{user.condition}</p>
            <p>{user.howIsYourDay}</p>

            <button onClick={()=> deleteUser(user.id)}>Delete</button>
            {this.state.editing ? (
                <button onClick={()=> this.updateUser(user.id)}>Save</button>
            ) : (
                
                <button onClick={()=> this.edit()}>Update</button>
                
                
            )}
        </div>
)
}





    }

export default User;