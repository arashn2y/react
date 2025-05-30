const fetchData = () => {
  const url = "https://dummyjson.com/products";
  const promise = fetch(url);
  promise
    .then(response => {
      console.log(promise);
      const parsedResponse = response.json();
      parsedResponse.then(data => console.log(data.products)).catch(error => console.log(error));
    })
    .catch(error => console.log(error));
};

const productDiv = document.getElementById("product");
const h1 = document.getElementById("title");

// console.log(document.body);

const AsyncFetchData = async () => {
  const url = "https://dummyjson.com/products";
  try {
    const response = await fetch(url);
    console.log(response);
    const data = await response.json();
    console.log(data.limit);
  } catch (error) {
    console.log(error);
  }
};

const FetchDataOfFirstProduct = async () => {
  const url = "https://dummyjson.com/products/10";
  try {
    const response = await fetch(url);
    console.log(response);
    const data = await response.json();
    console.log(data);
    const { title, images } = data;
    h1.textContent = title;
    images.forEach(image => {
      const img = document.createElement("img");
      img.src = image;
      img.alt = title;
      productDiv.appendChild(img);
    });
  } catch (error) {
    console.log(error);
  }
};

FetchDataOfFirstProduct();

const createProduct = async product => {
  const url = "https://dummyjson.com/products/add";
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(product),
    headers: {
      "Content-Type": "application/json"
    }
  });
  const { status } = response;
  if (status === 201) {
    const data = await response.json();
    console.log(data);
  } else {
    console.log("Error");
  }
};

const updateProduct = async (id, product) => {
  "";
  "https://dummyjson.com/products/" + id;
  const url = `https://dummyjson.com/products/${id}`;
  const response = await fetch(url, {
    method: "PUT",
    body: JSON.stringify(product),
    headers: {
      "Content-Type": "application/json"
    }
  });
  const status = response.status;
  if (status === 200) {
    const data = await response.json();
    console.log(data);
  } else {
    console.log("Error");
  }
};

const deleteProduct = async id => {
  const url = `https://dummyjson.com/products/${id}`;
  const response = await fetch(url, {
    method: "DELETE"
  });
  const status = response.status;
  if (status === 200) {
    console.log("Product deleted");
  } else {
    console.log("Error");
  }
};

// fetchData();
// AsyncFetchData();
createProduct({ title: "test", price: 100 });
updateProduct(1, { name: "test", title: "Iphone 14", price: 1000000 });
// deleteProduct(1);
