var url = "https://api.openbrewerydb.org/breweries";
var bodyy = document.querySelector("body");
async function brewery() {
  try {
    var response = await fetch(url);
    var result = await response.json();
    console.log(result);
    var heading = document.createElement("div");
    heading.classList.add("heading");
    heading.innerHTML = "<h1>Brewery search</h1><label>site</label>";
    bodyy.appendChild(heading);
    var searchDiv = document.createElement("div");
    searchDiv.classList.add("main-container");
    var input = (searchDiv.innerHTML =
      "<div class='search'><input onkeyup='search()' id='search' type='text' placeholder='Search Brewery Company'></div>");
    bodyy.appendChild(searchDiv);
    for (var i = 0; i < result.length; i++) {
      var mainDiv = document.createElement("div");
      mainDiv.classList.add("container");
      mainDiv.innerHTML = `    
            <div class="card">
                  <div class="row">
                      <div class="col-md-3">
                          <img class="imgs" src="https://www.shutterstock.com/image-vector/brewing-best-beer-vintage-logo-260nw-1688905417.jpg" alt="BREWERY">
                      </div>
                      <div class="col-md-9">
                              <div class="card-body bg-danger" id="card-body">
                                    <h3>${result[i].name}</h3>
                                    <ol>
                                          <p class="card-text">Brewery Type : ${result[i].brewery_type}</p>
                                          <p class="card-text">Country : ${result[i].country}</p>
                                          <a class="card-text " href='${result[i].website_url}'>${result[i].website_url}</a>
                                          <p class="card-text">Phone : ${result[i].phone}</p>
                                    </ol>
                              </div>
                      </div>
                  </div>
            </div>`;
      searchDiv.append(mainDiv);
    }
  } catch (err) {
    console.log(err);
  }
}
brewery();

var search = () => {
  var values = document.querySelector("input").value.toUpperCase(); //coverting lowercase letter into uppercase to check with companyname
  var allContainers = document.querySelectorAll(".container"); // get all containers for remove the not maching containers
  var companyname = document.getElementsByTagName("h3"); // to get companyname
  for (var i = 0; i < companyname.length; i++) {   // for loop for check company name one by one.
    var match = companyname[i].outerText;          //.outerText for to take name inside html collections
     //converting Companyname into uppercase , .indexof check the string index matching with match, if matches return true(1) not matches return false(0)
    if (match.toUpperCase().indexOf(values) > -1) {    
     
      allContainers[i].style.display = "";    //condition satisfied container remains
    } else {
      allContainers[i].style.display = "none"; // not satisfied container hidden
    }
  }
};
