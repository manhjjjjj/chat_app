window.onload = () => {
    firebase.auth().onAuthStateChanged((user) => {
        // console.log(user);
        if (user) {
            view.setScreenActive("web");
            model.getListMessage1 = async () => {
                try {
                    let response = await firebase.firestore()
                        .collection("listMessage")
                        .doc("0IOs7ZiqPMTg5vflxao2")
                        .get();
                    let result = response.data().message
                    console.log(result, "999999999999999");
                    view.renderListChat(result)
                } catch (err) {
                    console.log(err.message);
                }
            }
            model.getListMessage1();

        } else {
            view.setScreenActive("registerPage");
        }
        firebase.firestore().collection("listMessage").doc("0IOs7ZiqPMTg5vflxao2")
            .onSnapshot((doc) => {
                console.log("current data 11111", doc.data());
                view.renderListChat(doc.data().message);
        })
    })









    // view.setScreenActive("registerPage")

    /*
    thao tacs voiws firestore.
    */


    //    getOne document
    // const firestoreQuerises =  async ()=>{
    //   try {
    //     let response= await firebase.firestore()
    //         .collection("user")
    //         .doc("jWXz1DM36jtqV0GU489B")
    //         .get();
    //         console.log(response.data());
    //   } catch (error) {
    //     console.log(error.message);
    //   }

    // }
    // firestoreQuerises();



    // getMay document
    // const firestoreQuerises =  async ()=>{
    //     try {
    //     let response= await firebase.firestore()
    //         .collection("user")
    //         .get();
    //         for (let i = 0; i < response.docs.length; i++) {
    //             console.log("data",response.docs[i].data());

    //         }
    //     } catch (error) {
    //     console.log(error.message);
    //     }

    // }
    // firestoreQuerises();


    // C/R/U/D
    // create document
    // let addField = {
    //     phone: "03986569300",
    //     name: "la"
    // }
    // const firestoreQuerises =  async ()=>{
    //     try {
    //     let response= await firebase.firestore()
    //         .collection("user")
    //         .add(addField);
    //         console.log(response);
    //     } catch (error) {
    //     console.log(error.message);
    //     }

    // }
    // firestoreQuerises();



    // Update docment
    // let newMessage = {
    //     // content:"okk!",
    //     // owner: "manh123@gmail.com",
    //     // cretedAt:"11/2/2022"
    // }   
    // let updateListMessage = {
    //     message:firebase.firestore.FieldValue.arrayUnion(newMessage)
    // }                                       
    // let uid = "0IOs7ZiqPMTg5vflxao2";
    // const firestoreQuerises = async ()=>{
    //     try {
    //         let response = await firebase.firestore()
    //         .collection("listMessage")
    //         .doc(uid)
    //         .update(updateListMessage);
    //     } catch (error) {
    //         console.log(error.message);
    //     }
    // }
    // firestoreQuerises();


    // Delete document
    // let uid = "i9nxvNnEBgOG5VROSJpD"
    // const firestoreQuerises =  async ()=>{
    //     try {
    //         let response= await firebase.firestore()
    //             .collection("user")
    //             .doc(uid)
    //             .delete();
    //         console.log(response);
    //     } catch (error) {
    //         console.log(error.message);
    //     }
    // }
    // firestoreQuerises();



}