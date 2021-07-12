const stateGH = {
    gH: []
}

const BTGioHangReducer = (state = stateGH,action) => {
    switch (action.type) {
      case "THEM_SP": {
          let index = state.gH.findIndex(spGH => spGH.ma === action.spGH.ma);
          if(index !== -1) {
            state.gH[index].sl += 1;
          }
          else {
              state.gH.push(action.spGH)
          }
        //   setStae
        state.gH = [...state.gH];
          return {...state};
      };
      case "XOA_SP": {
        console.log(action);
        let gioHangMoi =  [...state.gH];
        // Tìm ptu cần xóa
        let index = gioHangMoi.findIndex(
          (spGH) => spGH.ma === action.maSP
        );
        if(index !== -1) {
          gioHangMoi.splice(index,1);

        }
        // setState
        state.gH = gioHangMoi;
        return {...state}
      };
      default:
        return { ...state };
    }
   
}

export default BTGioHangReducer;