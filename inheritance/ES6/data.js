var emp =[{"id":1,"first_name":"Ricard","last_name":"Gittings","email":"rgittings0@wikispaces.com"},
{"id":2,"first_name":"Bernadene","last_name":"Wyrall","email":"bwyrall1@china.com.cn"},
{"id":3,"first_name":"Yance","last_name":"Szymanski","email":"yszymanski2@state.gov"},
{"id":4,"first_name":"Sadie","last_name":"Verry","email":"sverry3@t.co"},
{"id":5,"first_name":"Waneta","last_name":"Jandac","email":"wjandac4@illinois.edu"},
{"id":6,"first_name":"Dani","last_name":"Josskoviz","email":"djosskoviz5@yolasite.com"},
{"id":7,"first_name":"Constantina","last_name":"Capinetti","email":"ccapinetti6@sphinn.com"},
{"id":8,"first_name":"Luise","last_name":"Duchateau","email":"lduchateau7@skyrock.com"},
{"id":9,"first_name":"Cassondra","last_name":"Sakins","email":"csakins8@amazon.co.uk"},
{"id":10,"first_name":"Sherrie","last_name":"Meekins","email":"smeekins9@census.gov"},
{"id":11,"first_name":"Marwin","last_name":"Bordiss","email":"mbordissa@adobe.com"},
{"id":12,"first_name":"Lynne","last_name":"Bevans","email":"lbevansb@free.fr"},
{"id":13,"first_name":"Morten","last_name":"Prozescky","email":"mprozesckyc@nytimes.com"},
{"id":14,"first_name":"Osbert","last_name":"Parradye","email":"oparradyed@bbc.co.uk"},
{"id":15,"first_name":"Noll","last_name":"Seniour","email":"nsenioure@woothemes.com"},
{"id":16,"first_name":"Brent","last_name":"Jantot","email":"bjantotf@facebook.com"},
{"id":17,"first_name":"Dorice","last_name":"Baser","email":"dbaserg@1und1.de"},
{"id":18,"first_name":"Herby","last_name":"Godart","email":"hgodarth@disqus.com"},
{"id":19,"first_name":"Itch","last_name":"Cecere","email":"icecerei@imdb.com"},
{"id":20,"first_name":"Nonah","last_name":"Quirk","email":"nquirkj@newyorker.com"},
{"id":21,"first_name":"Darb","last_name":"Truss","email":"dtrussk@last.fm"},
{"id":22,"first_name":"Murdock","last_name":"Koppke","email":"mkoppkel@pagesperso-orange.fr"},
{"id":23,"first_name":"Elsi","last_name":"Keniwell","email":"ekeniwellm@gravatar.com"},
{"id":24,"first_name":"Margit","last_name":"Measen","email":"mmeasenn@jimdo.com"},
{"id":25,"first_name":"Izzy","last_name":"MacCollom","email":"imaccollomo@dell.com"},
{"id":26,"first_name":"Rozelle","last_name":"Kapelhoff","email":"rkapelhoffp@free.fr"},
{"id":27,"first_name":"Rutherford","last_name":"Burkinshaw","email":"rburkinshawq@loc.gov"},
{"id":28,"first_name":"Cathe","last_name":"Kubek","email":"ckubekr@discuz.net"},
{"id":29,"first_name":"Niles","last_name":"Hurdis","email":"nhurdiss@4shared.com"},
{"id":30,"first_name":"Rori","last_name":"Rao","email":"rraot@cam.ac.uk"},
{"id":31,"first_name":"Opalina","last_name":"Parlett","email":"oparlettu@nba.com"},
{"id":32,"first_name":"Koenraad","last_name":"Bragge","email":"kbraggev@vinaora.com"},
{"id":33,"first_name":"Melissa","last_name":"Lowry","email":"mlowryw@businesswire.com"},
{"id":34,"first_name":"Evangelina","last_name":"Cleeves","email":"ecleevesx@google.nl"},
{"id":35,"first_name":"Wash","last_name":"Tees","email":"wteesy@msn.com"},
{"id":36,"first_name":"Odilia","last_name":"McKelvey","email":"omckelveyz@cmu.edu"},
{"id":37,"first_name":"Karoly","last_name":"Duchatel","email":"kduchatel10@opera.com"},
{"id":38,"first_name":"Olly","last_name":"Filliskirk","email":"ofilliskirk11@chicagotribune.com"},
{"id":39,"first_name":"Natal","last_name":"Suerz","email":"nsuerz12@nydailynews.com"},
{"id":40,"first_name":"Zack","last_name":"Linskey","email":"zlinskey13@reuters.com"},
{"id":41,"first_name":"Agnola","last_name":"Bindin","email":"abindin14@sitemeter.com"},
{"id":42,"first_name":"Lammond","last_name":"Speares","email":"lspeares15@sourceforge.net"},
{"id":43,"first_name":"Ivett","last_name":"Yashin","email":"iyashin16@senate.gov"},
{"id":44,"first_name":"Lin","last_name":"Reddie","email":"lreddie17@nifty.com"},
{"id":45,"first_name":"Guido","last_name":"Minshull","email":"gminshull18@europa.eu"},
{"id":46,"first_name":"Nert","last_name":"Lugg","email":"nlugg19@mayoclinic.com"},
{"id":47,"first_name":"Zara","last_name":"Koomar","email":"zkoomar1a@prweb.com"},
{"id":48,"first_name":"Toby","last_name":"Mithan","email":"tmithan1b@uiuc.edu"},
{"id":49,"first_name":"Maurits","last_name":"Ughini","email":"mughini1c@examiner.com"},
{"id":50,"first_name":"Tarrah","last_name":"Warters","email":"twarters1d@weather.com"}
];
let display=()=>{
    console.log("test case 123");
    rows="";
     for(let i=0; i<=emp.length-1; i++){
        rows =rows+
        `<tr>
            <td>${emp[i].id} </td>
            <td>${emp[i].first_name} </td>
            <td>${emp[i].last_name} </td>
            <td>${emp[1].email} </td>
        </tr>`
        
    }
    document.getElementById("sitara").innerHTML=rows;
}