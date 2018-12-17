import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchAllItems} from '../../actions/index';
import ItemCard from '../item-card/ItemCard.js';
import {Row, Container} from 'reactstrap';

class MainView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            itemCards: [],
            loading: false
        };

        this.createGrid = this.createGrid.bind(this);
    }

    componentDidUpdate(prevProps) {
      if (Object.keys(prevProps.items).length !== Object.keys(this.props.items).length) {
        this.setState({ itemCards: this.createGrid() });
      }
    }

    componentDidMount() {
        this.setState({
            loading: true
        });

        this.props.fetchAll()
            .then(() => {
                this.setState({
                    loading: false,
                    itemCards: this.createGrid()
                });
            })
            .catch((err) => {
                console.log(err);
                this.setState({
                    loading: false
                });
            })
    }

    createGrid() {
      let res = Object.keys(this.props.items).map((i) => {
        return <ItemCard
                      key={i}
                      id={this.props.items[i]._id}
                      name={this.props.items[i].name}
                      status={this.props.items[i].status}
                      imageURL={this.props.items[i].imageURL}
                      comments={this.props.items[i].comments}/>
      });

      return res;
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
