import React from 'react'

import styled from 'styled-components'
import logo from '../img/logo.png'

class DataFetcher extends React.Component {
  state = {
    data: null,
    fetching: false,
    error: null
  };

  componentDidMount() {
    this.setState({
      fetching: true,
      error: null
    });
    fetch(
      this.props.dataUrl
    ).then(
      response => response.json()
    ).then(
      data => this.setState({
        data: data,
        fetching: false,
        error: null
      })
    ).catch(
      error => this.setState({
        error: error,
        fetching: false
      })
    )
  }

  render() {

    const Loader = styled.span`
 animation rotate 1s infinite;
  
  @keyframes rotate {
  0%{ transform: rotate(0)
  }
  100%{ transform: rotate(360deg)
  }
  `;

    const {data, fetching, error} = this.state;
    const {component, propName, propCategories, propInitialName} = this.props;
    return (
      <div>
        {
          fetching === false ? null : <Loader><img height="80px" src={logo} alt="logo"/></Loader>

        }
        {
          error === null ? null : (function () {
            console.warn(error)
            return <p style={{textAlign: "center"}}>{"Spróbuj odświeżyć stronę"}</p>
          })()
        }
        {
          data === null ? null :
            (
              data.length === 0 ?
                <p>No data found</p> :
                React.createElement(
                  component,
                  {
                    [propName]: data,
                    [propInitialName]: propCategories
                  }
                )
            )
        }
      </div>
    )
  }
}

export default DataFetcher