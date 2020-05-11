let fs = require("fs");
require("chromedriver");
let swd = require("selenium-webdriver");
let path = require("path");

let bldr = new swd.Builder();
let driver = bldr.forBrowser("chrome").build();

let cfile = process.argv[2];
let mfile = process.argv[3];
//let usertoadd = process.argv[3];

(async function(){
    
    try{
        
console.log("hey jnfjnfjenfmefnvmkef0");
        await  driver.manage().setTimeouts({
            implicit : 10000,
            pageload : 30000
        });
         
        
        let contents = await fs.promises.readFile(cfile,'utf-8');
        let question = await fs.promises.readFile(mfile,'utf-8');
        let obj =JSON.parse(contents);
        let obj2 = JSON.parse(question);
        let ques = obj2.questions;
        console.log(ques + "mfile");
        let user = obj.un;
        let pwd = obj.pwd;
        console.log(user);
        console.log(pwd);

        console.log("jnjehjefhgjefngjfnkjrnb");
        await driver.get("https://twitter.com/login");

        let uel = await driver.findElements(swd.By.css('.r-30o5oe.r-1niwhzg.r-17gur6a.r-1yadl64.r-deolkf.r-homxoj.r-poiln3'));
        // let pel = await driver.findElement(swd.By.css('session[password]'));
        console.log(uel.length);
        await uel[0].sendKeys(user);
        await uel[1].sendKeys(pwd);

        let btnlogin = await driver.findElement(swd.By.css('.css-901oao.css-16my406.css-bfa6kz.r-1qd0xha.r-ad9z0x.r-bcqeeo.r-qvutc0'));

        await btnlogin.click();
      
        let tweetbtn = await driver.findElement(swd.By.css('.css-1dbjc4n.r-jw8lkh.r-e7q0ms'));

        await tweetbtn.click();

        console.log("Tweet Open");

        //console.log(ques.path);

        let textareaclick = await driver.findElement(swd.By.css('.notranslate.public-DraftEditor-content'));
        await textareaclick.click();
        
        //console.log(ques.path);

        let textfileread = await fs.promises.readFile(path.join(ques[0].path, 'type.java'));
          
        let text = textfileread + "";

        console.log(text);

        await textareaclick.sendKeys(text);

       let tweetbtnclick = await driver.findElement(swd.By.css('.css-18t94o4.css-1dbjc4n.r-urgr8i.r-42olwf.r-sdzlij.r-1phboty.r-rs99b7.r-1w2pmg.r-1n0xq6e.r-1vuscfd.r-1dhvaqw.r-1fneopy.r-o7ynqc.r-6416eg.r-lrvibr'));
       tweetbtnclick.click(); 

    }
    catch(err){
        console.log(err);
    }

})();