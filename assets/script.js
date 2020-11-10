function sign() {
    confirm('Are you sure you want to submit the form?');
    let user ={};
    user.name;
}



function submitInfo() {
    // this.sign();
    // var firstName, lastName, emailAddress, password;
    var firstName ='';
    var lastName = '';
    var emailAddress = '';
    var password = '';

firstName = document.getElementById ('firstName').value;
lastName = document.getElementById ('lastName').value;
emailAddress = document.getElementById ('emailAddress').value;
password = document.getElementById ('password').value;
('firstName').value;
console.log ('firstName;' + firstName);

if(firstName == '' && lastName =='' && emailAddress =='' && password ==''){
    alert ('Input missing field');
} else if (firstName == '' || lastName =='' || emailAddress =='' || password =='') {
    alert ('All fields required')
  }
else {
    alert('Form has been submitted');
}

}