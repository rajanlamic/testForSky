import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment-timezone';

export const Message = ( { item } ) => {
	return (<li key={item.id}>
    <div title={item.membersDetail.email}>{item.message}</div>
    <div><img src={item.membersDetail.avatar} alt={item.membersDetail.avatar} /></div>
    <div>{moment.utc(item.timestamp).format('DD-MM-YYYY HH:mm')}</div>
  </li>)
}

Message.propTypes = {
  item: PropTypes.object,
}

Message.defaultProps = {
  item: {},
}