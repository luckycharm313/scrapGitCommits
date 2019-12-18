import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import queryString  from 'query-string';
import {
  loadData
} from '../../actions/home';

import './style.css';

function Home(props) {
  const queryParams = queryString.parse(props.location.search);

  useEffect(() => {
    var params = {
      id: parseInt(queryParams.id),
      cid: parseInt(queryParams.cid),
      iid: parseInt(queryParams.iid)
    }
    props.loadData(params);
  }, []);

  return (      
      <div className='h-100'>
      {
        props.student_id && props.instructor_id && props.class_id ? 
          <div className='container pt-4 d-flex flex-column h-100'>
            <h5 className='page-title my-3'>{props.initStudentData.full_name}</h5>
            <div className='bg-white mt-3 mb-2 p-3 rounded'>
              <span className='message-instructor my-1'>Message from Instructor</span>
              <p className='message-body my-1'>{props.initStudentData.message}</p>
            </div>
            <span className='message-instructor text-right mb-4'>- {props.initStudentData.name}</span>
            <div className='flex-grow-1 d-flex flex-column justify-content-end'>
              <button type='button' className='btn-main mb-5' onClick={() => props.history.push('/rate')}>NEXT</button>
            </div>
          </div>
        :
        <div className='d-flex flex-column justify-content-center h-100'>
          <h5 className='page-title'>No Data</h5>
        </div>
      }
    </div>
  );
}
const mapStateToProps = ({home}) => ({
  student_id: home.student_id,
  instructor_id: home.instructor_id,
  class_id: home.class_id,
  initStudentData: home.initStudentData,
});
const mapDispatchToProps = {
  loadData
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
