import React, { Component } from 'react';
import Layout from '../../src/components/Layout';
import Header1 from '../../src/components/Header';
import web3 from '../../src/web3';
import ClaimKarma from '../../src/components/ClaimKarma';
import { Card, Button, Statistic, Grid, Divider, Dropdown, Form, Input, Message, Image, Header, Icon } from 'semantic-ui-react';
import Name from '../../src/components/Name';
import TopLine2 from '../../src/components/Topline2';
import ContratAddress from '../../src/components/ContractAddress';

import KarmaMember from '../../src/karmaMember';
import karma from '../../src/karmaCurrBase';

const etherLink = 'https://rinkeby.etherscan.io/address/';
const etherTokenLink = 'https://rinkeby.etherscan.io/token/'.concat(ContratAddress,'?a=');

class MemberShow extends Component {
  static async getInitialProps(props){
    const karmaMem = KarmaMember(props.query.address);
    const memberName = await karmaMem.methods.getMemberName().call();
    const memberAdd = props.query.address;
    //const memberDiff = await karmaMem.methods.getMemberDifficulty().call();
    let memberBalance = 0.000000000000000001;
    memberBalance = await karma.methods.balanceOf(memberAdd).call();
    memberBalance =Number.parseFloat(memberBalance/10**18).toFixed(6);
    const memberAdmin = await karmaMem.methods.getCurrentOwner().call();

    return {
      memberName : memberName,
      memberAdd : memberAdd,
      //memberDiff : memberDiff,
      memberBalance: memberBalance,
      memberAdmin: memberAdmin
     };
  };

  renderCards(){
    const {
      memberName,
      memberAdd,
      //memberDiff,
      memberBalance,
      memberAdmin
    } = this.props;

    const items = [
      {
        header:memberName,
        meta:'Member name'
      },
      {
        header:memberBalance,
        meta:<a target="_blank" rel="noopener noreferrer" href = {etherTokenLink.concat(memberAdd)}>{"Member's ".concat(Name + " balance") }</a>
      },
      {
        header:memberAdd,
        meta:<a target="_blank" rel="noopener noreferrer" href = {etherLink.concat(memberAdd)}>{"Member's address"}</a>
      },
      {
        header:memberAdmin,
        meta:'Member admin'
      }
    ];

    return <Card.Group itemsPerRow={2} items={items} />;
  }

  state = {
    newAdmin:'',
    newMemName:'',
    currentUser:'',
    loading: false,
    errorMessage:'',
    loading2: false,
    errorMessage2:''

  }

  async componentDidMount() {
    let users = [];
    users = await web3.eth.getAccounts();
    this.setState({currentUser : users[0]} );
  }

  onSubmit = async (event) => {
    event.preventDefault();
    this.setState({ loading: true, errorMessage:'' });

    try {
      const karmaMem = KarmaMember(this.props.memberAdd);
      await karmaMem.methods
        .transferOwnership(this.state.newAdmin)
        .send({
          from:this.state.currentUser
      });
      this.setState({loading:false, newAdmin:''});
      Router.pushRoute("/member/".concat(this.props.memberAdd));
    } catch (err) {
      this.setState({errorMessage : err.message});
    }
  }

  onSubmit2 = async (event) => {
    event.preventDefault();
    this.setState({ loading2: true, errorMessage2:'' });

    try {
      const karmaMem = KarmaMember(this.props.memberAdd);
      await karmaMem.methods
        .setMemberName(this.state.newMemName)
        .send({
          from:this.state.currentUser
      });
      this.setState({loading2:false, newMemName:''});
      Router.pushRoute("/member/".concat(this.props.memberAdd));
    } catch (err) {
      this.setState({errorMessage2 : err.message});
    }
  }

  render() {
    return (
      <Layout>
        <Header1>
          <TopLine2/>

        </Header1>

        <Grid columns='equal' textAlign='center' divided>
          <Grid.Row>
            <Header as='h1'>
              <Icon name='user' circular />
              <Header.Content>Member Details</Header.Content>
            </Header>
          </Grid.Row>
          <Grid.Row>
              {this.renderCards()}
          </Grid.Row>
        </Grid>
        <Grid><Grid.Row></Grid.Row></Grid>

        <Grid columns={2} textAlign='center'>
          <Grid.Row>
            <Grid.Column>
              <Grid textAlign='center'>
                <Grid.Row>
                  <Header as='h2'>
                    <Icon name='cogs' />
                    <Header.Content>Account Settings</Header.Content>
                    <Header.Subheader>Manage your account settings</Header.Subheader>
                  </Header>
                </Grid.Row>
                <Grid.Row>
                  <Grid textAlign='center'>
                    <Grid.Column width = {3}>
                      <Header as='h4' textAlign='right'>
                        Admin Transfer
                      </Header>
                    </Grid.Column>
                    <Grid.Column width = {13}>
                      <Grid.Row>
                        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                          <Form.Group widths='equal'>
                            <Form.Field inline>

                              <Input
                                label= 'Address'
                                labelPosition='right'
                                placeholder = 'New Admin Address'
                                value = {this.state.newAdmin}
                                onChange={event => this.setState({newAdmin: event.target.value})}
                                width ={6}
                              />
                              <Button
                                loading = {this.state.loading}
                                disabled = {!((this.state.currentUser === this.props.memberAdmin) && !!this.state.newAdmin && (this.state.newAdmin !== this.props.memberAdmin))}
                                primary
                                icon = "shuffle"
                                content = 'Transfer'
                                />
                            </Form.Field>
                          </Form.Group>
                          <Message  error header="Oops!" content={this.state.errorMessage}/>
                        </Form>
                      </Grid.Row>
                    </Grid.Column>
                  </Grid>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width = {3}>
                    <Header as='h4' textAlign='right'>
                      Edit Member Name
                    </Header>
                  </Grid.Column>
                  <Grid.Column textAlign='center' width = {13}>
                    <Grid.Row>
                      <Form onSubmit={this.onSubmit2} error={!!this.state.errorMessage2}>
                        <Form.Group widths='equal'>
                          <Form.Field inline>
                            <Input
                              placeholder = 'New Name of the member'
                              label= 'Member'
                              labelPosition='right'
                              value = {this.state.newMemName}
                              onChange={event => this.setState({newMemName: event.target.value})}
                              width ={6}
                            />
                            <Button
                              loading = {this.state.loading2}
                              disabled = {!((this.state.currentUser === this.props.memberAdmin) && !!this.state.newMemName)}
                              primary
                              icon = 'save'
                              content = ' Update  '
                            />
                          </Form.Field>
                        </Form.Group>
                        <Message  error header="Oops!" content={this.state.errorMessage2}/>
                      </Form>
                    </Grid.Row>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>
            <Grid.Column>
              <ClaimKarma memberAdd={this.props.memberAdd} memberAdmin={this.props.memberAdmin}/>
            </Grid.Column>

          </Grid.Row>
        </Grid>
      </Layout>
    );
  }
}

export default MemberShow;
