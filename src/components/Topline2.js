import React, { Component } from "react";
import {
  Card,
  Button,
  Statistic,
  Grid,
  Divider,
  Dropdown,
  Header,
  Image,
  Icon
} from "semantic-ui-react";
import KarmaMember from "../karmaMember";
import karma from "../karmaCurrBase";
import web3 from "../web3";
import Name from "./Name";
import ContratAddress from './ContractAddress';
import { Link, Router } from '../routes';

const etherLink = 'https://rinkeby.etherscan.io/address/';


class ShowTopLine2 extends Component {
  state = {
    currentUser: "",
    initialBalance: ""
  };

  async componentDidMount() {
    let users = [];
    users = await web3.eth.getAccounts();
    let balance = 0.000000000000000001;
    balance = await karma.methods.balanceOf(users[0]).call();
    balance = Number.parseFloat(balance / 10 ** 18).toFixed(6);
    this.setState({ currentUser: users[0], initialBalance: balance });
  }

  render() {
    return (
      <Grid columns="equal">
        <Grid.Row/>
        <Grid.Row>
          <Grid.Column>
            <Grid>
              <Grid.Row>
                <Header as="h4" floated="left">
                  <Icon name="hand spock outline" />
                  <Header.Content>Hear well and prosper </Header.Content>
                  <Header.Subheader> <a target="_blank" rel="noopener noreferrer" href = {etherLink.concat(this.state.currentUser,'#tokentxns')}>{this.state.currentUser}</a></Header.Subheader>
                </Header>
              </Grid.Row>
            </Grid>
          </Grid.Column>
          <Grid.Column floated = 'right'>

              <Link route = "/">
                <a>
                  <Statistic floated='right' size = 'tiny'>
                    <Statistic.Value>
                      <Image src= 'https://static.wixstatic.com/shapes/adbb24_01ca80e36ca64f0f9f8878e99f23c94f.svg' spaced verticalAlign='middle'/>
                      { Name }
                    </Statistic.Value>
                  </Statistic>
                </a>
              </Link>

          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default ShowTopLine2;
