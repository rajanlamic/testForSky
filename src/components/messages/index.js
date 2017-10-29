import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getChatLog from '../../service';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Message } from './message';

class MessageList extends Component {

	componentDidMount() {
		this.props.getChatLog();
	}

	render() {
		return (<section>
			{
        this.props.isMessageLoading && !this.props.isMessageLoaded && (
          <h1>Message Loading...</h1>
          )
      }
      {
        this.props.isMemberLoading && !this.props.isMemberLoaded && (
          <h1>Member Loading...</h1>
          )
      }

	    {
	    	this.props.isLoaded && this.props.messages && (<ul>
	    	{
	    		this.props.messages.sort((o1,o2) => new Date(o1.timestamp) - new Date(o2.timestamp))
		      .map(item => (
		      	<Message item={item} />
		      ))
		    }
	    	</ul>)
	    }
	  </section>);
	}
}

MessageList.propTypes = {
  messages: PropTypes.array,
  isLoaded: PropTypes.bool,
  isMessageLoading: PropTypes.bool,
  isMessageLoaded: PropTypes.bool,
  isMemberLoading: PropTypes.bool,
  isMemberLoaded: PropTypes.bool,
}

MessageList.defaultProps = {
  messages: [],
  isLoaded: false,
  isMessageLoading: false,
  isMessageLoaded: false,
  isMemberLoading: false,
  isMemberLoaded: false
}

const mapStateToProps = state => {
  return {
  	isMessageLoading: state.isMessageLoading,
    isMessageLoaded: state.isMessageLoaded,
    isMemberLoading: state.isMemberLoading,
    isMemberLoaded: state.isMemberLoaded,
    isLoaded : state.isOptimizedLoaded,
    messages: state.optimizedMessages
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({ getChatLog }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageList);
