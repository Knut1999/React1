import "../../css/delT.css"

function delT() {
    return <div className="delT">
                <h2>Sett inn verdier og trykk på "=", finn endring i tempratur</h2>
                <div className="container">
                    <iframe class="responsive-iframe" src="https://kalkulator-mcpdel-t-for-q.vercel.app/"></iframe>
                </div>
            </div>
}
export default delT