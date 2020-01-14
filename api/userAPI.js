import firebase from 'react-native-firebase';

export default function addUser(user, result) {
  firebase.firestore()
    .collection('Users')
    .add({
      name : user.name,
      surname : user.surname,
      birthdate : user.birthdate,
      phoneNumber : user.phoneNumber,
      email: user.email,
      password: user.password,
      createdDate: user.createdDate
    }).then((data) => result(data))
    .catch((error) => console.log(error))
}
