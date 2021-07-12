const stateGH = {
    gH: [{
        ma:1 ,
        ten: 'MĐ',
        hAnh: './img/applephone.jpg',
        sl: 1,
        gia: 1000
    }]
}

const BTGioHangReducer = (state = stateGH,action) => {
    return {...state}
}

export default BTGioHangReducer;