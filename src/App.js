import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import './styles/global.scss';
import 'antd/dist/antd.css';
import { Button, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import UserLocation from './components/UserLocation';
import MyMap from './components/GoogleMap';
import axios from 'axios';

const styleTwo = { background: '#0092aa', padding: '8px 0', height: '668px' };
const styler = { padding: '0 15px' };
const stylerTwo = { padding: '17px 15px', width: '50px' };
const stylerThree = { padding: '17px 0' };

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: {},
      searchList: [],
      lastSearchLoc: '',
      actualSearch: '',
      lastSearch: '',
      yourIp: '',
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

  getIpData = async () => {
    const res = await axios.get('https://geolocation-db.com/json/');
    this.setState({
      data:
        res.data,
      yourIp: res.data.IPv4,
    });
    console.log('zadziałało');
  };

  getDataFromApi = () => {
    const { searchList, actualSearch, data } = this.state;
    fetch(`https://geolocation-db.com/json/${this.state.actualSearch}`)
      .then(res => res.json())
      .then((data) => {
        this.setState(
          {
            data: data,
            searchList: [...searchList, actualSearch],
            lastSearch: actualSearch,
          });
      })
      .catch(console.log('Problem with connection'));
  };

  getPrevDataFromApi = () => {
    const { searchList } = this.state;
    const prevIp = searchList[searchList.length - 1];
    fetch(`https://geolocation-db.com/json/${prevIp}`)
      .then(res => res.json())
      .then((data) => {
        this.setState(
          {
            lastData: data,
          });
      })
      .catch(console.log('Problem with connection'));
  };

  componentDidMount() {
    if (this.state.yourIp === '') this.getIpData();
  }

  updateLastSearchField = (e) => {
    const { searchList, actualSearch, data } = this.state;
    if (actualSearch.length < 11 && actualSearch.length === 0) {
      alert('You can not leave an empty value');
    }
    if (actualSearch.length < 11 && actualSearch.length !== 0) {
      alert('Your IP address is too short');
    }
    if (searchList[0] !== '') this.getPrevDataFromApi();
    if (actualSearch === '') {
      this.setState({
        lastSearch: actualSearch,
        lastData: data,
      });
    }
    this.getDataFromApi();
  };

  updateSearchField = (e) => {
    this.setState({
      actualSearch: e.target.value,
    });
  };

  render() {
    const { searchList, data, lastData } = this.state;
    console.log(this.state);
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
                <h3>Information about user location</h3>
                <div className='lastSearchBox'><UserLocation location={data} /></div>
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
                  <MyMap locationData={lastData} />
                </div>
              </Col>
              <Col span={12}>
                <h3>Information about last search</h3>
                <div className='lastSearchBox'>
                  <UserLocation location={lastData} />
                </div>
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