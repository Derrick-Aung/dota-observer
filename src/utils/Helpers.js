export const mapLeagueName = (leagues ,leagueID) => {
    for (let i=0; i<leagues.length; i++){
        if (leagues[i].leagueid === leagueID){
            return leagues[i].name
        }
    }
    return "No name data found"
}

export const mapTeamLogo = (teams, teamID) => {
    for (let i=0; i<teams.length; i++){
        if (teams[i].team_id === teamID){
            return teams[i].logo_url
        }
    }
    return null
}
export const mapItemToName = (items, itemID) => {
    const values = Object.values(items)
    for (let i=0;i<values.length;i++){
        if (values[i].id == itemID){
            return values[i].img
        }
    }
    return null    
}

export const convertSecsToMins = (seconds) => {
    let minutes = Math.floor(seconds/60)
    let extra_seconds = seconds % 60
    extra_seconds = ("0"+extra_seconds).slice(-2)
    return `${minutes}:${extra_seconds}`
}

export const convertEpochToDate = (epochTime) => {
    let date = new Date(0)
    date.setUTCSeconds(epochTime)
    let current_date = new Date()
    let differenceInDays  = (current_date.getTime() - date.getTime()) / (1000 * 3600 * 24) 
    return `${Math.floor(differenceInDays)} Days Ago`
}

export const mapGameMode = (gameModeList ,gameModeID) => {
    return gameModeList[gameModeID] 
}
