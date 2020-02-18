import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { getAllProMatches, getLeagues, getTeams, getPremiumMatches } from '../actions/dota-data'
import { mapItemToName,convertSecsToMins, convertEpochToDate, mapGameMode } from '../utils/Helpers'
import Graph from './Graph'

export class ProMatchDetail extends Component {

    constructor(props) {
        super(props)
        this.state = {
            match_details: null,
        }
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

        const match_id = this.props.match.params.match_id
        axios.get(`https://api.opendota.com/api/matches/${match_id}`)
        .then(res=>{
            this.setState({
                match_details: res.data
            })
        })
        .catch(err=>{
            console.log(err)
        })
    }

    createLabels = (data_values) => {
        let labels = []
        for (let i=0;i<data_values.length;i++){
            if(i%2 == 0){
                labels.push(`${i}:00`)
            }else{
                labels.push("")
            }
        }
        return labels
    }


    render() {
        
        const match_id = this.props.match.params.match_id
        
        
        

        if (this.props.heroes_list && this.state.match_details && this.props.teams && this.props.leagues && this.props.allProMatches && this.props.premiumMatches){
            
            let radiant_team_name = null
            let radiant_team_logo = null
            if(this.state.match_details.radiant_team){
                radiant_team_name = this.state.match_details.radiant_team.name
                radiant_team_logo = this.state.match_details.radiant_team.logo_url
            }else{
                radiant_team_name = "Radiant"
                radiant_team_logo = "https://steamcdn-a.akamaihd.net/apps/dota2/images/team_logos/39.png"
            }

            let dire_team_name = null
            let dire_team_logo = null
            if(this.state.match_details.dire_team){
                dire_team_name = this.state.match_details.dire_team.name
                dire_team_logo = this.state.match_details.dire_team.logo_url
            }else{
                dire_team_name = "Dire"
                dire_team_logo = "https://steamcdn-a.akamaihd.net/apps/dota2/images/team_logos/39.png"
            }
            

            return (
                <div>
                    <div className="jumbotron mx-5 my-5 "  style={{backgroundColor: "transparent",boxShadow:"none"}}>
                        <header className="main-info">
                            <div className="victory-info my-3">
                                {(this.state.match_details.radiant_win) ? 
                                (
                                    <div>   
                                        <img className="team-logo mx-2" src={radiant_team_logo} alt=""/>
                                        <span className="radiant-color">
                                            {
                                                radiant_team_name+" Wins"
                                            }
                                        </span>
                                    </div>
                                ):
                                (   
                                    <div>
                                        {<img className="team-logo mx-2" src={dire_team_logo} alt=""/>}
                                        <span className="dire-color">
                                            {
                                                dire_team_name+" Wins"
                                            }
                                        </span>
                                    </div>
                                )}
                            </div>
                            <div className="match-info m-3 d-flex justify-content-center">
                                <div className="radiant-kills align-content-center mx-5">
                                    <span>{this.state.match_details.radiant_score}</span>
                                </div>
                                <div className="gamemode d-flex flex-column">
                                    <span className="text-muted">{mapGameMode(this.props.game_mode_list,this.state.match_details.game_mode)}</span>
                                    <span className="text-small">{convertSecsToMins(this.state.match_details.duration)}</span>
                                    <span className="text-muted">{convertEpochToDate(this.state.match_details.start_time)}</span>
                                </div>
                                <div className="dire-kills align-content-center mx-5">
                                    <span>{this.state.match_details.dire_score}</span>
                                </div>
                            </div>
                           
                        </header>
                        <div className="container d-flex justify-content-center">
                            <div className="mx-5">
                                <p className="text-muted">MATCH ID</p>
                                <p className="font-weight-bold">{match_id}</p>
                            </div>
                            <div className="mx-5">
                                <p className="text-muted">LEAGUE</p>
                                <p className="font-weight-bold">{this.state.match_details.league.name}</p>
                            </div>  
                        </div>          

                        <ul className="nav nav-tabs">
                            <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#overview">Overview</a></li>
                            <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#graphs">Graphs</a></li>
                            <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#menu2">Menu 2</a></li>
                        </ul>
                            <div className="tab-content">
                            <div id="overview" className="tab-pane fade in active show">
                                <div className="overview container ">
                                    <h4 className="font-weight-bold" style={{textAlign: 'start'}}>{radiant_team_name}</h4>
                                    <div className="table-container">
                                        <table className="table align-left">
                                        <thead>
                                            <tr>
                                            <th scope="col">Hero</th>
                                            <th scope="col">Lvl</th>
                                            <th scope="col">Player</th>
                                            <th scope="col" className="align-right align-middle">K</th>
                                            <th scope="col" className="align-right align-middle">D</th>
                                            <th scope="col" className="align-right align-middle">A</th>
                                            <th scope="col" className="align-right align-middle">GPM/XPM</th>
                                            <th scope="col" className="align-right align-middle">TG</th>
                                            <th scope="col" className="align-right align-middle">LH/DN</th>
                                            <th scope="col" className="align-right align-middle">HD</th>
                                            <th scope="col" className="align-right align-middle">TD</th>
                                            <th scope="col" className="align-right align-middle">HH</th>
                                            <th scope="col">Items</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                            <th scope="row"><img className="hero-img align-middle" src={`https://api.opendota.com${this.props.heroes_list[this.state.match_details.players[0].hero_id]}`} alt="hero-image"/></th>
                                            <td className="align-middle">{this.state.match_details.players[0].level}</td>
                                            <td className="align-middle">{this.state.match_details.players[0].name}</td>
                                            <td className="align-right align-middle">{this.state.match_details.players[0].kills}</td>
                                            <td className="align-right align-middle">{this.state.match_details.players[0].deaths}</td>
                                            <td className="align-right align-middle">{this.state.match_details.players[0].assists}</td>
                                            <td className="align-right align-middle">{`${this.state.match_details.players[0].benchmarks.gold_per_min.raw}/${this.state.match_details.players[0].benchmarks.xp_per_min.raw}`}</td>
                                            <td className="align-right align-middle">{this.state.match_details.players[0].total_gold}</td>
                                            <td className="align-right align-middle">{`${this.state.match_details.players[0].last_hits}/${this.state.match_details.players[0].denies}`}</td>
                                            <td className="align-right align-middle">{this.state.match_details.players[0].hero_damage}</td>
                                            <td className="align-right align-middle">{this.state.match_details.players[0].tower_damage}</td>
                                            <td className="align-right align-middle">{this.state.match_details.players[0].hero_healing}</td>
                                            <td className="align-middle">
                                                <div className="d-flex flex-row">
                                                    <img className="item-img" src={'http://cdn.dota2.com/'+mapItemToName(this.props.items_list,this.state.match_details.players[0].item_0)} alt=""/>
                                                    <img className="item-img" src={'http://cdn.dota2.com/'+mapItemToName(this.props.items_list,this.state.match_details.players[0].item_1)} alt=""/>
                                                    <img className="item-img" src={'http://cdn.dota2.com/'+mapItemToName(this.props.items_list,this.state.match_details.players[0].item_2)} alt=""/>
                                                    <img className="item-img" src={'http://cdn.dota2.com/'+mapItemToName(this.props.items_list,this.state.match_details.players[0].item_3)} alt=""/>
                                                    <img className="item-img" src={'http://cdn.dota2.com/'+mapItemToName(this.props.items_list,this.state.match_details.players[0].item_4)} alt=""/>
                                                    <img className="item-img" src={'http://cdn.dota2.com/'+mapItemToName(this.props.items_list,this.state.match_details.players[0].item_5)} alt=""/>
                                                </div>
                                            </td>
                                            </tr>
                                            <tr>
                                            <th scope="row"><img className="hero-img align-middle" src={`https://api.opendota.com${this.props.heroes_list[this.state.match_details.players[1].hero_id]}`} alt="hero-image"/></th>
                                            <td className="align-middle">{this.state.match_details.players[1].level}</td>
                                            <td className="align-middle">{this.state.match_details.players[1].name}</td>
                                            <td className="align-right align-middle">{this.state.match_details.players[1].kills}</td>
                                            <td className="align-right align-middle">{this.state.match_details.players[1].deaths}</td>
                                            <td className="align-right align-middle">{this.state.match_details.players[1].assists}</td>
                                            <td className="align-right align-middle">{`${this.state.match_details.players[1].benchmarks.gold_per_min.raw}/${this.state.match_details.players[1].benchmarks.xp_per_min.raw}`}</td>
                                            <td className="align-right align-middle">{this.state.match_details.players[1].total_gold}</td>
                                            <td className="align-right align-middle">{`${this.state.match_details.players[1].last_hits}/${this.state.match_details.players[1].denies}`}</td>
                                            <td className="align-right align-middle">{this.state.match_details.players[1].hero_damage}</td>
                                            <td className="align-right align-middle">{this.state.match_details.players[1].tower_damage}</td>
                                            <td className="align-right align-middle">{this.state.match_details.players[1].hero_healing}</td>
                                            <td className="align-middle">
                                                <div className="d-flex flex-row">
                                                    <img className="item-img" src={'http://cdn.dota2.com/'+mapItemToName(this.props.items_list,this.state.match_details.players[1].item_0)} alt=""/>
                                                    <img className="item-img" src={'http://cdn.dota2.com/'+mapItemToName(this.props.items_list,this.state.match_details.players[1].item_1)} alt=""/>
                                                    <img className="item-img" src={'http://cdn.dota2.com/'+mapItemToName(this.props.items_list,this.state.match_details.players[1].item_2)} alt=""/>
                                                    <img className="item-img" src={'http://cdn.dota2.com/'+mapItemToName(this.props.items_list,this.state.match_details.players[1].item_3)} alt=""/>
                                                    <img className="item-img" src={'http://cdn.dota2.com/'+mapItemToName(this.props.items_list,this.state.match_details.players[1].item_4)} alt=""/>
                                                    <img className="item-img" src={'http://cdn.dota2.com/'+mapItemToName(this.props.items_list,this.state.match_details.players[1].item_5)} alt=""/>
                                                </div>
                                            </td>
                                            </tr>
                                            <tr>
                                            <th scope="row"><img className="hero-img align-middle" src={`https://api.opendota.com${this.props.heroes_list[this.state.match_details.players[2].hero_id]}`} alt="hero-image"/></th>
                                            <td className="align-middle">{this.state.match_details.players[2].level}</td>
                                            <td className="align-middle">{this.state.match_details.players[2].name}</td>
                                            <td className="align-right align-middle">{this.state.match_details.players[2].kills}</td>
                                            <td className="align-right align-middle">{this.state.match_details.players[2].deaths}</td>
                                            <td className="align-right align-middle">{this.state.match_details.players[2].assists}</td>
                                            <td className="align-right align-middle">{`${this.state.match_details.players[2].benchmarks.gold_per_min.raw}/${this.state.match_details.players[2].benchmarks.xp_per_min.raw}`}</td>
                                            <td className="align-right align-middle">{this.state.match_details.players[2].total_gold}</td>
                                            <td className="align-right align-middle">{`${this.state.match_details.players[2].last_hits}/${this.state.match_details.players[2].denies}`}</td>
                                            <td className="align-right align-middle">{this.state.match_details.players[2].hero_damage}</td>
                                            <td className="align-right align-middle">{this.state.match_details.players[2].tower_damage}</td>
                                            <td className="align-right align-middle">{this.state.match_details.players[2].hero_healing}</td>
                                            <td className="align-middle">
                                                <div className="d-flex flex-row">
                                                    <img className="item-img" src={'http://cdn.dota2.com/'+mapItemToName(this.props.items_list,this.state.match_details.players[2].item_0)} alt=""/>
                                                    <img className="item-img" src={'http://cdn.dota2.com/'+mapItemToName(this.props.items_list,this.state.match_details.players[2].item_1)} alt=""/>
                                                    <img className="item-img" src={'http://cdn.dota2.com/'+mapItemToName(this.props.items_list,this.state.match_details.players[2].item_2)} alt=""/>
                                                    <img className="item-img" src={'http://cdn.dota2.com/'+mapItemToName(this.props.items_list,this.state.match_details.players[2].item_3)} alt=""/>
                                                    <img className="item-img" src={'http://cdn.dota2.com/'+mapItemToName(this.props.items_list,this.state.match_details.players[2].item_4)} alt=""/>
                                                    <img className="item-img" src={'http://cdn.dota2.com/'+mapItemToName(this.props.items_list,this.state.match_details.players[2].item_5)} alt=""/>
                                                </div>
                                            </td>
                                            </tr>
                                            <tr>
                                            <th scope="row"><img className="hero-img align-middle" src={`https://api.opendota.com${this.props.heroes_list[this.state.match_details.players[3].hero_id]}`} alt="hero-image"/></th>
                                            <td className="align-middle">{this.state.match_details.players[3].level}</td>
                                            <td className="align-middle">{this.state.match_details.players[3].name}</td>
                                            <td className="align-right align-middle">{this.state.match_details.players[3].kills}</td>
                                            <td className="align-right align-middle">{this.state.match_details.players[3].deaths}</td>
                                            <td className="align-right align-middle">{this.state.match_details.players[3].assists}</td>
                                            <td className="align-right align-middle">{`${this.state.match_details.players[3].benchmarks.gold_per_min.raw}/${this.state.match_details.players[3].benchmarks.xp_per_min.raw}`}</td>
                                            <td className="align-right align-middle">{this.state.match_details.players[3].total_gold}</td>
                                            <td className="align-right align-middle">{`${this.state.match_details.players[3].last_hits}/${this.state.match_details.players[3].denies}`}</td>
                                            <td className="align-right align-middle">{this.state.match_details.players[3].hero_damage}</td>
                                            <td className="align-right align-middle">{this.state.match_details.players[3].tower_damage}</td>
                                            <td className="align-right align-middle">{this.state.match_details.players[3].hero_healing}</td>
                                            <td className="align-middle">
                                                <div className="d-flex flex-row">
                                                    <img className="item-img" src={'http://cdn.dota2.com/'+mapItemToName(this.props.items_list,this.state.match_details.players[3].item_0)} alt=""/>
                                                    <img className="item-img" src={'http://cdn.dota2.com/'+mapItemToName(this.props.items_list,this.state.match_details.players[3].item_1)} alt=""/>
                                                    <img className="item-img" src={'http://cdn.dota2.com/'+mapItemToName(this.props.items_list,this.state.match_details.players[3].item_2)} alt=""/>
                                                    <img className="item-img" src={'http://cdn.dota2.com/'+mapItemToName(this.props.items_list,this.state.match_details.players[3].item_3)} alt=""/>
                                                    <img className="item-img" src={'http://cdn.dota2.com/'+mapItemToName(this.props.items_list,this.state.match_details.players[3].item_4)} alt=""/>
                                                    <img className="item-img" src={'http://cdn.dota2.com/'+mapItemToName(this.props.items_list,this.state.match_details.players[3].item_5)} alt=""/>
                                                </div>
                                            </td>
                                            </tr>
                                            <tr>
                                            <th scope="row"><img className="hero-img align-middle" src={`https://api.opendota.com${this.props.heroes_list[this.state.match_details.players[4].hero_id]}`} alt="hero-image"/></th>
                                            <td className="align-middle">{this.state.match_details.players[4].level}</td>
                                            <td className="align-middle">{this.state.match_details.players[4].name}</td>
                                            <td className="align-right align-middle">{this.state.match_details.players[4].kills}</td>
                                            <td className="align-right align-middle">{this.state.match_details.players[4].deaths}</td>
                                            <td className="align-right align-middle">{this.state.match_details.players[4].assists}</td>
                                            <td className="align-right align-middle">{`${this.state.match_details.players[4].benchmarks.gold_per_min.raw}/${this.state.match_details.players[4].benchmarks.xp_per_min.raw}`}</td>
                                            <td className="align-right align-middle">{this.state.match_details.players[4].total_gold}</td>
                                            <td className="align-right align-middle">{`${this.state.match_details.players[4].last_hits}/${this.state.match_details.players[4].denies}`}</td>
                                            <td className="align-right align-middle">{this.state.match_details.players[4].hero_damage}</td>
                                            <td className="align-right align-middle">{this.state.match_details.players[4].tower_damage}</td>
                                            <td className="align-right align-middle">{this.state.match_details.players[4].hero_healing}</td>
                                            <td className="align-middle">
                                                <div className="d-flex flex-row">
                                                    <img className="item-img" src={'http://cdn.dota2.com/'+mapItemToName(this.props.items_list,this.state.match_details.players[4].item_0)} alt=""/>
                                                    <img className="item-img" src={'http://cdn.dota2.com/'+mapItemToName(this.props.items_list,this.state.match_details.players[4].item_1)} alt=""/>
                                                    <img className="item-img" src={'http://cdn.dota2.com/'+mapItemToName(this.props.items_list,this.state.match_details.players[4].item_2)} alt=""/>
                                                    <img className="item-img" src={'http://cdn.dota2.com/'+mapItemToName(this.props.items_list,this.state.match_details.players[4].item_3)} alt=""/>
                                                    <img className="item-img" src={'http://cdn.dota2.com/'+mapItemToName(this.props.items_list,this.state.match_details.players[4].item_4)} alt=""/>
                                                    <img className="item-img" src={'http://cdn.dota2.com/'+mapItemToName(this.props.items_list,this.state.match_details.players[4].item_5)} alt=""/>
                                                </div>
                                            </td>
                                            </tr>
                                            
                                        </tbody>
                                    </table>
                                    </div>
                                    <h4 className="font-weight-bold" style={{textAlign: 'start'}}>{dire_team_name}</h4>
                                <div className="table-container">
                                    <table className="table align-left">
                                        <thead>
                                            <tr>
                                            <th scope="col">Hero</th>
                                            <th scope="col">Lvl</th>
                                            <th scope="col">Player</th>
                                            <th scope="col" className="align-right align-middle">K</th>
                                            <th scope="col" className="align-right align-middle">D</th>
                                            <th scope="col" className="align-right align-middle">A</th>
                                            <th scope="col" className="align-right align-middle">GPM/XPM</th>
                                            <th scope="col" className="align-right align-middle">TG</th>
                                            <th scope="col" className="align-right align-middle">LH/DN</th>
                                            <th scope="col" className="align-right align-middle">HD</th>
                                            <th scope="col" className="align-right align-middle">TD</th>
                                            <th scope="col" className="align-right align-middle">HH</th>
                                            <th scope="col">Items</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                            <th scope="row"><img className="hero-img align-middle" src={`https://api.opendota.com${this.props.heroes_list[this.state.match_details.players[5].hero_id]}`} alt="hero-image"/></th>
                                            <td className="align-middle">{this.state.match_details.players[5].level}</td>
                                            <td className="align-middle">{this.state.match_details.players[5].name}</td>
                                            <td className="align-right align-middle">{this.state.match_details.players[5].kills}</td>
                                            <td className="align-right align-middle">{this.state.match_details.players[5].deaths}</td>
                                            <td className="align-right align-middle">{this.state.match_details.players[5].assists}</td>
                                            <td className="align-right align-middle">{`${this.state.match_details.players[5].benchmarks.gold_per_min.raw}/${this.state.match_details.players[5].benchmarks.xp_per_min.raw}`}</td>
                                            <td className="align-right align-middle">{this.state.match_details.players[5].total_gold}</td>
                                            <td className="align-right align-middle">{`${this.state.match_details.players[5].last_hits}/${this.state.match_details.players[5].denies}`}</td>
                                            <td className="align-right align-middle">{this.state.match_details.players[5].hero_damage}</td>
                                            <td className="align-right align-middle">{this.state.match_details.players[5].tower_damage}</td>
                                            <td className="align-right align-middle">{this.state.match_details.players[5].hero_healing}</td>
                                            <td className="align-middle">
                                                <div className="d-flex flex-row">
                                                    <img className="item-img" src={'http://cdn.dota2.com/'+mapItemToName(this.props.items_list,this.state.match_details.players[5].item_0)} alt=""/>
                                                    <img className="item-img" src={'http://cdn.dota2.com/'+mapItemToName(this.props.items_list,this.state.match_details.players[5].item_1)} alt=""/>
                                                    <img className="item-img" src={'http://cdn.dota2.com/'+mapItemToName(this.props.items_list,this.state.match_details.players[5].item_2)} alt=""/>
                                                    <img className="item-img" src={'http://cdn.dota2.com/'+mapItemToName(this.props.items_list,this.state.match_details.players[5].item_3)} alt=""/>
                                                    <img className="item-img" src={'http://cdn.dota2.com/'+mapItemToName(this.props.items_list,this.state.match_details.players[5].item_4)} alt=""/>
                                                    <img className="item-img" src={'http://cdn.dota2.com/'+mapItemToName(this.props.items_list,this.state.match_details.players[5].item_5)} alt=""/>
                                                </div>
                                            </td>                                 
                                            </tr>
                                            <tr>
                                            <th scope="row"><img className="hero-img align-middle" src={`https://api.opendota.com${this.props.heroes_list[this.state.match_details.players[6].hero_id]}`} alt="hero-image"/></th>
                                            <td className="align-middle">{this.state.match_details.players[6].level}</td>
                                            <td className="align-middle">{this.state.match_details.players[6].name}</td>
                                            <td className="align-right align-middle">{this.state.match_details.players[6].kills}</td>
                                            <td className="align-right align-middle">{this.state.match_details.players[6].deaths}</td>
                                            <td className="align-right align-middle">{this.state.match_details.players[6].assists}</td>
                                            <td className="align-right align-middle">{`${this.state.match_details.players[6].benchmarks.gold_per_min.raw}/${this.state.match_details.players[6].benchmarks.xp_per_min.raw}`}</td>
                                            <td className="align-right align-middle">{this.state.match_details.players[6].total_gold}</td>
                                            <td className="align-right align-middle">{`${this.state.match_details.players[6].last_hits}/${this.state.match_details.players[6].denies}`}</td>
                                            <td className="align-right align-middle">{this.state.match_details.players[6].hero_damage}</td>
                                            <td className="align-right align-middle">{this.state.match_details.players[6].tower_damage}</td>
                                            <td className="align-right align-middle">{this.state.match_details.players[6].hero_healing}</td>
                                            <td className="align-middle">
                                                <div className="d-flex flex-row">
                                                    <img className="item-img" src={'http://cdn.dota2.com/'+mapItemToName(this.props.items_list,this.state.match_details.players[6].item_0)} alt=""/>
                                                    <img className="item-img" src={'http://cdn.dota2.com/'+mapItemToName(this.props.items_list,this.state.match_details.players[6].item_1)} alt=""/>
                                                    <img className="item-img" src={'http://cdn.dota2.com/'+mapItemToName(this.props.items_list,this.state.match_details.players[6].item_2)} alt=""/>
                                                    <img className="item-img" src={'http://cdn.dota2.com/'+mapItemToName(this.props.items_list,this.state.match_details.players[6].item_3)} alt=""/>
                                                    <img className="item-img" src={'http://cdn.dota2.com/'+mapItemToName(this.props.items_list,this.state.match_details.players[6].item_4)} alt=""/>
                                                    <img className="item-img" src={'http://cdn.dota2.com/'+mapItemToName(this.props.items_list,this.state.match_details.players[6].item_5)} alt=""/>
                                                </div>
                                            </td>
                                            </tr>
                                            <tr>
                                            <th scope="row"><img className="hero-img align-middle" src={`https://api.opendota.com${this.props.heroes_list[this.state.match_details.players[7].hero_id]}`} alt="hero-image"/></th>
                                            <td className="align-middle">{this.state.match_details.players[7].level}</td>
                                            <td className="align-middle">{this.state.match_details.players[7].name}</td>
                                            <td className="align-right align-middle">{this.state.match_details.players[7].kills}</td>
                                            <td className="align-right align-middle">{this.state.match_details.players[7].deaths}</td>
                                            <td className="align-right align-middle">{this.state.match_details.players[7].assists}</td>
                                            <td className="align-right align-middle">{`${this.state.match_details.players[7].benchmarks.gold_per_min.raw}/${this.state.match_details.players[7].benchmarks.xp_per_min.raw}`}</td>
                                            <td className="align-right align-middle">{this.state.match_details.players[7].total_gold}</td>
                                            <td className="align-right align-middle">{`${this.state.match_details.players[7].last_hits}/${this.state.match_details.players[7].denies}`}</td>
                                            <td className="align-right align-middle">{this.state.match_details.players[7].hero_damage}</td>
                                            <td className="align-right align-middle">{this.state.match_details.players[7].tower_damage}</td>
                                            <td className="align-right align-middle">{this.state.match_details.players[7].hero_healing}</td>
                                            <td className="align-middle">
                                                <div className="d-flex flex-row">
                                                    <img className="item-img" src={'http://cdn.dota2.com/'+mapItemToName(this.props.items_list,this.state.match_details.players[7].item_0)} alt=""/>
                                                    <img className="item-img" src={'http://cdn.dota2.com/'+mapItemToName(this.props.items_list,this.state.match_details.players[7].item_1)} alt=""/>
                                                    <img className="item-img" src={'http://cdn.dota2.com/'+mapItemToName(this.props.items_list,this.state.match_details.players[7].item_2)} alt=""/>
                                                    <img className="item-img" src={'http://cdn.dota2.com/'+mapItemToName(this.props.items_list,this.state.match_details.players[7].item_3)} alt=""/>
                                                    <img className="item-img" src={'http://cdn.dota2.com/'+mapItemToName(this.props.items_list,this.state.match_details.players[7].item_4)} alt=""/>
                                                    <img className="item-img" src={'http://cdn.dota2.com/'+mapItemToName(this.props.items_list,this.state.match_details.players[7].item_5)} alt=""/>
                                                </div>
                                            </td>
                                            </tr>
                                            <tr>
                                            <th scope="row"><img className="hero-img align-middle" src={`https://api.opendota.com${this.props.heroes_list[this.state.match_details.players[8].hero_id]}`} alt="hero-image"/></th>
                                            <td className="align-middle">{this.state.match_details.players[8].level}</td>
                                            <td className="align-middle">{this.state.match_details.players[8].name}</td>
                                            <td className="align-right align-middle">{this.state.match_details.players[8].kills}</td>
                                            <td className="align-right align-middle">{this.state.match_details.players[8].deaths}</td>
                                            <td className="align-right align-middle">{this.state.match_details.players[8].assists}</td>
                                            <td className="align-right align-middle">{`${this.state.match_details.players[8].benchmarks.gold_per_min.raw}/${this.state.match_details.players[8].benchmarks.xp_per_min.raw}`}</td>
                                            <td className="align-right align-middle">{this.state.match_details.players[8].total_gold}</td>
                                            <td className="align-right align-middle">{`${this.state.match_details.players[8].last_hits}/${this.state.match_details.players[8].denies}`}</td>
                                            <td className="align-right align-middle">{this.state.match_details.players[8].hero_damage}</td>
                                            <td className="align-right align-middle">{this.state.match_details.players[8].tower_damage}</td>
                                            <td className="align-right align-middle">{this.state.match_details.players[8].hero_healing}</td>
                                            <td className="align-middle">
                                                <div className="d-flex flex-row">
                                                    <img className="item-img" src={'http://cdn.dota2.com/'+mapItemToName(this.props.items_list,this.state.match_details.players[8].item_0)} alt=""/>
                                                    <img className="item-img" src={'http://cdn.dota2.com/'+mapItemToName(this.props.items_list,this.state.match_details.players[8].item_1)} alt=""/>
                                                    <img className="item-img" src={'http://cdn.dota2.com/'+mapItemToName(this.props.items_list,this.state.match_details.players[8].item_2)} alt=""/>
                                                    <img className="item-img" src={'http://cdn.dota2.com/'+mapItemToName(this.props.items_list,this.state.match_details.players[8].item_3)} alt=""/>
                                                    <img className="item-img" src={'http://cdn.dota2.com/'+mapItemToName(this.props.items_list,this.state.match_details.players[8].item_4)} alt=""/>
                                                    <img className="item-img" src={'http://cdn.dota2.com/'+mapItemToName(this.props.items_list,this.state.match_details.players[8].item_5)} alt=""/>
                                                </div>
                                            </td>
                                            </tr>
                                            <tr>
                                            <th scope="row"><img className="hero-img align-middle" src={`https://api.opendota.com${this.props.heroes_list[this.state.match_details.players[9].hero_id]}`} alt="hero-image"/></th>
                                            <td className="align-middle">{this.state.match_details.players[9].level}</td>
                                            <td className="align-middle">{this.state.match_details.players[9].name}</td>
                                            <td className="align-right align-middle">{this.state.match_details.players[9].kills}</td>
                                            <td className="align-right align-middle">{this.state.match_details.players[9].deaths}</td>
                                            <td className="align-right align-middle">{this.state.match_details.players[9].assists}</td>
                                            <td className="align-right align-middle">{`${this.state.match_details.players[9].benchmarks.gold_per_min.raw}/${this.state.match_details.players[9].benchmarks.xp_per_min.raw}`}</td>
                                            <td className="align-right align-middle">{this.state.match_details.players[9].total_gold}</td>
                                            <td className="align-right align-middle">{`${this.state.match_details.players[9].last_hits}/${this.state.match_details.players[9].denies}`}</td>
                                            <td className="align-right align-middle">{this.state.match_details.players[9].hero_damage}</td>
                                            <td className="align-right align-middle">{this.state.match_details.players[9].tower_damage}</td>
                                            <td className="align-right align-middle">{this.state.match_details.players[9].hero_healing}</td>
                                            <td className="align-middle">
                                                <div className="d-flex flex-row">
                                                    <img className="item-img" src={'http://cdn.dota2.com/'+mapItemToName(this.props.items_list,this.state.match_details.players[9].item_0)} alt=""/>
                                                    <img className="item-img" src={'http://cdn.dota2.com/'+mapItemToName(this.props.items_list,this.state.match_details.players[9].item_1)} alt=""/>
                                                    <img className="item-img" src={'http://cdn.dota2.com/'+mapItemToName(this.props.items_list,this.state.match_details.players[9].item_2)} alt=""/>
                                                    <img className="item-img" src={'http://cdn.dota2.com/'+mapItemToName(this.props.items_list,this.state.match_details.players[9].item_3)} alt=""/>
                                                    <img className="item-img" src={'http://cdn.dota2.com/'+mapItemToName(this.props.items_list,this.state.match_details.players[9].item_4)} alt=""/>
                                                    <img className="item-img" src={'http://cdn.dota2.com/'+mapItemToName(this.props.items_list,this.state.match_details.players[9].item_5)} alt=""/>
                                                </div>
                                            </td>
                                            </tr>
                                            
                                        </tbody>
                                    </table>
                                </div>
                                    <div className="replay btn">
                                        <a href={this.state.match_details.replay_url}>Download Replay</a>
                                    </div>
                                </div>
                                
                                </div>
                            
                            <div id="graphs" className="tab-pane fade">
                                <Graph xp_adv_values={this.state.match_details.radiant_xp_adv} gold_adv_values={this.state.match_details.radiant_gold_adv} labels={this.createLabels(this.state.match_details.radiant_gold_adv)} type="networth"/>
                                <p>Some content in menu 1.</p>
                            </div>
                            <div id="menu2" className="tab-pane fade">
                                <h3>Menu 2</h3>
                                <p>Some content in menu 2.</p>
                            </div> 
                            
                        </div>
                        
                            
                        <p>Replay file</p>
                        <p>Fun Fact(randomizer)</p>
                        <p> series id something smth to make game 1 2 3 4 </p>
                        <p> sorting by match id after filtering for series_id would get BEST OF ...</p>
                    </div>
                </div>
            )
        }else{
            return(
                <h2>Loading content</h2>
            )
        }
       
    }
}

const mapStateToProps = (state) => {
    return {
        heroes_list: state.heroes_list,
        teams: state.teams,
        leagues: state.leagues,
        allProMatches: state.allProMatches,
        premiumMatches: state.premiumMatches,
        items_list: state.items_list,
        game_mode_list: state.game_mode_list
    }
}

export default connect(mapStateToProps, {getAllProMatches, getLeagues, getTeams, getPremiumMatches})(ProMatchDetail)
