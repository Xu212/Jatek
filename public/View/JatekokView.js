import JatekView from "./JatekView.js";

class JatekokView{
    constructor(tomb, szuloElem){
        szuloElem.html('<div id="jatekok"></div>')
        this.divElem = szuloElem.children("div:last-child");
        tomb.forEach(jatek => {
            const jatekaim = new JatekView(jatek,this.divElem)
        });
    }
}
export default JatekokView