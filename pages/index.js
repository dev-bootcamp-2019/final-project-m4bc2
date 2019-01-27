import React, { Component } from 'react';
import { Card, Button, Statistic, Grid, Divider, Image, Header, Icon } from 'semantic-ui-react';
import karma from '../src/karmaCurrBase';
import karmaMembers from '../src/karmaMember';
import ContratAddress from '../src/components/ContractAddress';
import web3 from '../src/web3';
import Layout from '../src/components/Layout';
import Header1 from '../src/components/Header';
import Name from '../src/components/Name';
import TopLine from '../src/components/Topline';
import { Link } from '../src/routes';

const etherLink = 'https://rinkeby.etherscan.io/address/';

class karmaBase extends Component {
  static async getInitialProps(){
    let deployedMembers={id1: "100", id2: "200"};
    const members = await karma.methods.getKarmaMembers().call();
    for (var i=0; i < members.length ; i++){
      let memberi = karmaMembers(members[i]);
      let memberName = await memberi.methods.getMemberName().call();
      deployedMembers[String(members[i])] = memberName;
    }
    return {
      members: members,
      deployedMembers: deployedMembers
    };
  }

  state = {
    currentUser: '',
    initialBalance: '',
    inActive: false ,
    master:''
  }

  renderKarmaMembers(){
    const items = this.props.members.map(address => {
      return {
        header: this.props.deployedMembers[address],
        meta: "Member #".concat(this.props.members.indexOf(address)+1 ),
        description: (
          <Link route={`/member/${address}`}>
            <a>View Member Details</a>
          </Link>
        ),
        extra: <font size="1"><a target="_blank" rel="noopener noreferrer" href = {etherLink.concat(address)}>{address}</a></font>
      };
    });
    return <Card.Group  itemsPerRow={3} items = {items} />;
  }

  async componentDidMount() {
    let users = [];
    users = await web3.eth.getAccounts();
    let mstr = await karma.methods.getCurrentOwner().call();
    let balance = 0.000000000000000001;
    balance = await karma.methods.balanceOf(users[0]).call();
    balance =Number.parseFloat(balance/10**18).toFixed(6) ;
    this.setState({currentUser: users[0], initialBalance: balance, master: mstr});
  }

  render(){
    return <div>
      <Layout>
        <Header1>
          <TopLine/>
        </Header1>
        <Grid columns='equal'>
          <Grid.Row>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Link route="/claims/new">
                <a>
                  <Button fluid
                    content = {"Claim ".concat(Name)}
                    icon = "gift"
                    primary
                  />
                </a>
              </Link>
            </Grid.Column>
            <Grid.Column>
              <Link route="/claims/transfer">
                <a>
                  <Button fluid
                    content = {"Transfer ".concat(Name)}
                    icon = 'shuffle'
                    primary
                  />
                </a>
              </Link>
            </Grid.Column>
            <Grid.Column>
              <Link route={(this.state.master !== this.state.currentUser)?"":"/member/new"}>
                <a>
                  <Button fluid
                    content = {"Add A New Member"}
                    icon = "user plus"
                    primary
                    disabled = {this.state.master !== this.state.currentUser}
                  />
                </a>
              </Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid><Grid.Row></Grid.Row></Grid>
        <Grid textAlign='center'>
          <Grid.Row>
            <Header as='h1'>
              <Icon name='users' circular/>
              <Header.Content>{"Current ".concat(Name," Members")}</Header.Content>
            </Header>
          </Grid.Row>
        </Grid>
        { this.renderKarmaMembers() }
        <Grid><Grid.Row></Grid.Row></Grid>
      </Layout>
    </div>;
  }
}

export default karmaBase;
