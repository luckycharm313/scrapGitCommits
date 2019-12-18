import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import queryString  from 'query-string';
import {
  loadData
} from '../../actions/home';

import './style.css';

function Home(props) {

  useEffect(() => {
    props.loadData();
  }, []);
  return (      
      <div className='h-100'>
      {
        Object.keys(props.gits).length > 0 &&
          <div className='d-flex flex-column justify-content-center h-100 px-5'>
            <h5 className='page-title'>Committer name : {props.gits.committer.name}</h5>
            <h5 className='page-title'>Committer email : {props.gits.committer.email}</h5>
            <h5 className='page-title'>Commit date : {props.gits.committer.date}</h5>
            <h5 className='page-title'>Commit message : {props.gits.message}</h5>
          </div>
      }
    </div>
  );
}
const mapStateToProps = ({home}) => ({
  gits: home.gits,
});
const mapDispatchToProps = {
  loadData
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
