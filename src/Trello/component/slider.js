import React from "react";
import styled from "styled-components";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderList from "./sliderList";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}
// To override the slider classname
const StyledSlider = styled(Slider)``;
// you can also add className inside slider it self

const Sliders = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const ebayImg =
    "https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/spirit/customer-stories/4c529ec1377a131a1ae1772cb57b5ab2/ebay.svg";
  const egencia =
    "https://images.ctfassets.net/rz1oowkt5gyp/II3Kz8QYmBOB2hZw2OpWa/019c22804631400fc7ed850908c5829c/egencia.svg";
  const redwing =
    "https://images.ctfassets.net/rz1oowkt5gyp/7lYMIrJ4C3qzbliMFrounD/42b0bd6e2a60c2685289b2fdb161f208/detroit-red-wings.svg";
  const social =
    "https://images.ctfassets.net/rz1oowkt5gyp/7nXolb9JdcJnMUUnrq4HGO/79745cbc1df4920d6596db73d065897a/sprout-social.svg";

  return (
    <Container>
      <Wrapper>
        <Slider {...settings}>
          <SliderList
            quoteContent="Every one loves it; it has democratized our finance function. In some ways Trello
                shattered hierachy and brought us together"
            name1="Bharath Sundar"
            dept1="Finance, eBay<"
            name2="Industry"
            dept2="eCommerce"
            img={ebayImg}
          />
          <SliderList
            quoteContent="Very simple to use, grea automation and keeps me on track with ll i need to do. i also like that it can be shared with each others"
            name1="KERRY PARKER-EVANS"
            dept1="IT Project Manager, Egencia"
            name2="Industry"
            dept2="Travel"
            img={egencia}
          />
          <SliderList
            quoteContent="Trello makes it easy to keep everyone on the same page, As chamges happen, the real-time updates with email notifications have been key."
            name1="HAYDON DOTSON "
            dept1="Sales Manager, Detroit Red Wings"
            name2="Industry"
            dept2="Sport"
            img={redwing}
          />
          <SliderList
            quoteContent="Now that we've switched to a remote environment, with the use of Trello, we can now limit the number of meetings we have regarding specific projects and turn Treello for updates instead"
            name1="HALEY ENNES"
            dept1="HR Manger, Sprout Social"
            name2="Industry"
            dept2="Marketing"
            img={social}
          />
        </Slider>
      </Wrapper>
    </Container>
  );
};

export default Sliders;

const Wrapper = styled.div`
  width: 80%;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 70vh;
  background: #e6fcfe;
  display: flex;
  justify-content: center;
  align-items: center;
`;
