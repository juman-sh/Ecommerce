export const validate = values=>{
    let errors = {};
    if(!values.userName){
        errors.userName = 'UserName is required';
    }

    if(!values.email){
        errors.email = 'Email is required';
    }

    if(!values.password){
        errors.password = 'Password is required';
    }
    return errors;
}