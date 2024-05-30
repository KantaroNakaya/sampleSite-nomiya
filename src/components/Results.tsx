type ResultsProps = {
    results:{
        country: string
        cityName: string
        temperature: string
        conditionText: string
        icon: string
    }
}

const Results = (props: ResultsProps) => {
    return(
        <>
            {props.results.country &&
            <div className="flex-container results-container">
                <div className="place-name">
                    <p className="results-country">{props.results.country}</p>
                    <p className="results-city">{props.results.cityName}</p>
                </div>
                <div className="output-data">
                    <p className="results-temp">{props.results.temperature}<span>°C</span></p>
                    <div className="results-condition">
                        <img src={props.results.icon} alt="icon"/>
                        <span>{props.results.conditionText}</span>
                    </div>
                </div>
            </div>
             }
        </>
    )
}

export default Results