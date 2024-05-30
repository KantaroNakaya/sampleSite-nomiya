import { useState } from "react"
import Title from "./components/Title"
import Image from "./components/Image"
import Info from "./components/Info"
import Form from "./components/Form"
import Results from "./components/Results"
import Loading from "./components/Loading"
import Judge from "./components/Judge"

type ResultsState = {
    country: string
    cityName: string
    temperature: string
    conditionText: string
    icon: string
}


const App = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const [city,setCity] = useState<string>("")
    const [results, setResults] = useState<ResultsState>({
        country: "",
        cityName: "",
        temperature: "",
        conditionText:  "",
        icon: ""
    })
    const getWeather = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        fetch(`https://api.weatherapi.com/v1/current.json?key=19de9e6f64404be5a7353848242505&q=${city}&aqi=no`)
        .then(res => res.json())
        .then(data => {
            setResults({
                country: data.location.country,
                cityName: data.location.name,
                temperature: data.current.temp_c,
                conditionText:  data.current.condition.text,
                icon: data.current.condition.icon
            })
            setLoading(false)
            setCity("")
        })
        .catch(() => alert(
            "エラーが発生しました。再度、英語での都市名のご入力をお願いいたします。"
            )
        )
    }
    return(
        <div className="wrapper">
            <Title/>
            <Image />
            <Info />
            {loading ? <Loading/> : <Results results={results}/>}
            {!loading && results.cityName && <Judge results={results}/>}
            <Form setCity={setCity}
            getWeather={getWeather}
            city={city}
            />
        </div>
    )
}
export default App