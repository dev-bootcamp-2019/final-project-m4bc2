import React, { Component } from 'react';
import Layout from '../../src/components/Layout';
import Header1 from '../../src/components/Header';
import Name from '../../src/components/Name';
import TopLine2 from '../../src/components/Topline2';
import karma from '../../src/karmaCurrBase';
import web3 from '../../src/web3';
import { Form, Input, Button, Card, Dropdown, Grid, Statistic, Divider, Message, Image, Icon, Header } from 'semantic-ui-react';
import karmaMembers from '../../src/karmaMember';
import { Link, Router } from '../../src/routes';
import ContratAddress from '../../src/components/ContractAddress';

const activityOptions = [
  { key: '9', text: 'Register a new device', value: '9'},
  { key: '8', text: 'Upgrade your device', value: '8' },
  { key: '7', text: 'Register a family member', value: '7' },
  { key: '6', text: 'Turn on data collection features', value: '6' },
  { key: '3', text: 'Claim a Karma easter egg', value: '3' },
  { key: '1', text: 'Social activity', value: '1' },
];
const etherTokenLink = 'https://rinkeby.etherscan.io/token/'.concat(ContratAddress,'?a=');

function genBrandOptions(p){
  let brandOptions=[];
  for (var i=0; i< p.length; i++){
    brandOptions.push({key: i, text: p[i][1], value: i});
  }
  return brandOptions;
};

class KarmaClaim extends Component{
  static async getInitialProps(){
    const members = await karma.methods.getKarmaMembers().call();
    let memberi,memberName,currentOwner;
    let deployedMembers=[];

    for (var i=0; i < members.length ; i++){
      memberi = karmaMembers(members[i]);
      currentOwner = await memberi.methods.getCurrentOwner().call();
      memberName = await memberi.methods.getMemberName().call({from:currentOwner});
      deployedMembers.push([members[i],memberName,currentOwner]);
    }

    return {
      members: deployedMembers
     };
  };

  state = {
    brandSelected:'',
    isBrandSelected:false,
    activitySelected:'',
    isActivitySelected: false,
    currentBalance:'',
    initialBalance:'',
    currentUser:'',
    oldMessage:'',
    newMessage:'',
    loading : false,
    statusTrans : 'one',
    errorMessage : ''
  };

  async componentDidMount() {
    let users = [];
    users = await web3.eth.getAccounts();
    let balance = 0.000000000000000001;
    balance = await karma.methods.balanceOf(users[0]).call();
    balance =Number.parseFloat(balance/10**18).toFixed(6) ;
    this.setState({currentUser : users[0], initialBalance : balance, oldMessage : "Current ".concat(Name," balance")});
  }

  handleClick = async (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const selMem = karmaMembers(this.props.members[this.state.brandSelected][0]);
    await selMem.methods.claimKarma(this.state.currentUser,this.state.activitySelected).send({from: this.props.members[this.state.brandSelected][2]});
    let balance = 0.000000000000000001;
    balance  = await karma.methods.balanceOf(this.state.currentUser).call();
    balance =Number.parseFloat(balance/10**18).toFixed(6);
    this.setState({currentBalance:balance, loading:false, newMessage:"Current ".concat(Name," balance"), oldMessage:"Previous ".concat(Name," balance"), statusTrans: 'two', isBrandSelected:false, isActivitySelected:false});
  };

  handleChange1 = (e, { value }) => this.setState({ brandSelected: value, isBrandSelected:true })
  handleChange2 = (e, { value }) => this.setState({ activitySelected: value, isActivitySelected:true })

  render() {
    return (
      <Layout>
        <Header1>
          <TopLine2/>
        </Header1>
        <Grid columns={this.state.statusTrans} textAlign='center'>
          <Grid.Row>
            <Header as='h1'>
              <Icon name='gift' circular/>
              <Header.Content>{"Claim ".concat(Name)}</Header.Content>
            </Header>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Header as='h5' icon textAlign='center'>
                <Icon name={(this.state.statusTrans === 'one')?'gem':'gem outline'} />
                <Header.Content>{this.state.initialBalance}</Header.Content>
                <Header.Subheader>{this.state.oldMessage}</Header.Subheader>
              </Header>
            </Grid.Column>
            <Grid.Column>
              <a target="_blank" rel="noopener noreferrer" href = {etherTokenLink.concat(this.state.currentUser)}>
                <Header as='h5' icon textAlign='center'>
                  <Icon name={(this.state.statusTrans === 'two')?'gem':'gems'} />
                  <Header.Content>{this.state.currentBalance}</Header.Content>
                  <Header.Subheader> <a>{this.state.newMessage}</a></Header.Subheader>
                </Header>
              </a>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid columns='equal' textAlign='center'error>
          <Grid.Row>
          </Grid.Row>
          <Grid.Row>
              <Dropdown
                onChange={this.handleChange1}
                options={genBrandOptions(this.props.members)}
                button
                className='icon'
                labeled
                icon = 'users'
                placeholder='Choose your brand'
                selection
                value={this.state.brandSelected}
              />
              {'     '}
              <Dropdown
                onChange={this.handleChange2}
                options={activityOptions}
                button
                className='icon'
                labeled
                icon = 'clipboard list'
                placeholder='Choose an activity'
                selection
                value={this.state.activitySelected}
              />
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Button
                primary
                loading = {this.state.loading}
                disabled = {(!(this.state.isBrandSelected && this.state.isActivitySelected) || this.state.loading)}
                content='Claim!'
                onClick={this.handleClick}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
          </Grid.Row>
        </Grid>
      </Layout>
    )
  }
}

export default KarmaClaim;
