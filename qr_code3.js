
        window.onload = function() { 

            var hub3_code = "<pin>4528574685</pin>" + 
                "<name></name>\n"+
                "<DOB>19 Apr 1998</DOB>\n"+
                "<TYPE>A</TYPE>\n"+
                "<V>2.0</V>\n"+
                "<ds>302c02145f6b7abf9aa4483d0c52f7db1b225298219d53f102146789b7057969f8fa1af200bf0b56a1a7b0876d16</ds>\n";
               
			   
			   
			   
            var textToEncode = document.getElementById("textToEncode");
            textToEncode.value = hub3_code;   

        	PDF417.init(hub3_code);           	

            var barcode = PDF417.getBarcodeArray();
			
			//hide show2
			
			document.getElementById('text_area_div').style.display="none";
			
			
			
			
			
			
			
			

            // block sizes (width and height) in pixels
            var bw = 1.7;
            var bh = .4;

            // create canvas element based on number of columns and rows in barcode
            var canvas = document.createElement('canvas');
            canvas.width = bw * barcode['num_cols'];
            canvas.height = bh * barcode['num_rows'];
            document.getElementById('barcode').appendChild(canvas);

            var ctx = canvas.getContext('2d');                    


            // graph barcode elements
            var y = 0;
            // for each row
            for (var r = 0; r < barcode['num_rows']; ++r) {
                var x = 0;
                // for each column
                for (var c = 0; c < barcode['num_cols']; ++c) {
                    if (barcode['bcode'][r][c] == 1) {                        
                        ctx.fillRect(x, y, bw, bh);
                    }
                    x += bw;
                }
                y += bh;
            }            
        }

        function generate() {
            var textToEncode = document.getElementById("textToEncode");

            PDF417.init(textToEncode.value);             

            var barcode = PDF417.getBarcodeArray();

            // block sizes (width and height) in pixels
            var bw = 1.7;
            var bh = .4;



//hide3

document.getElementById('text_area_div').style.display="none";


document.getElementById('zog_p').style.display="block";



document.getElementById('zog').style.display="block";

 var w = window.open('', 'background:red,','width=300px,height=2px,')
    w.document.write("আপনার তথ্য সফল ভাবে আপডেট হয়েছে")
    w.focus()
    setTimeout(function () { w.close(); }, 1500);







            // create canvas element based on number of columns and rows in barcode
            var container = document.getElementById('barcode');
            container.removeChild(container.firstChild);

            var canvas = document.createElement('canvas');
            canvas.width = bw * barcode['num_cols'];
            canvas.height = bh * barcode['num_rows'];
            container.appendChild(canvas);

            var ctx = canvas.getContext('2d');                    

            // graph barcode elements
            var y = 0;
            // for each row
            for (var r = 0; r < barcode['num_rows']; ++r) {
                var x = 0;
                // for each column
                for (var c = 0; c < barcode['num_cols']; ++c) {
                    if (barcode['bcode'][r][c] == 1) {                        
                        ctx.fillRect(x, y, bw, bh);
                    }
                    x += bw;
                }
                y += bh;
            }       
        }
    
 

