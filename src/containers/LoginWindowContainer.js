import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { LoginWindow } from 'components';
import * as authActions from 'store/modules/auth';

class LoginWindowContainer extends Component {
    constructor (props) {
        super(props);
        this.onChangeInput = this.onChangeInput.bind(this);
        this.onLocalLogin = this.onLocalLogin.bind(this);
    }

    onChangeInput (event) {
        const { AuthActions } = this.props;
        const { name, value } = event.target;
        AuthActions.changeInput({ name, value });
    }

    async onLocalLogin () {
        const { AuthActions, form } = this.props;
        const { email, password } = form.toJS();
        try {
            await AuthActions.localLogin({
                email, password
            });
            console.log(this.props.loginResult);
        } catch (e) {
            console.log(e);
        }
    }

    render () {
        const { form, error } = this.props;
        const {
            onChangeInput,
            onLocalLogin
        } = this;
        return (
            <div>
                <LoginWindow
                    form={form}
                    error={error}
                    onChangeInput={onChangeInput}
                    onLocalLogin={onLocalLogin}
                />
            </div>
        );
    }
}

// connect to redux
export default connect(
    // mapStateToProps
    (state) => ({
        form: state.auth.get('form'),
        error: state.auth.get('error'),
        loginResult: state.auth.get('loginResult')
    }),
    // mapDispatchToProps
    (dispatch) => ({
        AuthActions: bindActionCreators(authActions, dispatch)
    })
)(LoginWindowContainer);