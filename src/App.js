import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import './styles/global.scss';
import 'antd/dist/antd.css';
import { Button, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const style = { background: '#0092ff', padding: '8px 0', height: '265px', border: 'solid' };
const styleTwo = { background: '#0092aa', padding: '8px 0', height: '600px' };
const styler = { padding: '0 15px' };
const stylerTwo = { padding: '17px 15px', width: '50px' };
const stylerThree = { padding: '17px 0' };

class App extends Component {
  render() {
    return (
      < div className="App" >
        <Row gutter={16}>
          <Col style={styleTwo} span={4} gutter={16}>List search</Col>
          <Col span={20} gutter={16}>
            <Row>
              <Col span={12} style={styler}>
                <div style={style}>Map with user location</div>
              </Col>
              <Col span={12} >
                <div style={style}>Information about user location</div>
              </Col>
            </Row>
            <Row className='searchLine'>
              <Col span={12} style={stylerTwo}>
                <Input placeholder="Write IP address or URL" />
              </Col>
              <Col span={12} style={stylerThree} >
                <Button type="primary" icon={<SearchOutlined />}>
                  Search
                </Button>
              </Col>
            </Row>
            <Row>
              <Col span={12} style={styler}>
                <div style={style}>Map with last search location</div>
              </Col>
              <Col span={12}>
                <div style={style}>Information about last search</div>
              </Col>
            </Row>
          </Col>
        </Row>
        {/* <Map google={this.props.google} zoom={14}>

          <Marker onClick={this.onMarkerClick}
            name={'Current location'} />

          <InfoWindow onClose={this.onInfoWindowClose}>
          </InfoWindow>
        </Map> */}
      </div >
    );
  }
}

App.propTypes = {
  google: PropTypes.any,
};

export default GoogleApiWrapper({
  apiKey: ('AIzaSyARjmtGWUw3Gbbfn-8Ca4EfNxKChBb46R8'),
})(App);

//a930b10b2346d8db9d332d5a7b2562b5
//AIzaSyARjmtGWUw3Gbbfn-8Ca4EfNxKChBb46R8