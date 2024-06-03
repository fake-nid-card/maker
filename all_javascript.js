
      function get() {
 // Selecting the input element and get its value 
      
    var innameb = document.getElementById("innb").value;
		
    var inname = document.getElementById("inn").value;
				
	var infname = document.getElementById("infn").value;

	var inmname = document.getElementById("inmn").value;
	
	var inbirth = document.getElementById("inbd").value;
	
	var innidcard = document.getElementById("innid").value;
	
	
	var gram = document.getElementById("village").value;
	
	var union = document.getElementById("union").value;
	
	var post_office = document.getElementById("post_office").value;
	
	var post_code = document.getElementById("post_code").value;

	var upojela = document.getElementById("upojela").value;
	
	var jela = document.getElementById("jela").value;
	
	
	
	var blood = document.getElementById("blood_group").value;
	
	
	var issue = document.getElementById("issue").value;
	
	
	var sign = document.getElementById("insign").value;
	
	
	var  pho = document.querySelector("#upload").value;
	
	
	
	
 // Displaying the value
		
		var all_input = innameb.length =="" ||inname.length=="" ||infname.length=="" 
		||inmname.length=="" ||inbirth.length=="" ||innidcard.length=="" 
		||gram.length=="" ||union.length=="" ||post_office.length=="" 
		||post_code.length=="" ||upojela.length=="" 
		||jela.length==""
		||issue.length=="" ;
		
		var photo = pho.length==0
		
		
		if(all_input){
		
		
		alert("দয়াকরে সম্পূর্ণ ফরমটি পূরণ করূন");
		return false;
		}
		
		
 
 	if(photo){
		
		
		alert("আপনার ছবি আপলোড করুন");
		
		}
 
 
 
 
 
 else{
 
 
 
 
	
 
 
 
 
 document.getElementById("nb").innerHTML='<span style="color:black;font-size:11px;margin-right:5px;">নাম  : </span>'+innameb;
 
 

		document.getElementById("n").innerHTML='<span style="color:black;font-size:11px;margin-right:5px;">Name: </span>'+inname;
		
		document.getElementById("fn").innerHTML='<span style="color:black;font-size:11px;margin-right:5px;">পিতা/স্বামী  : </span>'+infname;
		
		
		document.getElementById("mn").innerHTML='<span style="color:black;font-size:11px;margin-right:5px;">মাতা  : </span>'+inmname;
		
		document.getElementById("bd").innerHTML='<span style="font-size:13.5px;color:black;margin-right:5px;">Date Of Birth : </span>'+inbirth;
		
		
		document.getElementById("nid").innerHTML='<span style="font-size:13.5px;color:black;margin-right:5px;">ID NO : </span>'+innidcard;
		 
		
		
		
		
		
		
		document.getElementById("bp3").innerHTML='<span style="font-size:8.7px;color:black;">ঠিকানা:বাসা/হোল্ডিং:</span>'+gram+',';
		
		
		
		document.getElementById("bp4").innerHTML='<span>গ্রাম/রাস্তা:</span>'+union+',';
		
		
		
			
		document.getElementById("bp5").innerHTML='ডাকঘর: '+post_office+'-';
		
		
		
		
			
		document.getElementById("bp6").innerHTML=post_code+' ,';
		
		
		document.getElementById("bp7").innerHTML=upojela+',';
		
		
		
		document.getElementById("bp8").innerHTML=jela;
		
		
			document.getElementById("bp_blood").innerHTML='<span style="font-size:8.7px;color:black;">রক্তের গ্রুপ / Blood:   </span>'+blood;
		
		
		
		
	    document.getElementById("issue_date").innerHTML='প্রদানের তারিখ:  '+issue;
		
		
		
		document.getElementById("sign").innerHTML=sign;
		
		
		
		
		document.getElementById("design_border").style.display="none";
		
		
		document.getElementById("h").style.display="none";
		
		
		
		
		document.getElementById("div4").style.display="none";
		
		
		
		
		
		
		
		
		
		
		document.getElementById("main_demo_nid").style.display="block";
		
		
		document.getElementById("id_main_txt").style.display="block";
		
		
		document.getElementById("contant").style.display="block";
		
		
		
		
		document.getElementById("cnt").style.display="block";
		
		
	
	
	
		
		
		
		document.getElementById("nid_border").style.display="block";
		
	
		
		var w = window.open('', 'background:red,','width=300px,height=2px,')
    w.document.write("আপনার আই.ডি কার্ড সফল ভাবে তৈরি হয়েছে")
    w.focus()
    setTimeout(function () { w.close(); }, 1500);
		
		
		
		}
		
		
		
		
		
		
		
		
		
		


}
	  
	
	  
//for upload section
	 
	  const display = document.querySelector(".display");
  const input = document.querySelector("#upload");
  //let img = document.querySelector("img");
  
  input.addEventListener("change", () => {
  let reader = new FileReader();
  
  
  reader.readAsDataURL(input.files[0]);
  reader.addEventListener("load", () => {
  display.innerHTML = `<img src=${reader.result} alt=''/>`;
  });
  });
  
 
 
 
 
 
	