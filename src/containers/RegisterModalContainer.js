import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Joi from 'joi';
import { RegisterModal } from 'components';
import * as registerActions from 'store/modules/register';

class RegisterModalContainer extends Component {
    constructor(props) {
        super(props);
        this.handleChangeInput = this.handleChangeInput.bind(this);
        this.checkForm = this.checkForm.bind(this);
        this.switchPhase = this.switchPhase.bind(this);
    }

    handleChangeInput(event) {
        const { RegisterActions } = this.props;
        const { name, value } = event.target;
        RegisterActions.changeInput({ name, value });
    }

    async checkForm() {
        const { form, RegisterActions } = this.props;
        const { email, password, confirmPassword } = form.toJS();
        const { switchPhase } = this;

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
        switchPhase(2)();
    }

    switchPhase(phase) {
        return () => {
            const { RegisterActions } = this.props;
            RegisterActions.setPhase(phase);
        };
    }

    render () {
        const { phase, error, form } = this.props;
        const { switchPhase, handleChangeInput, checkForm } = this;
        return (
            <div>
                <RegisterModal
                    phase={phase}
                    error={error}
                    form={form}
                    onChangeInput={handleChangeInput}
                    onClickNextPhase={checkForm}
                    onClickPrevPhase={switchPhase(1)}
                />
            </div>
        );
    }
}

// connect to redux
export default connect(
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
)(RegisterModalContainer);