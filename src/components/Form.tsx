type FormProps ={
    city: string
    setCity:React.Dispatch<React.SetStateAction<string>>
    getWeather: (e: React.FormEvent<HTMLFormElement>) => void
}

const Form = (props: FormProps) => {
    return(
        <div className="flex-container form-container">
            <p className="form-kome">都市名を英語でご記入ください。<br></br>
            天気情報を取得します。</p>
            <ul className="form-example">
                <li>例）大阪　→　Osaka</li>
                <li>例）東京　→　Tokyo</li>
                <li>例）札幌　→　Sapporo</li>
            </ul>
            <form onSubmit={props.getWeather} >
                <input 
                type="text" 
                name="city" 
                placeholder="都市名" 
                onChange={e => props.setCity(e.target.value)} 
                value={props.city}
                />
                <button type="submit">天気情報取得</button>
            </form>
        </div>
    )
}
export default Form