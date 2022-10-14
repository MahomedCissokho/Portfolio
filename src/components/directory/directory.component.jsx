import Home from "../home/home.component";

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
      <Home counter = {counter}/>
    </Content>
  </Container>
)
};
export default Directory;