function reset(){
    var inputs = document.querySelectorAll('#notDone');
    for (var i =0; i< inputs.length; i++){
        inputs[i].checked = false
    }
    counter = 0;
    }
var tt,tc,tic = 0;

$(document).ready(function(){
    $.getJSON(
        "https://jsonplaceholder.typicode.com/todos",
        function(data){
            $.each(data, function(key, value){
                tt = data.length;
                if (value.completed == true){
                    tc++;
                    $("#showjson").append(
                        $("#showjson").append(
                            $(document.createElement("input")).attr({
                                checked :true,
                                type: "checkbox",
                                disabled : true,
                            })
                        )
                        .append("<label style = 'text-decoration:line-through; color:green; user-select:none;' class='mx-2'>" + " "+ value.title + "</label>"+ " <br>"));
                }
                else{
                    tic++;
                    $("#showjson").append(
                        $("#showjson").append(
                            $(document.createElement("input")).attr({
                                type: "checkbox",
                                onchange: "validate(this);",
                                id : "notDone",
                                
                            })
                        )
                        .append("<label class='mx-2'>" + value.title + "</label>"+ " <br>"));
                        
                    }
                
            });
        })  

});

counter = 0;
function validate(v){
    if (v.checked){
        counter++;
    } else{
        counter--;
    }
    var check = new Promise((resolve, reject)=>{
        if (counter == 5){
            resolve();
            counter = 0;
        } else{
            reject(counter);
        }
    })
    .then(()=>{
        setTimeout(()=>{
            alert("Congrats! 5 Tasks have been Successfully Completed");
        },100)
        
    }).catch((a)=>{
        })
};

function valid(callback){
    var fixedusername=/admin/;
    var fixedpassword=/12345/;
    var username=document.getElementById("name");
    var password=document.getElementById("password");
    var usernameerror=document.getElementById("nameerror");
    var passworderror=document.getElementById("passworderror");
        
    var a;
    var b;
    if(username.value.trim()==""){
        usernameerror.textContent="Username can't be empty";
        usernameerror.style.color="red";
            a=0;
    } if(password.value.trim()==""){
        passworderror.textContent="Password can't be empty";
        passworderror.style.color="red";
            b=0;
    }
    if(username.value.trim()!=""){
        
        if(username.value.length<6){
            if(fixedusername.test(username.value)){
                a=1;
                usernameerror.innerHTML="";
            }else{
                a=0;
                usernameerror.style.color="red";
            usernameerror.textContent="Invalid user name";
            }
            
        }
        else{
            a=0;
            usernameerror.style.color="red";
            usernameerror.textContent="Invalid user name";
       }
    }
    if(password.value.trim()!=""){
        if(password.value.length<6){
            if(fixedpassword.test(password.value)){
                b=1;
                
                passworderror.innerHTML="";
            }else{
                passworderror.style.color="red";
                passworderror.textContent="Invalid password";
                b=0;
            }
            
            
        }else{
            b=0;
            passworderror.style.color="red";
            passworderror.textContent="Invalid password";
        }
    }
    if(a==1&&b==1){
            var z=callback();
            if(z==true){
                return true;
            }
    }
    else{
        return false;
    }
}
function check(){
    return true;
}


function details(){
    var username=document.getElementById("name");
    var password=document.getElementById("password");
    return [username.value = 'admin',password.value = 12345]
}