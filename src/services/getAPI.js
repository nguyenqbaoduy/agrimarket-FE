const api_url = "http://localhost:3000";
function setCookie(name, value) {
  document.cookie = name + "=" + value + "; path=/";
}
function deleteCookie(name) {
  document.cookie = name + '=; expires=Thu, 01 Jan 1 00:00:00 UTC; path=/;';
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
export async function authentication(authorization) {
  const headers = new Headers();
  headers.append('authorization', authorization);
  const requestOptions = {
    method: 'GET',
    headers: headers,
  };
  const response = await fetch(api_url + '/authentication', requestOptions);
  if (response.status === 200) {
    var data = await response.json();
    return {
      fullname: data.FullName,
      status: response.status,
      role: data.Role
    }
  } else {
    const renewToken = await fetch(api_url + '/refresh_access_token', requestOptions);
    if (renewToken.status === 200) {
      var newToken = await renewToken.json();
      setCookie('accessToken',newToken)
      authentication(newToken);
    }
    else{
      return {status: renewToken.status}
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