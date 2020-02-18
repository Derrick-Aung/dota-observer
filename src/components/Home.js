import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

export class Home extends Component {

    state = {
        dataSorted: false,
        hero_list: null,
    }

    computeWinRates = (json_data) => {
        sortByWinrate(json_data,'8_win', '8_pick')
        this.setState({
            dataSorted: true,
            hero_list: json_data
        })

       

    }


    componentDidMount(){
        //axios call to api here
        axios.get("https://api.opendota.com/api/heroStats")
        .then(
            res =>
            {
                console.log(res.data)
                this.computeWinRates(res.data)
                
                
            }
        )
        .catch(
            err => 
            console.log(err)
        )   
    }

    render() {
        return (
            <div className="jumbotron m-5">
                {this.state.dataSorted ? (
                    <div>
                    <h2 className="primary-header">Winners of this meta</h2>
                        <table className="table table-hover align-left">
                            <thead>
                                <tr style={{textTransform: "uppercase"}}>
                                <th scope="col">Icon</th>
                                <th scope="col">Hero</th>
                                <th scope="col" className="align-right">Winrate</th>
                                <th scope="col" className="align-right">Wins</th>
                                <th scope="col" className="align-right">Picks</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.hero_list.map(
                                        hero => 
                                            (<tr key={hero['id']} className="table-active">
                                                <th scope="row"><img src={`https://api.opendota.com${hero['icon']}`} alt="hero_icon"/></th>
                                                <td>{hero['localized_name']}</td>
                                                <td className="align-right">{(hero['8_win'] / hero['8_pick'] * 100).toFixed(2)}</td>
                                                <td className="align-right">{hero['8_win']}</td>
                                                <td className="align-right">{hero['8_pick']}</td>
                                            </tr>)
                                    )
                                }
                                
                            </tbody>
                        </table> 
                    </div>
                ) : (
                    <h2>Loading content</h2>
                )}
            </div>
        )
    }
}

function sortByWinrate(array, key_1, key_2) {
    return array.sort(function(a, b) {
        let x = a[key_1] / a[key_2]; 
        let y = b[key_1] / b[key_2];
        return ((x > y) ? -1 : ((x < y) ? 1 : 0));
    });
}

const mapStatetoProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStatetoProps)(Home)
