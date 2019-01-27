import React, { Component } from 'react';
import { Card, Button, Statistic, Grid, Divider, Dropdown, Header, Icon, Image } from 'semantic-ui-react';
import karma from '../karmaCurrBase';
import web3 from '../web3';
import Name from './Name';
import ContratAddress from './ContractAddress';
import { Link, Router } from '../routes';


const etherLink = 'https://rinkeby.etherscan.io/address/';
const etherTokenLink = 'https://rinkeby.etherscan.io/token/'.concat(ContratAddress,'?a=');

class ShowTopLine extends Component {
  state = {
    currentUser: '',
    initialBalance:''
  }

  async componentDidMount() {
    let users = [];
    users = await web3.eth.getAccounts();
    let balance = 0.000000000000000001;
    balance = await karma.methods.balanceOf(users[0]).call();
    balance =Number.parseFloat(balance/10**18).toFixed(6) ;
    this.setState({currentUser: users[0], initialBalance: balance});
  }

  render() {
    return(
      <Grid columns='equal' textAlign='center'>
        <Grid.Row verticalAlign='bottom'>
          <Grid.Column>
            <Header as='h4' floated='left'>
              <Icon name='hand spock outline' />
              <Header.Content>Hear well and prosper </Header.Content>
              <Header.Subheader> <a target="_blank" rel="noopener noreferrer" href = {etherLink.concat(this.state.currentUser,'#tokentxns')}>{this.state.currentUser}</a></Header.Subheader>
            </Header>
          </Grid.Column>
          <Grid.Column>
            <Link route = "/">
              <a>
                <Image src='https://static.wixstatic.com/shapes/adbb24_01ca80e36ca64f0f9f8878e99f23c94f.svg' size = 'small' spaced verticalAlign='middle'/>
                <Statistic >
                  <Statistic.Value>
                    { Name }
                  </Statistic.Value>
                </Statistic>
              </a>
            </Link>
          </Grid.Column>
          <Grid.Column>
            <a target="_blank" rel="noopener noreferrer" href = {etherTokenLink.concat(this.state.currentUser)}>
              <Header as='h4' floated='right'>
                <Icon name='gem' />
                <Header.Content>{this.state.initialBalance}</Header.Content>
                <Header.Subheader> <a>{"Current ".concat(Name, " Balance")} </a></Header.Subheader>
              </Header>
            </a>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row verticalAlign='top'>
          <Header as='h3'>
            <Header.Subheader>Deployed on <a target="_blank" rel="noopener noreferrer" href = "https://ethereum.org"><Icon fitted name = 'ethereum' size = 'large'/></a>  @ <a target="_blank" rel="noopener noreferrer" href = {etherLink.concat(ContratAddress)}>{ContratAddress}</a></Header.Subheader>
          </Header>
        </Grid.Row>
      </Grid>

    );
  }
}

export default ShowTopLine;
