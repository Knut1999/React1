import "../../css/delT.css"

function delT() {
    return <div className="delT">
                <h2>Sett inn verdier og trykk på "=", finn endring i tempratur</h2>
                <div className="container">
                    <iframe class="responsive-iframe" src="https://kalkulator-eta-black.vercel.app/"></iframe>
                </div>
            </div>
}
export default delT