const token = "c7a1b596-f72f-11ed-82fc-92443ce24152";
const province = "https://dev-online-gateway.ghn.vn/shiip/public-api/master-data/province"
const district = "https://dev-online-gateway.ghn.vn/shiip/public-api/master-data/district?province_id="
const ward = "https://dev-online-gateway.ghn.vn/shiip/public-api/master-data/ward?district_id="
const transport = "https://dev-online-gateway.ghn.vn/shiip/public-api/v2/shipping-order/available-services"
export async function getProvince() {
    const response = await fetch(province, {
        method: "GET",
        headers: {
            'token': token
        },
    });
    return response.json();
}
export async function getDistrict(provinceID) {
    const response = await fetch(district+provinceID, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            'token': token
        },
    });
    const data = response.json()
    return data;
}
export async function getWard(districtID) {
    const response = await fetch(ward+districtID, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            'token': token
        },
    });
    return response.json();
}

export async function getTransports(to_districtsId) {
    const data = {
        'shop_id': 124245,
        'from_district': 1530, //Liên Chiểu, Đà Nẵng
        'to_district' : parseInt(to_districtsId)
    }
    const response = await fetch(transport, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            'token': token
        },
        body: JSON.stringify(data),
    });
    return response.json();
}