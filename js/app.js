// var a=0;
function sv(){
  a=a+1;
  var name=document.querySelector('#name').value;
  var email=document.querySelector('#email').value;

  firebase.database().ref('val/').set({
      cpp:`${a}`,
  });
  firebase.database().ref(`user${a}/`).set({
    name : `${name}`,
    email: `${email}`,
  });
console.log(a);
location.reload();
alert('Data saved!');
}
function updateinfo(){
var starCountRef = firebase.database().ref('val/');
starCountRef.on('value', (snapshot) => {
const data = snapshot.val();
a=parseInt(data.cpp);
console.log(a);

});
}
updateinfo();
