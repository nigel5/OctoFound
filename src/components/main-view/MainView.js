import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchAllItems} from '../../actions/index';
import ItemCard from '../item-card/ItemCard.js';
import {Row, Col, Container} from 'reactstrap';

class MainView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemCards: [],
            loading: false
        }
    }

    componentDidMount() {
        this.setState({
            loading: true
        });

        this.props.fetchAll()
            .then(() => {
                let res = Object.keys(this.props.items).map((i) => {
                  return <ItemCard
                                key={i}
                                id={this.props.items[i]._id}
                                name={this.props.items[i].name}
                                status={this.props.items[i].status}
                                imageURL={this.props.items[i].imageURL}
                                comments={this.props.items[i].comments}/>
                });

                this.setState({
                    loading: false,
                    itemCards: res
                });
            })
            .catch((err) => {
                console.log(err);
                this.setState({
                    loading: false
                });
            })
    }

    render() {
        if (this.state.loading) {
            return (
                <div className="MainView">
                    Loading...
                </div>
            )
        }
        else if (this.state.itemCards.length === 0) {
            return (
                <div className="MainView" >
                    Add a new item using the "+ Add Item" button above
                </div>
            );
        }
        else {
            return (
                <div className="MainView">
                  <Container>
                    <Row>
                      {this.state.itemCards}
                    </Row>
                  </Container>
                </div>
            );
        }
    }
}

const mapStateToProps = state => ({
    items: state.items
});

const mapDispatchToProps = dispatch => ({
    fetchAll: () => dispatch(fetchAllItems())
});

export default connect(mapStateToProps, mapDispatchToProps)(MainView);
