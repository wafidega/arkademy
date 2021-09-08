let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: 
    {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    }

//Mengubah data(Spread Operator)
 let dataBaru = {...data, name: " Dega", email:"wpandega81@gmail.com", hobby: "komputer"};

 console.log(dataBaru)

 //Desturcturing
 let {street:jalan, city:kota} = data.address

 console.log(jalan)
 console.log(kota)