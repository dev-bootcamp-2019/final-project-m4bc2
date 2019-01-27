import React, { Component } from 'react';
import Name from '../../src/components/Name';
import Layout from '../../src/components/Layout';
import Header1 from '../../src/components/Header';
import karma from '../../src/karmaCurrBase';
import TopLine from '../../src/components/Topline';
import web3 from '../../src/web3';
import { Form, Input, Button, Card, Dropdown, Grid, Statistic, Divider, Message, Image, Header, Icon } from 'semantic-ui-react';
import karmaMembers from '../../build/contracts/KarmaMemberships.json';
import { Link, Router } from '../../src/routes';


class CreateMember extends Component{
  state = {
    memberName:'',
    memberDiffLevel:'',
    initialBalance:'',
    master:'',
    currentUser:'',
    oldMessage:'',
    loading : false,
    errorMessage:''
  };

  async componentDidMount() {
    let users = [];
    users = await web3.eth.getAccounts();
    let mstr = await karma.methods.getCurrentOwner().call();
    let balance = 0.000000000000000001;
    balance = await karma.methods.balanceOf(users[0]).call();
    balance = Number.parseFloat(balance/10**18).toFixed(6) ;
    this.setState({currentUser : users[0], initialBalance : balance, master: mstr, oldMessage : "Current ".concat(Name," balance")} );
  }


  onSubmit = async (event) => {
    event.preventDefault();

    this.setState({ loading: true });

    let users = [];
    users = await web3.eth.getAccounts();

    this.setState({currentUser : users[0], errorMessage:''});

    try {
      await karma.methods
        .createKarmaMembers(this.state.memberName,this.state.memberDiffLevel)
        .send({
          from:this.state.currentUser
      });
      this.setState({ loading:false, memberName:'', memberDiffLevel: ''  });
      Router.pushRoute('/');
    } catch (err) {
      this.setState({errorMessage : err.message});
    }


  }


  render() {

    return (
      <Layout>
        <Header1>
          <TopLine />

        </Header1>
        <Grid><Grid.Row></Grid.Row></Grid>


        <Grid columns='equal' textAlign='center'>
          <Grid.Row>
            <Header as='h1'>
              <Icon name='user plus' circular/>
              <Header.Content>Create New Member</Header.Content>
            </Header>
          </Grid.Row>

          <Grid.Row>
              <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                <Form.Group>
                  <Form.Field inline>
                    <label> Member Name </label>
                    <Input
                      placeholder='Name'
                      value = {this.state.memberName}
                      onChange={event => this.setState({memberName: (event.target.value)})}
                    />
                  </Form.Field>
                  <Form.Field inline>
                    <label> Difficulty Level </label>
                    <Input
                      placeholder = '#'
                      value = {this.state.memberDiffLevel}
                      onChange={event => this.setState({memberDiffLevel: (event.target.value)})}
                    />
                  </Form.Field>
                </Form.Group>
                <Message  error header="Oops!" content={this.state.errorMessage}/>
                <Grid columns='equal' textAlign='center'>
                  <Grid.Row>
                  </Grid.Row>
                  <Button
                    loading = {this.state.loading}
                    disabled = {(!this.state.memberName || !this.state.memberDiffLevel || (this.state.master !== this.state.currentUser))}
                    primary
                    >
                      Create!
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

export default CreateMember;
