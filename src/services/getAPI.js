export const api_url = "http://localhost:3000";
function setCookie(name, value) {
  document.cookie = name + "=" + value + "; path=/";
}
function removeCookie(name) {
  document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
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
  return {
    data: data,
    status: response.status,
  };
};
export async function authorization(accessToken) {
  const headers = new Headers();
  headers.append('authorization', accessToken);
  const requestOptions = {
    method: 'GET',
    headers: headers,
  };
  const response = await fetch(api_url + '/authorization', requestOptions);
  var data = await response.json();
  return {
    data: data,
    status: response.status,
  };
};

export async function authentication(accessToken, refreshToken) {
  const authHeader = new Headers();
  authHeader.append('authorization', accessToken);

  const authRequest = {
    method: 'GET',
    headers: authHeader,
  };

  const authResponse = await fetch(api_url + '/authentication', authRequest);

  if (authResponse.status === 200) {
    const data = await authResponse.json();
    // setCookie('accessToken', accessToken);
    return {
      fullname: data.data.FullName,
      status: authResponse.status,
      role: data.data.Role,
      accessToken: accessToken
    };
  } else if (authResponse.status === 401) {
    const refreshedAccessToken = await refreshAccessToken(refreshToken);
    if (refreshedAccessToken) {
      const retryAuthResponse = await authentication(refreshedAccessToken.accessToken, refreshToken);
      return retryAuthResponse;
    } else {
      // Xoá token
      removeCookie('accessToken', { path: "/" })
      removeCookie('refreshToken', { path: "/" })
      removeCookie('UserID', { path: "/" })
      return { status: authResponse.status };
    }
  } else {
    return { status: authResponse.status };
  }
}


async function refreshAccessToken(refreshToken) {
  const refreshHeader = new Headers();
  refreshHeader.append('authorization', refreshToken);

  const refreshRequest = {
    method: 'GET',
    headers: refreshHeader,
  };

  const refreshTokenResponse = await (fetch(api_url + '/refresh_access_token', refreshRequest));
  if (refreshTokenResponse.status === 401) {
    return null
  }
  else
    return refreshTokenResponse.json();
}


export async function getAllProduct() {
  const response = await fetch(api_url + '/product/all?');
  var data = await response.json();
  return {
    data: data.result,
    status: response.status
  };
};
export async function getFavorite(accessToken) {
  const headers = new Headers();
  headers.append('Authorization', accessToken);
  const requestOptions = {
    method: 'GET',
    headers: headers,
  };
  const response = await fetch(api_url + '/favorite', requestOptions);
  var data = await response.json();
  return data.result;
};
export async function getCatalog(categoryId) {
  const response = await fetch(api_url + `/product/category/${categoryId}`);
  var data = await response.json();
  return {
    data: data.result,
    status: response.status
  };
};
export async function searchProduct(search) {
  const response = await fetch(api_url + '/product/search/?ProductName=' + search)
  var data = await response.json();
  return data.result;

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
  const response = await fetch(api_url + '/cart/changeQuantity', {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      'Authorization': accessToken
    },
    body: JSON.stringify(data),
  });
  var result = await response.json()
  return result.result.SumPrice;
};
export async function deteleCartItem(accessToken, data) {
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
  return {
    data: data,
    status: response.status
  };
};
export async function getProductOfSeller(userID) {
  const headers = new Headers();
  headers.append('seller', userID);
  const requestOptions = {
    method: 'GET',
    headers: headers,
  };
  const response = await fetch(api_url + '/seller/product', requestOptions);
  var data = await response.json();
  return data.result;
};
export async function addProduct(accessToken, data) {
  const response = await fetch(api_url + '/product/add', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'Authorization': accessToken
    },
    body: JSON.stringify(data),
  });
  return response.status;
};
export async function addFavorite(accessToken, data) {
  const response = await fetch(api_url + '/product/add', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'Authorization': accessToken
    },
    body: JSON.stringify(data),
  });
  return response.status;
};
export async function deteleFavorite(accessToken, data) {
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
export async function deleteProduct(data) {
  var productId = { ProductID: data.ProductID };
  var filename = { FileName: data.FileName };

  console.log(productId)
  const removeProductResponse = await fetch(api_url + '/product/remove', {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productId),
  });
  const RemoveImageresponse = await fetch(api_url + '/deleteFile', {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(filename),
  });
  removeProductResponse.json();
  return removeProductResponse.result;
};
export async function changeActive(data) {
  const response = await fetch(api_url + '/product/change_active', {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.status;
};
export async function updateInfoProduct(accessToken,data) {
  console.log(JSON.stringify(data))
  const response = await fetch(api_url + '/product/update_info', {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      'Authorization': accessToken
    },
    body: JSON.stringify(data),
  });
  return response.status;
};
export async function createOrder(accessToken, data) {
  const response = await fetch(api_url + '/order/add', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'Authorization': accessToken
    },
    body: JSON.stringify(data),
  });
  return response.status;
};
export async function addOrderDetail(accessToken, data) {
  const response = await fetch(api_url + '/order/addDetail', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'Authorization': accessToken
    },
    body: JSON.stringify(data),
  });
  console.log(JSON.stringify(data));
  response.json()
  return response;
};