import "../../css/delT.css"

function delT() {
    return <div className="delT">
                <h2>Sett inn verdier og trykk på "=", finn endring i tempratur</h2>
                <div className="delT-board">
                    <iframe src="https://kalkulator-eta-black.vercel.app/" height="800" width="1000"></iframe>
                </div>
            </div>
}
export default delT