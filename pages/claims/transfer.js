import React, { Component } from 'react';
import Name from '../../src/components/Name';
import TopLine2 from '../../src/components/Topline2';
import Layout from '../../src/components/Layout';
import Header1 from '../../src/components/Header';
import karma from '../../src/karmaCurrBase';
import web3 from '../../src/web3';
import { Form, Input, Button, Card, Dropdown, Grid, Statistic, Divider, Message, Image, Header, Icon } from 'semantic-ui-react';
import karmaMembers from '../../build/contracts/KarmaMemberships.json';
import { Link, Router } from '../../src/routes';
import ContratAddress from '../../src/components/ContractAddress';
//import Balance from '../../components/Balance';

const etherTokenLink = 'https://rinkeby.etherscan.io/token/'.concat(ContratAddress,'?a=');

class KarmaTransfer extends Component{
  state = {
    currentBalance:'',
    initialBalance:'',
    currentUser:'',
    oldMessage:'',
    newMessage:'',
    master:'',
    loading : false,
    statusTrans : 'one',
    transferAmount:'',
    recipient: '',
    errorMessage:''
  };

  async componentDidMount() {
    let users = [];
    users = await web3.eth.getAccounts();
    let mstr = await karma.methods.getCurrentOwner().call();
    let balance = 0.000000000000000001;
    balance = await karma.methods.balanceOf(users[0]).call();
    balance =Number.parseFloat(balance/10**18).toFixed(6) ;
    this.setState({currentUser : users[0], master: mstr, initialBalance : balance, oldMessage : "Current ".concat(Name," balance")} );
  }


  onSubmit = async (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    //let mstr = await karma.methods.getCurrentOwner();

    let users = [];
    users = await web3.eth.getAccounts();
    this.setState({currentUser : users[0], errorMessage:''});

    try {
      await karma.methods
        .transfer(this.state.recipient,this.state.transferAmount*10**18)
        .send({
          from:this.state.currentUser
      });

      let balance = 0.000000000000000001;
      balance=await karma.methods.balanceOf(this.state.currentUser).call();
      balance =Number.parseFloat(balance/10**18).toFixed(6) ;
      this.setState({currentBalance:balance, loading:false, newMessage:"Current ".concat(Name," balance"), oldMessage:"Previous ".concat(Name," balance"), statusTrans: 'two'});
    } catch (err) {
      this.setState({errorMessage : err.message});
    }






  }


  render() {

    return (
      <Layout>
        <Header1>
          <TopLine2/>
        </Header1>
        <Grid columns={this.state.statusTrans} textAlign='center'>
          <Grid.Row>
            <Header as='h1'>
              <Icon name='shuffle' circular/>
              <Header.Content>{"Transfer ".concat(Name)}</Header.Content>
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
                  <Header.Subheader> <a>{this.state.newMessage} </a></Header.Subheader>
                </Header>
              </a>
            </Grid.Column>
          </Grid.Row>
        </Grid>




        <Grid columns='equal' textAlign='center'>

          <Grid.Row/>
          <Grid.Row>
              <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                <Form.Group>
                  <Form.Field inline>
                    <label> Transfer</label>
                    <Input
                      label= {Name}
                      labelPosition='right'
                      placeholder='#'
                      value = {this.state.transferAmount}
                      onChange={event => this.setState({transferAmount: (event.target.value)})}
                    />
                  </Form.Field>
                  <Form.Field inline>
                    <label> To    </label>
                    <Input
                      label='Recipient'
                      labelPosition='right'
                      placeholder = 'address'
                      value = {this.state.recipient}
                      onChange={event => this.setState({recipient: (event.target.value).toLocaleLowerCase()})}
                    />
                  </Form.Field>
                </Form.Group>
                <Message  error header="Oops!" content={this.state.errorMessage}/>
                <Grid columns='equal' textAlign='center'>
                  <Grid.Row>
                  </Grid.Row>
                  <Button
                    loading = {this.state.loading}
                    disabled = {(!this.state.transferAmount || !this.state.recipient)}
                    primary
                    >
                      Transfer!
                  </Button>
                </Grid>
              </Form>
          </Grid.Row>
          <Grid.Row>
          </Grid.Row>
        </Grid>






      </Layout>

    )
  }

}

export default KarmaTransfer;
