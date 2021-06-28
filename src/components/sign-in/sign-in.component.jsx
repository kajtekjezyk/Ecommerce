import React, {Component} from 'react';
import './sign-in.style.scss';
import InputForm from '../input-form/input-form.component';
import CustomButton from '../custom-button/custom-button.component';

class SignIn extends Component {
    state = {
        email: "",
        password: ""
    }

    handleSubmit = event => {
        event.preventDefault();
    }

    onFormChange = event => {
        let {value, name} = event.target;
        this.setState({[name] : value});
    }

    render () {
        return (
            <div className='sign-in'>
                <h2 className='title'>I already have a password</h2>
                <span>Sign in with your email and password</span>


                <form onSubmit={this.handleSubmit}>
                    <InputForm
                        name="email"
                        type="email"
                        value={this.state.email}
                        label="Email"
                        onChange={this.onFormChange}
                    />
                    <InputForm
                        name="password"
                        type="password"
                        value={this.state.password}
                        onChange={this.onFormChange}
                        label="Password"
                    />
                    <CustomButton type="submit">Sign In</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;