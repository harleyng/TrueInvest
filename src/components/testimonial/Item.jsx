import React from 'react'
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const Item = (props) => {
  return (
    <div className="item">
      <div className="row m-0">
        <div className="col-md-12 col-lg-6 content p-0">
          <h1 className="section-title">cảm nhận của khách hàng</h1>
          <div className="small-ava"><img src={props.ava} alt="Người feedback"/></div>
          <div className="feedback">
            <p>{props.feedback}</p>
          </div>
          <div className="info">
            <h6>{props.name}, {props.city}</h6>
          </div>
        </div>
        <div className="col-md-12 col-lg-6 feedback-person p-0">
          <img src={props.ava} alt="Người feedback"/>
          <Box className="rating-star m-0 text-center" component="fieldset" mb={3} borderColor="transparent">
            <Typography component="legend"></Typography>
            <Rating name="read-only" defaultValue={4.5} precision={0.5} readOnly />
          </Box>
        </div>
      </div>
    </div>
  )
}

export default Item;
