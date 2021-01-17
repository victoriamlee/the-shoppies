import '../App.css';
import React, {useEffect, useState} from 'react';

const Banner = (props) => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    if (props.nominated.length >= 5) {
      setShowBanner(true);
    } else {
      setShowBanner(false);
    }
  },[props.nominated])
  
  if (showBanner) {
    return (
      <div>
          <h3>You have 5 nominations!</h3>
        </div>
    );

  } else {
    return (
      <div></div>
    )
  }
}

export default Banner;
