import React from 'react'

const TimeAndPrice = () => {
  return (
    <div className="time-and-price section">
      <div className="row">
        <div className="col-4">
          <div className="skew time">
            <div className="inv-skew">
              <h2 className="uppercase">thời gian học</h2>
              <h3>Thứ 7 (S+C) & tối CN</h3>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="skew price">
            <div className="inv-skew">
              <h2 className="uppercase">học phí</h2>
              <h3>39.000.000 VNĐ</h3>
            </div>
          </div>
        </div>
        <div className="col-4">
          <button className="skew signup">
            <div className="inv-skew">đăng ký ngay</div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default TimeAndPrice;
