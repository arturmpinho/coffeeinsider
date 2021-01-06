const apiKey = "Jxt0w4CNFEgH6AGwj6Rdc6VhMU6UGphm"

let url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=coffee&api-key=${apiKey}`;

$.ajax({
    url: url,
    method: "GET",
}).done(function(result){

    for (let i = 0; i<result.response.docs.length; i++) {
        let div = document.getElementById("news");
        div.innerHTML += `  <div class="col-md-6 col-lg-4">
                                <div class="card bg-transparent">
                                    <img src="https://static01.nyt.com/${result.response.docs[i].multimedia[32].url}" class="card-img-top" alt="News thumbnail">
                                    <div class="card-body">
                                    <h2 class="card-title card-title-news mb-5">${result.response.docs[i].abstract}</h2>
                                    <p class="card-text card-text-news mb-3">${result.response.docs[i].lead_paragraph}</p>
                                    <p class="news-date">${result.response.docs[i].pub_date}</p>
                                    <a href="${result.response.docs[i].web_url}" target="_blank" class="btn ci-btns mb-5">Check this article</a>
                                    </div>
                                </div>
                            </div>`
        }
}).fail(function(err){
});