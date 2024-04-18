"use strict";

const data = [
    { adTitle: "Car for Sale", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut sem viverra aliquet eget sit.", contact: "john@example.com" },
    { adTitle: "Selling my Algebra Book", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut sem viverra aliquet eget sit.", contact: "mary@example.com" },
    { adTitle: "GPU", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut sem viverra aliquet eget sit.", contact: "george@example.com" },
    { adTitle: "Computer for sale", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut sem viverra aliquet eget sit.", contact: "james@example.com" },
    { adTitle: "Car for Sale", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut sem viverra aliquet eget sit.", contact: "john@example.com" },
    { adTitle: "Selling my Algebra Book", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut sem viverra aliquet eget sit.", contact: "mary@example.com" },
    { adTitle: "GPU", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut sem viverra aliquet eget sit.", contact: "george@example.com" },
    { adTitle: "Computer for sale", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut sem viverra aliquet eget sit.", contact: "james@example.com" },
    { adTitle: "Car for Sale", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut sem viverra aliquet eget sit.", contact: "john@example.com" },
    { adTitle: "Selling my Algebra Book", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut sem viverra aliquet eget sit.", contact: "mary@example.com" },
    { adTitle: "GPU", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut sem viverra aliquet eget sit.", contact: "george@example.com" },
    { adTitle: "Computer for sale", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut sem viverra aliquet eget sit.", contact: "james@example.com" },    
];

function showAd(html){
    
    const ad = document.createElement("ad");

    ad.innerHTML = html.trim();

    return ad.content.firstElementChild;
}






        function elementFromHtml(html){
            const template = document.createElement("template");

            template.innerHTML = html.trim();

            return template.content.firstElementChild;

        }

        const adPlace = document.getElementById("adsPlacement");
        let _title = "Ad Title";
        const myAd = elementFromHtml(`
        <div class="col">
          <div class="card shadow-sm">
            <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Ad Photo</text></svg>
            <div class="card-body">
              <h5 class="card-title">${_title}</h5>
              <p class="card-text">This is the first advertisement.</p>
              <p class="card-text" onclick="alert('Contact: contact5@example.com')">Contact: ***</p>
              <div class="d-flex justify-content-between align-items-center">
              </div>
            </div>
            <div class="card-footer text-center">
              <button class="btn btn-info" onclick="alert('Contact: contact5@example.com')">Details</button>
            </div>
          </div>
        </div>
        `);

        const myAd2 = elementFromHtml(`
        <div class="col">
          <div class="card shadow-sm">
            <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Ad Photo</text></svg>
            <div class="card-body">
              <h5 class="card-title">Ad 7</h5>
              <p class="card-text">This is the seventh advertisement.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary" onclick="alert('Contact: contact5@example.com')">Details</button>
                </div>
                <small class="text-body-secondary">Contact: ***</small>
              </div>
            </div>
          </div>
        </div>
        `);

    
    //    document.body.appendChild(myAd2)
     //   adPlace.appendChild(myAd2)
        adPlace.appendChild(myAd)


        data.forEach((ad)=> {
            const advert = document.createElement("advert");
        
            adPlace.appendChild(myAd2);
        })