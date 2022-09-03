
const fetchfunc = async() => {
    const url = `https://openapi.programming-hero.com/api/news/categories`
    const response =await fetch(url);
    const data = await response.json();
    const objdata = data.data.news_category;
    // console.log(objdata)
    categories(objdata);
}

fetchfunc("08");



const categories = (element) => {
    // console.log(element)
    const category = document.getElementById("category");

    element.forEach(names => {
        const div = document.createElement("div");
        div.classList.add("col")

    div.innerHTML = `    
     <div class="p-2 catagories")}">
     ${names.category_name} ${names.category_id}</div>
    `
        category.appendChild(div)
    })
    
};

        
    




// news section
const fetchById = (id) => {
    fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
    .then(res => res.json())
    .then(data => categoriesById(data.data))
}

fetchById("08")
    
      
        const categoriesById = (element) => {
            // console.log(element)
            const newscategory = document.getElementById("news");
            element.forEach(idnum => {
              
             const div = document.createElement("div")
                div.classList.add("mb-5");
                div.classList.add("mt-5");
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


    