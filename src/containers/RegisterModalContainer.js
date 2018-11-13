import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { RegisterModal } from 'components';
import * as registerActions from 'store/modules/register';

class RegisterModalContainer extends Component {
    constructor(props) {
        super(props);
        this.switchPhase = this.switchPhase.bind(this);
    }

    switchPhase(phase) {
        return () => {
            const { RegisterActions } = this.props;
            RegisterActions.setPhase(phase);
        };
    }

    render () {
        const { phase } = this.props;
        const { switchPhase } = this;
        return (
            <div>
                <RegisterModal
                    phase={phase}
                    onClickNextPhase={switchPhase(2)}
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
        phase: state.register.get('phase')
    }),
    // mapDispatchToProps
    (dispatch) => ({
        RegisterActions: bindActionCreators(registerActions, dispatch)
    })
)(RegisterModalContainer);