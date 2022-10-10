import Logo from "../../img/IMG-20220724-WA0088.jpg";

import {
  Container,
  Loading,
  Content,
  Follow,
  Count,
  ProgressBar
} from "../animations/animation.component";

const Directory = ({counter}) => {
  return(

  <Container>
    <Loading>
      <Follow className="follow"></Follow>
      <ProgressBar
        className="hidden"
        id="bar"
        style={{ width: counter + "%" }}
        >
      </ProgressBar>
      <Count className="hidden" id="count">
        {counter}%
      </Count>
    </Loading>
    <Content className="system">
      <p className="content">hello , my name is cisco</p>
      <p className="content">I'am web developer</p>
      <img src={Logo} alt='pictures' className='content' />
    </Content>
  </Container>
)
};
export default Directory;