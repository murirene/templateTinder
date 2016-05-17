import { connect } from 'react-redux';
import { fetchTime, requestTime, receivedTime } from '../actions/actions';
import TemplateApp from '../views/TemplateApp';

const mapStateToProps = (state) => ({
    message: state.appReducer.message,
    load: state.appReducer.load,
});

const mapDispatchToProps = (dispatch) => ({
    fetchTime: () => {
        dispatch(fetchTime());
    },
    requestTime: () => {
        dispatch(requestTime());
    },
    receivedTime: (time) => {
        dispatch(receivedTime(time));
    }
});

const TemplateAppContainer = connect(mapStateToProps, mapDispatchToProps)(TemplateApp);
export default TemplateAppContainer;
