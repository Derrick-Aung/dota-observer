import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getTeams, getLeagues, getAllProMatches, getPremiumMatches } from '../actions/dota-data'
import { mapLeagueName, mapTeamLogo } from '../utils/Helpers'

export class ProMatches extends Component {
 
    generatePickedHeroLogos = (index) => {
        let picked_heroes = this.props.premiumMatches[index]['picks_bans'].filter(picks => {
            return picks['is_pick']
        })
        return picked_heroes
    }

    componentDidMount(){

        if (!this.props.teams) {
            this.props.getTeams()
        }
        if (!this.props.leagues) {
            this.props.getLeagues()
        }
        if (!this.props.allProMatches) {
            this.props.getAllProMatches()
        }
        if (!this.props.premiumMatches) {
            this.props.getPremiumMatches()
        }
    }

    render() {
       
            {/* <div className="jumbotron m-5">
                 */}
        {if (this.props.heroes_list && this.props.teams && this.props.leagues && this.props.allProMatches && this.props.premiumMatches){
            return(
                <div className="card-container">
                    <h2 className="primary-header">Replays of Pro matches</h2>
                    {
                        this.props.premiumMatches.slice(0,10).map(
                            (match,index) => 
                                (
                                    <Link to={`/pro-matches/${match.MatchID}`} className="card mb-5" >
                                        <div className="card-header">
                                                <h3>{mapLeagueName(this.props.leagues ,this.props.premiumMatches[index].leagueid)}</h3>
                                                <div className="container">
                                                    <img className="radiant team-logo" src={mapTeamLogo(this.props.teams ,this.props.premiumMatches[index].radiant_team_id)} alt="Radiant Team Logo"/>
                                                    <img className="dire team-logo" src={mapTeamLogo(this.props.teams ,this.props.premiumMatches[index].dire_team_id)} alt="Dire Team Logo"/>      
                                                </div>
                                                <div className="container flex-row">
                                                    {this.generatePickedHeroLogos(index).map(
                                                        hero => {
                                                            
                                                            return <img src={`https://api.opendota.com${this.props.heroes_list[hero.hero_id]}`} alt="hero-image" className={hero.team == 0 ? ('float-left hero-img'):('float-right hero-img')}></img>
                                                        }
                                                    )}
                                                </div>
                                        </div>
                                        <div className="card-body">
                                            <button className="btn" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                                Spoiler
                                            </button>
                                            <div className="collapse" id="collapseExample">
                                                <div className="my-4">
                                                    {/* {match.radiant_win ? (this.props.[index]['radiant_name']):(this.props.matches_data[index]['dire_name'])} WINS */}
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                )
                        )
                    }
                </div>
            )
        }else{
            return (<h2>Loading content</h2>)
        }

        }
    }
}

const mapStatetoProps = (state) => {
    return {
        heroes_list: state.heroes_list,
        teams: state.teams,
        leagues: state.leagues,
        allProMatches: state.allProMatches,
        premiumMatches: state.premiumMatches
    }
}


export default connect(mapStatetoProps, {getTeams, getAllProMatches, getLeagues, getPremiumMatches})(ProMatches)
