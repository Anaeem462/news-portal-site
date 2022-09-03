

const fetchfunc = async () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`
    const response =await fetch(url);
    const data = await response.json();
    const objdata = data.data.news_category;
    // console.log(objdata)
    categories(objdata);
}

fetchfunc();



const categories = (element) => {
    // console.log(element)
    const category = document.getElementById("category");

    element.forEach(names => {
        const div = document.createElement("div");
        div.classList.add("col");
        div.classList.add("py-4")
        div.classList.add("border");
       
 div.innerHTML = `    
     <a class="p-2 catagories" style="text-decoration:none; color:gray">
     ${names.category_name} <span class="d-none idnum">${names.category_id}</span></a>
    `
        category.appendChild(div)
    })
   

    const idname = document.getElementsByClassName("catagories");
    for (const catagory of idname) {
        catagory.addEventListener("click", function () {
            
            const catagoryName = document.getElementById("news-name");
            catagoryName.innerText = catagory.innerText;
            const id = catagory.children[0];
            fetchById(id.innerText);
                
        })}

};







// news section
const fetchById = (id="01") => {
    fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
    .then(res => res.json())
    .then(data => categoriesById(data.data))
}

 fetchById()
    
      
        const categoriesById = (element) => {
            // console.log(element)
            const newscategory = document.getElementById("news");
            newscategory.innerHTML = "";
            let sum = []
            let counter = 0;
        
            element.forEach(idnum => {
              sum.push(idnum.total_view)
             const div = document.createElement("div")
                div.classList.add("mb-5");
                div.classList.add("mt-5");
                div.classList.add("bg-white");
                div.classList.add("p-4");
                div.classList.add("rounded");
                counter += 1;
                div.innerHTML = `
    <div class="row g-0">

         <div class="col-md-4">
            <img src="${idnum.thumbnail_url}" class="img-fluid w-100 h-100" alt="...">
         </div>
         
        <div class="card-body col-md-8 row align-items-end ms-2 ">
    
            <div class="mb-5">
                <h4 class="card-title fw-bold mb-5">${idnum.title ? idnum.title : "Not Found"}</h4>
                <p class="card-text">${idnum.details.slice(0, 301)} </p>
                <p class="card-text">${idnum.details.slice(302, 450)} .... </p>
           </div>
                
            <div class="d-flex mt-4 justify-content-between align-items-center">
                <div class="d-flex">
              
                     <img src="${idnum.author.img ? idnum.author.img : "Not found"}" class="rounded-circle me-4" style="width:85px;" alt="">
                    
                    <div>
                        <h5>${idnum.author.name ? idnum.author.name : "Not found"}</h5>
                        <p>${idnum.author.published_date ? idnum.author.published_date : "Not Found"}</p>
                    </div>
                </div>

                   <span> <i class="fa-solid fa-eye"></i> ${idnum.total_view ? idnum.total_view: "Not found"}</span>
                <div class="me-4">
                   <i class="fa-solid fa-star text-warning "></i>
                   <i class="fa-solid fa-star text-warning"></i>
                   <i class="fa-solid fa-star text-warning "></i>
                   <i class="fa-regular fa-star text-warning"></i>
                   <i class="fa-regular fa-star text-warning "></i>
                </div> 

    <!-- Button trigger modal -->
<button type="button" onclick='modal("${idnum._id}")' class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
<i class="fa-solid fa-arrow-right fs-1 fw-400"></i>
</button>
  
        </div>
        </div>
    </div>  `
            newscategory.appendChild(div);
            })

          
            const sortsum = [...sum.sort(function (a, b) { return b - a })];
        
         const newCounter = document.getElementById("news-count");
            newCounter.innerText = counter;   
            
           
           
};
       




// //modal section
// const modal = (id) => {
//     console.log(id)
//     fetch(`https://openapi.programming-hero.com/api/news/${id}`)
//         .then(res => res.json())
//         .then(data => modalsById(data.data))


//         const modalsById = (elements) => {
//             console.log(elements)
//             const modals= document.getElementById("modals")
          
//                 // console.log(modalId)
                
//                 modals.innerHTML = `
               

// <!-- Modal -->
// <div class="modal fade" id="myModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">

//   <div class="modal-dialog">

//     <div class="modal-content">

//       <div class="modal-header">

//         <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>

//         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//       </div>
//       <div class="modal-body">
//         ...
//       </div>
//       <div class="modal-footer">
//         <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//         <button type="button" class="btn btn-primary">Save changes</button>
//       </div>
//     </div>
//   </div>
// </div>`
//  }}


    