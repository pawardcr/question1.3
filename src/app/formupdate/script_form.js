//check to enable
function check(chk1){
    if(chk1.checked == true) {
    document.getElementById('birth').disabled=false;
    document.getElementById('add').disabled=false;
    document.getElementById('ps').disabled=false;
    }
    else {
    document.getElementById('birth').disabled=true;
    document.getElementById('add').disabled=true;
    document.getElementById('ps').disabled=true;
    }
  }
//files size
function file_size  (){ 
  const fi = document.getElementById('file'); 
  // Check if any file is selected. 
  if (fi.files.length > 0) { 
      for (const i = 0; i <= fi.files.length - 1; i++) { 

        const fsize = fi.files.item(i).size; 
        const file = Math.round((fsize / 1024)); 
        // The size of the file. 
          
        document.getElementById('size').innerHTML = file + 'KB'; 
          } 
      } 
}