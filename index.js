const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(port, function () {

    console.log("Listening to Port " + port);
});

app.get('/news', (req, res) => {

    
    
   
	
	var url = req.query.url
	
   // const url = "https://www.hirunews.lk/313146/යුක්රේනයේ-න්‍යෂ්ටික-බලාගාරය-අවට-ගැටුම්-ගැන-ජගත්-මහලේකම්-කළකිරීමෙන්";
    
	    axios.get(url)
        .then(response => {

           
	    results = [];
            const $ = cheerio.load(response.data);
               $('.row .main-article-section ').each((i, element) => {
            
            
            const img = $(element).find('img').attr('data-src');
            const del = $('script').remove();
            const news = $(element,'div.article-phara').text().replace('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n','').replace('\n\n\n\n\n\n','').replace('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n','').replace('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n','').replace('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n','').replace('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n','').replace('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n','').replace('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n','').replace('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n','').replace('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n','').replace('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n','').replace('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n','').replace('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n','').replace('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n','').replace('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n','').replace('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n','').replace('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n','').replace('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n','').replace('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n','').replace('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n','').replace('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n','').replace('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n','').replace('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n','').replace('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n','').replace('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n','').replace('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n','').replace('\n\n\n\n\n\n\n',' ');
            
             $('center').each((i, element) => {
            
            
            const title = $(element).find('h1.main-tittle').text();
            const date = $(element).find('p').text();
            
            
            
            results.push({ img , date , title , news })
            
           });
           
	       });
           res.json({ news: results });
	    

            

});

});
    
    

app.get('/hirunews/news', (req, res) => {

    const url = "http://www.hirunews.lk/sinhala/local-news.php";
    axios.get(url)
        .then(response => {

            results = [];
            const $ = cheerio.load(response.data, {decodeEntities: false});


            $('div.rp-ltsbx div.rp-mian div.lts-cntp').find('a').each((i, elem) => {
                

                let news = {
                    url : elem.attribs.href,
                    text: elem.children[0].data
                }

                results.push(news)

            });
            res.send({data: results});
            
        })
        .catch(err => {
            console.log(err);
        })
});
