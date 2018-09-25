import * as React from 'react';

import { fetchCanIuseData2, fetchRepos } from '../utils/fetch';
import { HeadTag } from '../components/HeadTag';
import { Container, Row, Col } from 'react-grid-system';
import { AppBar } from '../components/AppBar';
import { SideBar } from '../components/SideBar';
import { spaceLg, spaceMd } from '../theme';
import { BrowserCard } from '../components/BrowserCard';
interface IProps {
  data: any;
}

class Matrix extends React.Component<IProps> {
  static async getInitialProps() {
    const res = await fetchCanIuseData2();
    // const res = await fetchRepos();

    return {
      isLoading: res.isLoading,
      data: res.data,
      hasErrored: res.hasErrored
    };
  }

  render() {
    console.log('render');
    // const { name, stargazers_count } = this.props.data;
    console.log(this.props.data);
    // const { agents } = this.props.data;
    // console.log(agents);

    // const desktopBrowsers = Object.keys(agents).map((agent, i) => {
    //   if (agents[agent].type === 'desktop') {
    //     return <BrowserCard key={i} data={agents[agent]} />;
    //   }
    // });

    // const mobileBrowsers = Object.keys(agents).map((agent, i) => {
    //   if (agents[agent].type === 'mobile') {
    //     return <BrowserCard key={i} data={agents[agent]} />;
    //   }
    // });

    return (
      <React.Fragment>
        <HeadTag />
        <AppBar showLogo={false} fixed={true} />
        <SideBar active={true}>
          <Container fluid style={{ margin: `${spaceLg}px ${spaceMd}px` }}>
            <Row>
              <span />
              {/* <Col xs={12} sm={12} md={12} lg={6}>
                {desktopBrowsers}
              </Col>
              <Col xs={12} sm={12} md={12} lg={6}>
                {mobileBrowsers}
              </Col> */}
            </Row>
          </Container>
        </SideBar>
      </React.Fragment>
    );
  }
}

export default Matrix;
