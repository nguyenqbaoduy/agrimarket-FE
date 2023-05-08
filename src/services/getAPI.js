const api_url = "http://localhost:3000";
export async function getAllProduct() {
    const response = await fetch(api_url + '/product/all?');
    var data =  await response.json();
    return data.result;
};
export async function getAllCategory() {
    const response = await fetch(api_url + '/category/all?');
    var data =  await response.json();
    return data.result;
};
// async function searchByNameProduct(productName){
//     const url = `/product/search?ProductName=${productName}`;
//     const response = await fetch(api_url + url);
//     var data =  await response.json();
//     return data.result;
// }
export async function getDetailProduct(productId){
    const url = `/product/detail/${productId}`;
    const response = await fetch(api_url + url);
    var data =  await response.json();
    return data.product;
}