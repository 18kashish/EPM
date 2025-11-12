import React from 'react';
import { connect } from 'react-redux';

const Counter = (props) => {
  console.log('render', props)
  return (
    <div>
      <div className="Flex-Vertical">
        <div className="flex items-center justify-center space-x-4">
          
          <button className="Button" onClick={props.onIncrementClick}></button>
        
          <button className="Button" onClick={props.onDecrementClick}></button>
        </div>
      
        <button className="Button" onClick={props.onResetClick}></button>
      </div>
    </div>
  );
};


function mapStateToProps(state) {
  console.log('mapStateToProps', state);
  return {
    count: state.count
  }
};

const mapDispatchToProps = (dispatch) => {
  return {

   
    onIncrementClick: () => {
      console.log('Increment click');

      const action = {
        type: 'INCREMENT'
      };
    
      dispatch(action);
    },

   
    onDecrementClick: () => {
      console.log('Decrement click');
      const action = {
        type: 'DECREMENT'
      };
      dispatch(action);
    },

    
    onResetClick: () => {
      console.log('Reset click');
      const action = {
        type: 'RESET'
      };
      dispatch(action);
    }

  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);