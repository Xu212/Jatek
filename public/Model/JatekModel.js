class JatekModel{
    #jatekokTomb = []
    constructor(token){
        this.token = token
    }
    adatBe(vegpont, myCallBack){
        fetch(vegpont, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((response) => response.json())
            .then((data) => {
                this.#jatekokTomb = data;
                myCallBack(this.#jatekokTomb);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    adatUj(vegpont, adat){
        fetch(vegpont, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': this.token,
            },
            body:JSON.stringify(adat)
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Új adat "+data)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    adatMod(vegpont, adat){
        console.log(adat)
        console.log("modosított " + vegpont)
        vegpont += "/" +adat.id;
        fetch(vegpont, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': this.token,
            },
            body: JSON.stringify(adat),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Modosított adat "+data.updateAt)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    adatTorol(vegpont, adat){
        vegpont+="/" +adat.id
        fetch(vegpont, {
            method: 'DELETE',
            headers: {
                'X-CSRF-TOKEN': this.token,
            },
        })
            .then()
            .then(() => {
                console.log("sikeres törlés")
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    mennyisegCsokk(adat, megjelenitoFuggveny){
        this.#jatekokTomb[adat.id-1].db=this.#jatekokTomb[adat.id-1].db-1
        this.adatMod('/games',this.#jatekokTomb[adat.id-1])
        megjelenitoFuggveny(this.#jatekokTomb)
    }
}
export default JatekModel