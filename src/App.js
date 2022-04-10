import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import './styles/global.scss';
import 'antd/dist/antd.css';
import { Button, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import UserLocation from './components/UserLocation';
import MyMap from './components/MapTwo';

const style = { background: '#0092ff', padding: '8px 0', height: '265px', border: 'solid' };
const styleTwo = { background: '#0092aa', padding: '8px 0', height: '668px' };
const styler = { padding: '0 15px' };
const stylerTwo = { padding: '17px 15px', width: '50px' };
const stylerThree = { padding: '17px 0' };
const stylerFour = { margin: '34px 0 0 0' };

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: {
        'ip': '134.201.250.155',
        'hostname': '134.201.250.155',
        'type': 'ipv4',
        'continent_code': 'NA',
        'continent_name': 'North America',
        'country_code': 'US',
        'country_name': 'Poland',
        'region_code': 'CA',
        'region_name': 'California',
        'city': 'Zielona Góra',
        'zip': '90013',
        'latitude': 53.35388946533203,
        'longitude': -6.243330001831055,
      },
      searchList: [],
      lastSearchLoc: '',
      actualSearch: '',
      lastSearch: '',
      addressIP: '126.145.131.63',
      lastData: {},
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.data !== state.prevPropsData) {
      return {
        prevPropsData: props.data,
      };
    }
    return null;
  }

  // componentDidMount() {
  //   fetch(`http://api.ipstack.com/${this.state.addressIP}?access_key=a930b10b2346d8db9d332d5a7b2562b5`)
  //     .then(res => res.json())
  //     .then((data) => {
  //       this.setState({ data: data });
  //       console.log(data);

  //     })
  //     .catch(console.log);
  // }

  // componentDidUpdate(prevProps, prevState, snapShot) {
  //   if (prevState.addressIP !== this.state.lastSearch) {
  //     fetch(`http://api.ipstack.com/${this.state.addressIP}?access_key=a930b10b2346d8db9d332d5a7b2562b5`)
  //       .then(res => res.json())
  //       .then((data) => {
  //         this.setState({ data: data });
  //         console.log(data);
  //       })
  //       .catch(console.log);
  //     console.log('działa', prevState.addressIP);
  //   }
  // }

  updateLastSearchField = (e) => {
    const { searchList, actualSearch, data } = this.state;
    this.setState({
      searchList: [...searchList, actualSearch],
      lastSearch: actualSearch,
      addressIP: actualSearch,
      lastData: data,
    });
  };

  updateSearchField = (e) => {
    this.setState({
      actualSearch: e.target.value,
    });
  };

  render() {

    const { searchList, lastSearch, data, lastData } = this.state;
    console.log(this.state.data);
    return (
      < div className="App" >
        <Row gutter={16}>
          <Col style={styleTwo} span={4} gutter={16}>List search:
            {searchList.length === 0 ? null :
              <>
                {searchList.map((elem, index) => (
                  <ul key={index}>
                    <li>{elem}</li>
                  </ul>
                ))
                }
              </>
            }
          </Col>
          <Col span={20} gutter={16}>
            <Row>
              <Col span={12} style={styler}>
                <h3>Map with user location</h3>
                <div className='mapLastSearch' >
                  <MyMap locationData={data} /></div>
              </Col>
              <Col span={12} >
                <h3>Information about user location:</h3>
                <div style={style}><UserLocation location={data} /></div>
              </Col>
            </Row>
            <Row className='searchLine'>
              <Col span={12} style={stylerTwo}>
                <Input onChange={e => this.updateSearchField(e)} placeholder="Write IP address or URL" />
              </Col>
              <Col span={12} style={stylerThree} >
                <Button onClick={(e) => this.updateLastSearchField(e)} type="primary" icon={<SearchOutlined />}>
                  Search
                </Button>
              </Col>
            </Row>
            <Row>
              <Col span={12} style={styler}>
                <h3>Map with last search location</h3>
                <div className='mapLastSearch' >
                  <MyMap locationData={lastData} /></div>
              </Col>
              <Col span={12} style={stylerFour}>
                <div className='lastSearchBox'><h3>Information about last search:</h3>
                  <p>{lastSearch}</p></div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div >
    );
  }
}

App.propTypes = {
  google: PropTypes.any,
  data: PropTypes.object,
};

export default App;