async function syncFunc() {
    console.log("imei")
    var x = await new Promise(function(resolve, reject) {

        setTimeout(function() {

            resolve("heheheh ")
        }, 3000)

    })


    console.log(x)

}

syncFunc()