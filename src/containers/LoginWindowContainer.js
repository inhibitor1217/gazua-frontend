import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import { LoginWindow } from 'components';
import * as loginActions from 'store/modules/login';

class LoginWindowContainer extends Component {
    constructor (props) {
        super(props);
        this.onChangeInput = this.onChangeInput.bind(this);
        this.onLocalLogin = this.onLocalLogin.bind(this);
    }

    onChangeInput (event) {
        const { LoginActions } = this.props;
        const { name, value } = event.target;
        LoginActions.changeInput({ name, value });
    }

    async onLocalLogin () {
        const { LoginActions, form } = this.props;
        const { email, password } = form.toJS();

        if (email === '') {
            LoginActions.setError({ error: '이메일 주소를 입력해 주세요.' });
            return;
        }
        if (password === '') {
            LoginActions.setError({ error: '비밀번호를 입력해 주세요.' });
            return;
        }

        try {
            await LoginActions.localLogin({
                email, password
            });
            const { loginResult } = this.props;
            // do something with loginResult

            this.props.history.push('/');
        } catch (e) {
            if (e.response) {
                if (e.response.status === 400) {
                    if (e.response.data.message === 'email schema error') {
                        LoginActions.setError({ error: '이메일 형식이 올바르지 않습니다.' });
                        return;
                    }
                } else if (e.response.status === 403) {
                    if (e.response.data.message === 'user does not exist') {
                        LoginActions.setError({ error: '존재하지 않는 계정입니다.' });
                        return;
                    }
                    if (e.response.data.message === 'wrong password') {
                        LoginActions.setError({ error: '비밀번호가 올바르지 않습니다.' });
                        return;
                    }
                }
            }
            console.log(e);
            LoginActions.setError({ error: '서버 에러' });
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
        form: state.login.get('form'),
        error: state.login.get('error'),
        loginResult: state.login.get('loginResult')
    }),
    // mapDispatchToProps
    (dispatch) => ({
        LoginActions: bindActionCreators(loginActions, dispatch)
    })
)(LoginWindowContainer));