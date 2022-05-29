const url1 = 'https:/pic1.jpg';
const url2 = 'https:/pic2.jpg';
const url3 = 'https:/pic3.jpg';



// callback hell 
function download(url, callback) {
  setTimeout(() => {
    console.log(`Downloading ${url} ... through callbacks`);
    callback(url);
  }, 1000);
}


download(url1, function (url) {
  console.log(`Processing ${url} through callbacks`);
  download(url2, function (url) {
    console.log(`Processing ${url} through callbacks`);
    download(url3, function (url) {
      console.log(`Processing ${url} through callbacks`);
    });
  });
});



// promise chain semi call back hell
function promisedownload(url){
  return new Promise((res,rej)=>{
    setTimeout(()=>{
      console.log(`downloading ${url} through promise`)
      res(url)
    },1000)
  })
}

promisedownload(url1).then((result)=>{
  console.log(`processing ${result} through promise chain`)
  return promisedownload(url2)
}).then((result)=>{
  console.log(`processing ${result} through promise chain`)
  return promisedownload(url3)
}).then((result)=>{
  console.log(`processing ${result} through promise chain`)
})



// async await
const asyncFunction=async (url1,url2,url3)=>{
  try{
  const img1 =  await promisedownload(url1)
  console.log(`Processing ${img1} through promise async/await`);
    const img2 = await promisedownload(url2)
  console.log(`Processing ${img2} through promise async/await`);
    const img3 = await promisedownload(url3)
  console.log(`Processing ${img3} through promise async/await`);
  }catch(e){
    console.log(e)
  }
}
asyncFunction(url1,url2,url3)