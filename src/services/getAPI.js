const api_url = "http://localhost:3000";
function setCookie(name, value) {
  document.cookie = name + "=" + value + "; path=/";
}
export async function login(username, password) {
  const headers = new Headers();
  headers.append('UserName', username);
  headers.append('Password', password);

  const requestOptions = {
    method: 'GET',
    headers: headers,
  };
  const response = await fetch(api_url + '/login', requestOptions);
  var data = await response.json();
  return data;
};
export async function authentication(accessToken, refreshToken) {
  const headerA = new Headers();
  headerA.append('authorization', accessToken);
  const requestAuth = {
    method: 'GET',
    headers: headerA,
  };
  const response = await fetch(api_url + '/authentication', requestAuth);
  if (response.status === 200) {
    var data = await response.json();
    return {
      fullname: data.data.FullName,
      status: response.status,
      role: data.data.Role
    }
  } else {
    const headerR = new Headers();
    headerR.append('authorization', refreshToken);
    const requestRefreshToken = {
      method: 'GET',
      headers: headerR,
    };
    const renewToken = await fetch(api_url + '/refresh_access_token', requestRefreshToken);
    if (renewToken.status === 200) {
      var newToken = await renewToken.json();
      setCookie('accessToken', newToken)
      authentication(newToken);
    }
    else {
      return { status: renewToken.status }
    }
  };
}

export async function getAllProduct() {
  const response = await fetch(api_url + '/product/all?');
  var data = await response.json();
  return {
    data: data.result,
    status: response.status
  };
};
export async function getAllCategory() {
  const response = await fetch(api_url + '/category/all?');
  var data = await response.json();
  return data.result;
};
// async function searchByNameProduct(productName){
//     const url = `/product/search?ProductName=${productName}`;
//     const response = await fetch(api_url + url);
//     var data =  await response.json();
//     return data.result;
// }
export async function getDetailProduct(productId) {
  const url = `/product/detail/${productId}`;
  const response = await fetch(api_url + url);
  var data = await response.json();
  return {
    data: data,
    status: response.status
  };
}

export async function getCart(accessToken) {
  const headers = new Headers();
  headers.append('Authorization', accessToken);
  const requestOptions = {
    method: 'GET',
    headers: headers,
  };
  const response = await fetch(api_url + '/cart', requestOptions);
  var data = await response.json();
  return data.result;
};

export async function getCartDrawerContainer(accessToken) {
  const headers = new Headers();
  headers.append('Authorization', accessToken);
  const requestOptions = {
    method: 'GET',
    headers: headers,
  };
  const response = await fetch(api_url + '/cart_drawer_container', requestOptions);
  var data = await response.json();
  return data.result;
};
export async function addItemToCart(accessToken, data) {
  const response = await fetch(api_url + '/cart/add', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'Authorization': accessToken
    },
    body: JSON.stringify(data),
  });
  return response.status;
};
export async function changeQuantity(accessToken, data) {
  console.log(data)
  const response = await fetch(api_url + '/cart/changeQuantity', {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      'Authorization': accessToken
    },
    body: JSON.stringify(data),
  });
  return response.status;
};
export async function deteleCartItem(accessToken, data) {
  console.log(data)
  const response = await fetch(api_url + '/cart/remove', {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      'Authorization': accessToken
    },
    body: JSON.stringify(data),
  });
  return response.status;
};
export async function register(user) {
  const response = await fetch(api_url + '/register', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  var data = await response.json();
  return {data:data,
  status : response.status};
};