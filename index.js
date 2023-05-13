// For clicking btn
const clickBtn = document.querySelector(".btn");

// for post details showing
const forPostsHead = document.querySelector("#posts-head");
const forPostsBody = document.querySelector("#posts-body");

// first api
function PromiseAPI1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch("https://dummyjson.com/posts")
        .then((response) => response.json())
        .then((data) => {
          const posts = data.posts;

          // table
          forPostsHead.innerHTML = `
      <tr>
         <th>Id</th>
         <th>User Id</th>
         <th>Title</th>      
         <th>Body</th>
      </tr>
    `;

          // set the table data
          posts.forEach((postsObj) => {
            let tr = document.createElement("tr");
            tr.innerHTML = `
                     <td>${postsObj.id}</td>
                     <td>${postsObj.userId}</td>
                     <td>${postsObj.title}</td>
                     <td>${postsObj.body}</td>
                  `;
            forPostsBody.appendChild(tr);
          });

          resolve(true);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 1000);
  });
}

// for products details showing
const forProductsHead = document.querySelector("#products-head");
const forProductsBody = document.querySelector("#products-body");

// second api
function PromiseAPI2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch("https://dummyjson.com/products")
        .then((response) => response.json())
        .then((data) => {
          //console.log(data);
          const products = data.products; // will store array of api in products array

          // define table
          forProductsHead.innerHTML = `
       <tr>
         <th>Id</th>
         <th>Title</th>
         <th>Description</th>
         <th>Price</th>
      </tr>
    `;
          // table data
          products.forEach((productsObj) => {
            let tr = document.createElement("tr");
            tr.innerHTML = `
              <td>${productsObj.id}</td>
              <td>${productsObj.title}</td>
              <td>${productsObj.description}</td>
              <td>${productsObj.price}</td>
            `;
            forProductsBody.appendChild(tr);
          });

          resolve(true);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 2000);
  });
}

// for todo details showing
const forTodoHead = document.querySelector("#todos-head");
const forTodoBody = document.querySelector("#todos-body");

// third api
function PromiseAPI3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch("https://dummyjson.com/todos")
        .then((response) => response.json())

        .then((data) => {
          const todos = data.todos;
          // table define
          forTodoHead.innerHTML = `
      <tr>
        <th>Id</th>
        <th>User Id</th>
        <th>Todo</th>
        <th>Completed</th>
      </tr>
    `;

          // table data
          todos.forEach((todoObj) => {
            let tr = document.createElement("tr");
            tr.innerHTML = `
        <td>${todoObj.id}</td>
        <td>${todoObj.userId}</td>
        <td>${todoObj.todo}</td>
        <td>${todoObj.completed}</td>
      `;
            forTodoBody.appendChild(tr);
          });
          resolve(true);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 3000);
  });
}

// click event set in btn
clickBtn.addEventListener("click", () => {
  PromiseAPI1()
    .then((result) => {
      if (result) {
        return PromiseAPI2();
      }
    })
    .then((result) => {
      if (result) {
        return PromiseAPI3();
      }
    })
    .catch((error) => console.log(error));
});
