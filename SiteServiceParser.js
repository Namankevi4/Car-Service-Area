var request = require('request');
var cheerio = require('cheerio');
var mass = [];
var ServiceMass = [];
exports.parse = function parse(fn) {
    request('http://orgpage.by/belarus/%D0%B0%D0%B2%D1%82%D0%BE%D1%81%D0%B5%D1%80%D0%B2%D0%B8%D1%81%D1%8B/', function(error, response, html) {
        if (!error && response.statusCode == 200) {
           mass = [];
           ServiceMass = [];
            var $ = cheerio.load(html);

            $('#main_div > div.main > div.wrapper > div.main_left > div.r_firms.nomargin > div.firm').each(function(i, element) {
                var a = $(this).prev();
                var link = a.children('.name').attr('href');
                mass.push(link);
            });
            var counter = 0;
            var links = [];
            for (var i = 0; i < mass.length; i++) {
                if (mass[i] !== undefined) {
                    links.push(mass[i]);
                }
            }
            var l = links.length;
            var n = 0;
            function send() {
               request(links[n], function(error, response, html) {
                    var $ = cheerio.load(html);
                    
                    var service = {};
                    // name
                    service.name = $('#wrap > div:nth-child(2) > h1').text();
                    // address
                    var l = $('#address > b').children().length;                   
                    service.address = [];
                    for(var i=1; i <= l; i++)
                    {
                       service.address.push($('#address > b > span:nth-child(' + i + ')').text()); 
                    }
                    // workinghours
                    service.workinghours = $('#workinghours').text();
                    // email
                    service.email = $('#email > a').text();
                    //site
                    var site = $('#list_sites > div').text();
                    site = site.match('/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/');
                    // description
                    var description =  $('#description').text();
                    service.description = description.replace(/^\s+/, "").replace(/\s+$/, "");
                    // production
                    var production = $('#production').text();
                    service.production = production.replace(/^\s+/, "").replace(/\s+$/, "");
                    // info
                    var info = $('#gen-info').text();
                    service.info = info.replace(/^\s+/, "").replace(/\s+$/, "");
                    
                    
                    ServiceMass.push(service);
                    counter++;
                    if (counter === links.length) {
                        fn(ServiceMass);
                    }
                });
                n++; 
                if(n<l){
                    setTimeout(send,1000);
                }
            }
            send();
            
        }
        else fn(error);
    });
    
}

