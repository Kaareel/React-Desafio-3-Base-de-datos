function Informacion(props) {
    return <div className="Datos">
        <p>{props.subtitle}</p>
        <input onChange={(e) => props.onChange(e.target.value)} type="text" placeholder={props.text} value={props.value}/>
    </div>
}
export default Informacion