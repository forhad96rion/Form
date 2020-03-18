$(function() {
  $("form[name='registrationForm']").validate({
      rules: {
      firstname: "required",
      lastname: "required",
      email: {
        required: true,
        email: true
      },
      password: {
        required: true,
        minlength: 6
      }
    },
      messages: {
      firstname: "Please Enter First Name",
      lastname: "Please Enter Last Name",
      password: {
        required: "Please Provide Password",
        minlength: "Password Must Be At Least Six Characters Long"
      },
   
	  
	  email: "Please Enter Valid Email Address"
    },
     submitHandler: function(form) {
      form.submit();
    }
  });
});