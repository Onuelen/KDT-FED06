const showPosition = (position) => {
  const url =
    "https://apis.data.go.kr/B551011/GoCamping/basedList?numOfRows=500&pageNo=1&MobileOS=ETC&MobileApp=AppTest&serviceKey=j45XrOgQjK%252F1D8inQQha6i9oqreRZMcvOuL5ppzuVcrNofBZKFqRLdqfJtqfEFG0I9ctRoIyuz28Vt23niQcTw%253D%253D&_type=json";

  fetch(url)
    .then((response) => response.json())
    .then((json) => console.log(json));
  const data = json;

  const { latitude, longitude } = position.coords;
  console.log(latitude, longitude);

  const mapContainer = document.querySelector("#map");
  const mapOption = {
    center: new kakao.maps.LatLng(latitude, longitude), // 지도의 중심좌표
    level: 3, // 지도의 확대 레벨
  };

  const map = new kakao.maps.Map(mapContainer, mapOption);

  for (var i = 0; i < data.length; i++) {
    const marker = new kakao.maps.Marker({
      map: map,
      position: new kakao.maps.LatLng(data[i].mapY, data[i].mapX),
    });

    const infowindow = new kakao.maps.infowindow({
      content: data[i].facltNm,
    });

    const makeOverListener = (map, marker, infowindow) => {
      return () => {
        infowindow.open(map, marker);
      };
    };

    const makeOutListener = (infowindow) => {
      return () => {
        infowindow.close();
      };
    };

    kakao.maps.event.addListener(
      marker,
      "mouseover",
      makeOverListener(map, marker, infowindow)
    );

    kakao.maps.event.addListener(
      marker,
      "mouseout",
      makeOutListener(infowindow)
    );
  }

  // const markerPosition = new kakao.maps.LatLng(latitude, longitude);

  // const marker = new kakao.maps.Marker({
  //   position: markerPosition,
  // });

  // marker.setMap(map);

  // const iwContent =
  //     '<div style="padding:5px;"><a herf="https://www.naver.com"></div>',
  //   iwRemoveable = true;

  // const infowindow = new kakao.maps.InfoWindow({
  //   content: iwContent,
  //   removable: iwRemoveable,
  // });

  // kakao.maps.event.addListener(marker, "click", function () {
  //   infowindow.open(map, marker);
  // });
};
const errorPosition = (err) => {
  alert(err.message);
};

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showPosition, errorPosition);
} else {
  alert("Geolocation을 지원하지 않는 기기입니다.");
}
