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
      }
      default:
        return { ...state };
    }
   
}

export default BTGioHangReducer;