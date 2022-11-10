const model = {};
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDzHdmzCGoxUwNplZ1p9TpWpo5srfCRoWo",
    authDomain: "lebamanhpj.firebaseapp.com",
    projectId: "lebamanhpj",
    storageBucket: "lebamanhpj.appspot.com",
    messagingSenderId: "1062903151492",
    appId: "1:1062903151492:web:49af81d981e28cf3b2fbd1"
    /* Firebase config */
});
// console.log(firebaseApp);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
// console.log(auth);
model.register = async (data) => {
    try {
        let dataUser ='';
        console.log("mode",data);
        let respose = await auth.createUserWithEmailAndPassword(data.email,data.password);
        // console.log("33333",auth.currentUser);
        view.setScreenActive("loginPage");
        auth.currentUser.sendEmailVerification();

        await firebase.auth().currentUser.updateProfile({
            displayName:data.firstName + data.lastName
        })
        dataUser = auth.currentUser.displayName;
        view.dataUser(dataUser);
        // console.log("d444444",dataUser);

    } catch (error) {
        alert(error.message);
    }
}
// model.login = (data) => {
//     console.log("daaaaa", data);
// }

model.login = async (data) => {
    try {
        // console.log("mode11111",data);
        let respose = await auth.signInWithEmailAndPassword(data.email,data.password);
        auth.currentUser.sendEmailVerification();
        view.setScreenActive("web");
        // console.log("1111",auth);
        if (respose && auth.currentUser.emailVerified) {
            view.setScreenActive("web");
        } else {
            alert("plaee emailVerified")
        }
        
    } catch (error) {
        alert(error.message);
    }
}

model.dataSendFirebase = (data)=>{
    let uid = "0IOs7ZiqPMTg5vflxao2";
    const firestoreQuerises = async () =>{
        try{
        console.log("111111111111111111",data);

            let response = await firebase.firestore()
            .collection("listMessage")
            .doc(uid)
            .update({ message: firebase.firestore.FieldValue.arrayUnion(data) });
        } catch (error) {
            console.log(error.message);
        }
    }
    firestoreQuerises();
}

model.getListMessage = async ()=>{
    try{
        let response = await firebase.firestore()
        .collection("listMessage")
        .doc("0IOs7ZiqPMTg5vflxao2")
        .get();
        let result = response.data().message
        console.log(result,"010101010");
        view.renderListChat(result)
    } catch (err) {
        console.log(err.message);
    }
    
}


