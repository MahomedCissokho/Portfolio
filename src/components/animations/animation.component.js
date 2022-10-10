import styled from "styled-components";
import { gsap, CSSPlugin, Expo } from "gsap";

gsap.registerPlugin(CSSPlugin);

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #292929;
  position: relative;
`;

const Loading = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Follow = styled.div`
  position: absolute;
  background-color: #dd3333;
  height: 2px;
  width: 0;
  left: 0;
  z-index: 2;
`;

const ProgressBar = styled.div`
  position: absolute;
  background-color: #fff;
  height: 2px;
  width: 0;
  left: 0;
  transition: 0.6s ease-out;
`;

const Count = styled.p`
  position: absolute;
  color: #fff;
  font-size: 1.5em;
  font-weight: bold;
  transform: translateY(-30px);
`;

const Content = styled.div`
  height : 100%;
  display : flex;
  justify-content : center;
  align-items : center;
  position : absolute;
  padding: auto;
  z-index : 2;
  flex-direction: column,
  overflow : hidden;
  color :#fff;
  background-color :#292929;

  p, img{
    text-align : center;
    opacity :0;
    display : none;
    margin :0;
  }
`;

  const reveal = () => {
    const t1 = gsap.timeline({
      onComplete: () => {
        console.log("completed");
      },
    });
    t1.to(".follow", {
      width: "100%",
      ease: Expo.easeInOut,
      duration: 1.2,
      delay: 0.7,
    })
      .to(".hidden", {
        opacity: 0,
        duration: 0.3,
      })
      .to(".hidden", {
        display: "none",
        duration: 0.3,
      })
      .to(".follow", {
        height: "100%",
        ease: Expo.easeInOut,
        duration: 0.7,
        delay: 0.5,
      })
      .to(".system", { width: "100%", ease: Expo.easeInOut, duration: 0.7 })
      .to(".content", { display: "block", duration: 0.3 })
      .to(".content", {
        opacity: 1,
        stagger: 0.15,
        ease: Expo.easeInOut,
        duration: 0.6,
      });
  };

export {
    Container, Loading, Count, Follow, ProgressBar, Content, reveal
}