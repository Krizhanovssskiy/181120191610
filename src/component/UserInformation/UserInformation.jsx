import './style.scss';
import userImage from '../../images/user.jpg';

import React, {Component} from 'react';
import { connect } from 'react-redux';

import TableService from '../TableService';
import UserDescription from '../UserDescription';

class UserInformation extends Component {
  render() {
    const { service } = this.props;
    return (
      <div className='UserInformation'>

        <div className="UserInformation__box-image">
          <img src={userImage} alt="user photo"/>
        </div>

        <div className="UserInformation__box-information">

          <UserDescription />

          <TableService
            service={service}
          />

        </div>
      </div>
    );
  }
}

const mapStateToProps = ({service}) => ({
  service
});

export default connect(
  mapStateToProps
)(UserInformation);