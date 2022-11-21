class JatekView{
    #elem;
    constructor(elem, szuloElem){
        this.#elem = elem;
        szuloElem.append(`<div class="jatek">
        <p>id: ${elem.id}</p> 
        <p>cím: ${elem.cim}</p> 
        <p>műfaj: ${elem.mufaj}</p>
        <p>db: ${elem.db}</p>
        <button id="db${elem.id}">db levétel</button>
        </div>`)
        this.dbCsokk = $(`#db${elem.id}`);
        this.dbCsokk.on("click",()=>{
            this.kattintasTrigger();
        })
    }
    kattintasTrigger(){
        const esemeny = new CustomEvent("csokk",{detail:this.#elem});
        window.dispatchEvent(esemeny);
    }
}
export default JatekView