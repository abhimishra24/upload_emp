function uploadFile(){
	const fileInput=document.getElementById('fileInput');
	const file= fileInput.files[0];

	if (!file) {
	alert('Please select a file');
		return;
	}
	
	const formdata = new FormData();
    //formdata.append("csvFile", fileInput.files[0], "[PROXY]");
    //formdata.append("csvFile", fileInput.files[0]);
	formdata.append("csvFile", file);
	


    const requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow"
     };

    fetch("http://192.168.29.128:8080/employees/upload", requestOptions)
    .then((response)=> {
		if (response.ok){
	alert('File has been successfully uploaded');
    return;}
	})
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
	
	
	

        
}
	

	 
       
             


