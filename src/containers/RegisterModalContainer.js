import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import Joi from 'joi';
import { RegisterModal } from 'components';
import * as registerActions from 'store/modules/register';

class RegisterModalContainer extends Component {
    constructor(props) {
        super(props);
        this.componentWillUnmount = this.componentWillUnmount.bind(this);
        this.handleChangeInput = this.handleChangeInput.bind(this);
        this.handleCheckForm = this.handleCheckForm.bind(this);
        this.handleSwitchPhase = this.handleSwitchPhase.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
    }

    componentWillUnmount() {
        const { RegisterActions } = this.props;
        RegisterActions.initForm();
    }

    handleChangeInput(event) {
        const { RegisterActions } = this.props;
        const { name, value } = event.target;
        RegisterActions.changeInput({ name, value });
    }

    async handleCheckForm() {
        const { form, RegisterActions } = this.props;
        const { email, password, confirmPassword } = form.toJS();
        const { handleSwitchPhase } = this;

        if (email === '') {
            RegisterActions.setError('이메일을 입력해 주세요.');
            return;
        }

        const emailSchema = Joi.string().email();
        const emailValidateCheck = Joi.validate(email, emailSchema);

        if (emailValidateCheck.error) {
            RegisterActions.setError('이메일 형식이 올바르지 않습니다.');
            return;
        }

        const emailDuplicateCheck = await RegisterActions.checkEmail({ email });
        if (emailDuplicateCheck.data.message === 'user exists') {
            RegisterActions.setError('이미 존재하는 계정입니다.');
            return;
        }

        if (password !== confirmPassword) {
            RegisterActions.setError('비밀번호가 서로 일치하지 않습니다.');
            return;
        }

        if (password.length < 6) {
            RegisterActions.setError('6글자 이상의 비밀번호를 입력해주세요.');
            return;
        }

        RegisterActions.setError(null);
        handleSwitchPhase(2)();
    }

    handleSwitchPhase(phase) {
        return () => {
            const { RegisterActions } = this.props;
            RegisterActions.setPhase(phase);
        };
    }

    async handleRegister() {
        const { form, RegisterActions } = this.props;
        const { email, password, username } = form.toJS();
        const { handleSwitchPhase } = this;

        if (username === '') {
            RegisterActions.setError('이름을 입력해주세요.');
            return;
        }

        if (username.length < 2) {
            RegisterActions.setError('이름이 너무 짧습니다.');
            return;
        }

        if (username.length > 30) {
            RegisterActions.setError('이름이 너무 깁니다.');
            return;
        }

        try {
            await RegisterActions.localRegister({
                username, email, password
            });
            handleSwitchPhase(3)();
        } catch (e) {
            console.log(e);
            RegisterActions.setError({ error: '서버 에러' });
        }
    }

    render () {
        const { phase, error, form } = this.props;
        const {
            handleSwitchPhase,
            handleChangeInput,
            handleCheckForm,
            handleRegister
        } = this;
        return (
            <div>
                <RegisterModal
                    phase={phase}
                    error={error}
                    form={form}
                    onChangeInput={handleChangeInput}
                    onClickNextPhase={handleCheckForm}
                    onClickPrevPhase={handleSwitchPhase(1)}
                    onClickRegister={handleRegister}
                />
            </div>
        );
    }
}

// connect to redux
export default withRouter(connect(
    // mapStateToProps
    (state) => ({
        phase: state.register.get('phase'),
        error: state.register.get('error'),
        form: state.register.get('form')
    }),
    // mapDispatchToProps
    (dispatch) => ({
        RegisterActions: bindActionCreators(registerActions, dispatch)
    })
)(RegisterModalContainer));