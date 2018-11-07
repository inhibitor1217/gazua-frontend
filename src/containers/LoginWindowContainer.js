import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
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
        const { AuthActions, UserActions, form } = this.props;
        const { email, password } = form.toJS();

        if (email === '') {
            AuthActions.setError({ error: '이메일 주소를 입력해 주세요.' });
            return;
        }
        if (password === '') {
            AuthActions.setError({ error: '비밀번호를 입력해 주세요.' });
            return;
        }

        try {
            await AuthActions.localLogin({
                email, password
            });
            const { loginResult } = this.props;
            // do something with loginResult

            this.props.history.push('/dashboard');
        } catch (e) {
            if (e.response) {
                if (e.response.status === 400) {
                    if (e.response.data.message === 'email schema error') {
                        AuthActions.setError({ error: '이메일 형식이 올바르지 않습니다.' });
                        return;
                    }
                } else if (e.response.status === 403) {
                    if (e.response.data.message === 'user does not exist') {
                        AuthActions.setError({ error: '존재하지 않는 계정입니다.' });
                        return;
                    }
                    if (e.response.data.message === 'wrong password') {
                        AuthActions.setError({ error: '비밀번호가 올바르지 않습니다.' });
                        return;
                    }
                }
            }
            console.log(e);
            AuthActions.setError({ error: '로그인 에러' });
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
export default withRouter(connect(
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
)(LoginWindowContainer));