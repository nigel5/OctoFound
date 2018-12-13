import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchAllItems} from '../../actions/index'
import ItemCard from '../item-card/ItemCard.js';

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
                for (let x = 0; x < this.props.items.items.length; x++) {
                    this.setState({
                        itemCards: this.state.itemCards.concat([
                            <ItemCard key={this.props.items.items[x]._id} name={this.props.items.items[x].name}
                                      imageURL={this.props.items.items[x].imageURL}
                                      comments={this.props.items.items[x].comments}/>
                        ])
                    });
                }
                this.setState({
                    loading: false
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
                    {this.state.itemCards}
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
