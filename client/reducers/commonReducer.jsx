/**
 * @file commonReducer.jsx
 * @desc 全局Reducer
 * @author jinjiaxing
 * @data 2017/05/25
 */

import commonActionName from '../common/constant/CommonActionName.jsx'
import Const from '../common/constant/Constant.jsx'

const commonInitialState = {
    // 是否获得NA参数的标志
    isGetNativeInfo:false
};

const commonReducer = (state=commonInitialState, action) => {
    switch (action.type) {
        case commonActionName.UPDATE_GETNATIVEINFO: {
            let isGetNativeInfo = action.isGetNativeInfo;
            console.log('action.isGetNativeInfo=',action.isGetNativeInfo);
            return Object.assign({}, state,
                {
                    isGetNativeInfo: isGetNativeInfo
                });
        }
        default:
            return state;
    }
};

export default commonReducer;
