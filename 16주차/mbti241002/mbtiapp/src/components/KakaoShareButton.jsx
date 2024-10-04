import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
const { Kakao } = window;

const KakaoShareButton = ({ data }) => {
  console.log(data);
  const url = "https://catmbtitest01.netlify.app/";
  const resultURL = window.location.herf;
  useEffect(() => {
    Kakao.cleanup();
    Kakao.init("7d7d5af8f4c86569b0c50d4e89c530d3"); //자바스크립트 app key
  }, []);

  const shareKaokao = () => {
    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "예비집사 판별기 결과",
        description: `예비집사님이 고양이를 키운다면 가장 잘 맞는 고양이는 ${data.name} 입니다.`,
        imageUrl: `${url}${data.image}`,
        link: {
          mobileWebUrl: "resultURL",
          webUrl: "resultURL",
        },
      },

      buttons: [
        {
          title: "테스트 하러가기",
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
      ],
    });
  };

  return <Button onClick={shareKaokao}>카카오톡 공유하기</Button>;
};

export default KakaoShareButton;
