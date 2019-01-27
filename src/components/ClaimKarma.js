import React, { Component } from 'react';
import { Card, Button, Statistic, Grid, Divider, Dropdown, Header, Icon } from 'semantic-ui-react';
import KarmaMember from '../karmaMember';
import karma from '../karmaCurrBase';
import web3 from '../web3';
import Name from './Name';
import ContratAddress from './ContractAddress';

const activityOptions = [
  { key: '9', text: 'Register a device', value: '9'},
  { key: '8', text: 'Upgrade device', value: '8' },
  { key: '7', text: 'Register a family member', value: '7' },
  { key: '6', text: 'Turn on data collection features', value: '6' },
  { key: '3', text: 'Claim an Oticon easter egg', value: '3' },
  { key: '1', text: 'Social activity', value: '1' },
];
const etherTokenLink = 'https://rinkeby.etherscan.io/token/'.concat(ContratAddress,'?a=');

class ShowClaimForm extends Component {
  state = {
    currentUser: '',
    disabledActivity: false ,
    activitySelected:'',
    isActivitySelected: false,
    loading : false,
    startBalance:'',
    startLabel:'',
    endBalance:'',
    statusTrans : 'one',
    endLabel:''

  }

  async componentDidMount() {
    let users = [];
    users = await web3.eth.getAccounts();
    let balance = 0.000000000000000001;
    balance = await karma.methods.balanceOf(users[0]).call();
    balance =Number.parseFloat(balance/10**18).toFixed(6) ;
    this.setState({currentUser : users[0], startBalance : balance, startLabel:'Current Balance'} );
  }

  handleClick = async (event) => {
    event.preventDefault();

    this.setState({ loading: true});

    const karmaMem = KarmaMember(this.props.memberAdd);
    await karmaMem.methods.claimKarma(this.state.currentUser,this.state.activitySelected).send({from: this.props.memberAdmin});

    let balance2 = 0.000000000000000001;
    balance2  = await karma.methods.balanceOf(this.state.currentUser).call();
    balance2 = Number.parseFloat(balance2/10**18).toFixed(6);
    this.setState({ endBalance:balance2, startLabel:'Old Balance', endLabel:'New Balance', loading:false, statusTrans: 'two',  isActivitySelected:false});
    //console.log(this.state.initialBalance, this.state.currentBalance);
  };

  handleChange = (e, { value }) => this.setState({ activitySelected: value, isActivitySelected:true })


  render() {
    return(
      <Grid textAlign='center'>
        <Grid.Row>
          <Header as='h2'>
            <Icon name='gift' />
            <Header.Content>{"Claim ".concat(Name)}</Header.Content>
            <Header.Subheader>Record activity and {"claim ".concat(Name)}</Header.Subheader>
          </Header>

        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Dropdown
              onChange={this.handleChange}
              options={activityOptions}
              placeholder='Choose an activity'
              selection
              value={this.state.activitySelected}
            />
            <Button
              primary
              loading = {this.state.loading}
              disabled = {(!(this.state.isActivitySelected) || this.state.loading)}
              content='Claim!'
              icon = "gift"
              onClick={this.handleClick}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Header as='h4'>
            <Icon name={(this.state.statusTrans === 'one')?'gem':'gem outline'} />
            <Header.Content>{this.state.startBalance}</Header.Content>
            <Header.Subheader>{this.state.startLabel}</Header.Subheader>
          </Header>
        </Grid.Row>
        <Grid.Row>
          <a target="_blank" rel="noopener noreferrer" href = {etherTokenLink.concat(this.state.currentUser)}>
            <Header as='h4'>
              <Icon name={(this.state.statusTrans === 'two')?'gem':'gems'} />
              <Header.Content>{this.state.endBalance}</Header.Content>
              <Header.Subheader> <a>{this.state.endLabel} </a></Header.Subheader>
            </Header>
          </a>
        </Grid.Row>
      </Grid>
    );
  }
}

export default ShowClaimForm;
