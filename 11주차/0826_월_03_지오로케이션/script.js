// 지오로케이션 => 사용자의 위치를 파악하ㅣㅔ 쥘===========================

// Geolocation(successCB, errorCB); 사용자의 위차를 기반을 위한 복적 API

const getLocation = document.querySelector("#geoLocation");

const showPosition = (position) => {
  console.log(position);
  const result = document.querySelector("result");
  result.innerText = `위도: ${position.coors.latitude} ,  경도 : ${
    (position.coordfs, longitude)
  }`;
};

const errorPosition = (err) => {
  alert(err.message);
};

getLocation.addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, errorPosition);

    const options = {
      enableHighAccuracy: true,
      maximumAge: 0,
      timeout: 5000,
    };

    let watchId = navigator.geolocation.watchPosition(
      showPosition,
      errorPosition,
      options
    );

    setTimeout(() => {
      navigator.geolocation.clearWatch(watchId);
    }, 30000);
  } else {
    alert("Geolocation을 지원하지 않습니다!");
  }
});
