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
      <div class="alert alert-warning" role="alert" id="banner">
        <h4>You have 5 nominations!</h4>
      </div>
        
    );

  } else {
    return (
      <div></div>
    )
  }
}

export default Banner;
