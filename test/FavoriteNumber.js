const FavoriteNumber = artifacts.require("./FavoriteNumber")

contract('FavoriteNumber', accounts => {
    // it ("Devrait normalement changer les valeurs dans la blockchain", async function (){
    //     const Contract  = await FavoriteNumber.deployed();
    //     const result = await Contract.setFavoriteNumber(50 , {from: accounts[0]})
    // })

    it ("Devrait normalement recuperer les valeurs dans la blockchain", async function (){
        const Contract  = await FavoriteNumber.deployed();
        const result = await Contract.getFavoriteNumber()

        console.log(result)

        assert.equal(number.words[0], 50, "Pas 50")
    })
})