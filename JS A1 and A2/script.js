

function addCode() { 
    
  var l,ll,lll,llll,lllll,w,ww;
    var x = document.createElement("DIV");
   
    var itm = document.getElementById("myDiv")
   
    var t= itm.cloneNode(true);
    
     t.setAttribute("style", " padding-top:5px;  ");
     document.getElementById("myDivs").appendChild(t);
} 

function checkReqFields() {

    var txt = "";
    if (document.getElementById("AAA").value<5) {
      txt = "Enter Age between 5-60+";
       l=false;
    } else
    {
        txt = " ";
        l=true;
    }
    document.getElementById("AA").innerHTML = txt;
     var rrr=/(7|8|9)\d{9}/;
     oo= document.getElementById("mob").value;
if(rrr.test(oo)) {
  document.getElementById("m").innerHTML = " ";
  ll=true;
}else
{  document.getElementById("m").innerHTML = "Enter Valid Phone Number";
ll=false;}

    
      var regex = /^[a-zA-Z ]*$/;
      bb= document.getElementById("Name").value;
if(regex.test(bb)) {
  document.getElementById("RN").innerHTML = " ";
 lll=true;
}else
{  document.getElementById("RN").innerHTML = "Name can have Alphabets Only";
lll=false;}
bbb= document.getElementById("Name1").value;
if(regex.test(bbb)) {
  document.getElementById("RN1").innerHTML = " ";
  llll=true;
}else
{  document.getElementById("RN1").innerHTML = "Name can have Alphabets Only";
llll=false;}
bbc= document.getElementById("Name2").value;
if(regex.test(bbc)) {
  document.getElementById("RN2").innerHTML = " ";
  lllll=true;
}else
{  document.getElementById("RN2").innerHTML = "Relationship can have Alphabets Only";
lllll=false;}

      

var rege = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
cc= document.getElementById("Address").value;
if(rege.test(cc)) {
  document.getElementById("RA").innerHTML = " ";
  w=true;
}else
{  document.getElementById("RA").innerHTML = "Enter Valid Email";
w=false;}
ccc= document.getElementById("Address1").value;
if(rege.test(ccc)) {
  document.getElementById("RA1").innerHTML = " ";
  ww=true;
}else
{  document.getElementById("RA1").innerHTML = "Enter Valid Email";
ww=false;}

    if((l&ll&lll&llll&lllll&w&ww)==true){
    alert("Form Submitted");}
}


function hi()
{
  var tx="";
if (document.getElementById("AAA").value>=18) {
  tx = " ";
  var P=document.getElementById("AAA");
  P.setAttribute("style", " border:2px solid black; width:98%; border-radius:12px; padding:5px; background-color: transparent; ");
} else
{
  var r=confirm('Are you an Adult ?');
  if (r == true) {
      var p=document.getElementById("AAA");
      p.setAttribute("style", " border:2px solid red; width:98%; border-radius:12px; padding:5px; background-color: transparent;" );
      tx = "Check Your Age!";

    } else {
      tx=" ";
      var v=document.getElementById("VD");
      v.value= '';
    }
}
document.getElementById("VDD").innerHTML = tx;
}


function openPage(pageName,elmnt,color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none" ;
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;
}
document.getElementById("defaultOpen").click();


var tags = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central Arfrican Republic","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cuba","Curacao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauro","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
   var n= tags.length;    
   function ac(value) { 
      document.getElementById('datalist').innerHTML = ''; 
       l=value.length; 
       for (var i = 0; i<n; i++) { 
        if(((tags[i].toLowerCase()).indexOf(value.toLowerCase()))>-1) 
        { 
            var node = document.createElement("option"); 
            var val = document.createTextNode(tags[i]); 
             node.appendChild(val);  
              document.getElementById("datalist").appendChild(node); 
            } 
        } 
    } 
