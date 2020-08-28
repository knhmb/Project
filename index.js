let limit = false;
let limitNumber = 5;
let num = 1;

$("#plus").click(function() {
  let html = $('.copy').html();
  $('.shade').after(html);
  let change = $("#change");
  if(!limit){
    num++;
  }
  change.text(num);
});

$('body').on('click', '.remove', function(){
  $(this).parents('.control-group').remove();
});







// function AddInput(){
//   let addNewInput = docuemnt.getElementByI("");
//
//   if(addNewInput.style.display === "none") {y
//     addNewInput.style.display = "block";
//   }
// }

// function AddInput(){
//   document.write("<label>Rule 1</label> <select class='form-control short'> <option value='aff_sub'>aff_sub</option></select> <select class='form-control short'> <option value='is'>is</option> </select> <input type='text' placeholder='insert parameter' class='form-control'> <span id='plus' class='glyphicon glyphicon-plus-sign'></span> <span id='minus' class='glyphicon glyphicon-minus-sign'></span>")
// }
