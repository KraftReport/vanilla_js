const fileInput = document.querySelector('input');
downloadBtn  = document.querySelector('button');



downloadBtn.addEventListener('click',function(e){
    e.preventDefault();
    downloadBtn.innerText='Downloading File ....';
   fetchFile(fileInput.value);

});

function fetchFile(url){
    fetch(url).then(response=>response.blob()).then(file=>{
        let temp = URL.createObjectURL(file);
        let aTag = document.createElement('a');
        aTag.href= temp;
        aTag.download = url.replace(/^.*[\\/]/,'');
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
        URL.revokeObjectURL(temp);
        downloadBtn.innerText = 'Download File';
    }).catch(()=>{
        downloadBtn.innerText = "Download File";
        alert('Fail to download the file !');
    })
}