import axios from 'axios'
import { GET_TEAMS, GET_LEAGUES, GET_PREMIUM_MATCHES, GET_ALL_PRO_MATCHES } from '../actions/types'

export const getTeams = () => dispatch => {
    console.log('ge teams function runn')
    axios.get('https://api.opendota.com/api/teams')
    .then(res => {
        dispatch(
            {
                type: GET_TEAMS,
                payload: res.data
            }
        )
    })
    .catch(err => {
        console.log(err)
    })
}

export const getLeagues = () => dispatch => {
    axios.get('https://api.opendota.com/api/leagues')
    .then(res => {
        dispatch(
            {
                type: GET_LEAGUES,
                payload: res.data
            }
        )
    })
    .catch(err => {
        console.log(err)
    })
}

export const getAllProMatches = () => dispatch => {
    axios.get('https://api.opendota.com/api/proMatches')
    .then(res => {
        dispatch(
            {
                type: GET_ALL_PRO_MATCHES,
                payload: res.data
            }
        )
    })
    .catch(err => {
        console.log(err)
    })
}

export const getPremiumMatches = () => dispatch => {
    let SQL_query = `SELECT%0A%20%20%20%20%20%20%20%20matches.match_id%20%22MatchID%22%2C%0A%20%20%20%20%20%20%20%20matches.radiant_team_id%2C%0A%20%20%20%20%20%20%20%20matches.dire_team_id%2C%0A%20%20%20%20%20%20%20%20matches.picks_bans%2C%0A%20%20%20%20%20%20%20%20matches.radiant_win%2C%0A%20%20%20%20%20%20%20%20matches.leagueid%2C%0A%20%20%20%20%20%20%20%20matches.radiant_win
    %2C%0A%20%20%20%20%20%20%20%20matches.leagueid%2C%0Acount(distinct%20matches.match_id)%20count%0AFROM%20matches%0AJOIN%20match_patch%20using(match_id)%0AJOIN%20leagues%20using(leagueid)%0AJOIN%20player_matches%20using(match_id)%0AJOIN%20heroes%20on%20heroes.id%20%3D%20player_matches.hero_id%0ALEFT%20JOIN%20notable_players%20ON%20notable_players.account_id%20%3D%20player_matches.account_id%0ALEFT%20JOIN%20teams%20using(team_id
    )%0AWHERE%20TRUE%0A%0AAND%20matches.start_time%20%3E%3D%20extract(epoch%20from%20timestamp%20%272020-01-14T17%3A30%3A00.000Z%27)%0AAND%20leagues.tier%20%3D%20%27premium%27%0AGROUP%20BY%20matches.match_id%0AHAVING%20count(distinct%20matches.match_id)%20%3E%3D%201%0AORDER%20BY%20%22MatchID%22%20DESC%2Ccount%20DESC%20NULLS%20LAST%0ALIMIT%20200`
    axios.get(`https://api.opendota.com/api/explorer/?sql=${SQL_query}`)
    .then(res => {
        dispatch(
            {
                type: GET_PREMIUM_MATCHES,
                payload: res.data.rows
            }
        )
    })
    .catch(err => {
        console.log(err)
    })
}