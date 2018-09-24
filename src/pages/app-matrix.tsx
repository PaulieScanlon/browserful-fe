import * as React from 'react';

import { fetchRepos, fetchCanIuseData2 } from '../utils/fetch';
import { HeadTag } from '../components/HeadTag';
import { Container, Row, Col } from 'react-grid-system';
import { AppBar } from '../components/AppBar';
import { SideBar } from '../components/SideBar';
import { spaceLg } from '../theme';
import { P } from '../typography';
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
    // const { name, stargazers_count } = this.props.data;
    const { agents } = this.props.data;
    const thing = Object.keys(agents).map((agent, i) => {
      return (
        <Col xs={12} sm={6} style={{ marginTop: `${spaceLg}px` }}>
          <BrowserCard key={i} data={agents[agent]} />
        </Col>
      );
    });

    return (
      <React.Fragment>
        <HeadTag />
        <AppBar showLogo={false} fixed={true} />
        <SideBar active={true}>
          {/* @TODO is there a better way to wrap the containers so they always have the correct margin top */}
          <Container fluid style={{ margin: `${spaceLg}px 0px` }}>
            <Row>{thing}</Row>
          </Container>
        </SideBar>
      </React.Fragment>
    );
  }
}

export default Matrix;
