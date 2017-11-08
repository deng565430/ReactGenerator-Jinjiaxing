/**
 * @file commonAction.jsx
 * @desc common action
 * @author jinjiaxing
 * @data 2017/08/23
 */
import Const from '../common/constant/Constant.jsx';
import commonActionName from '../common/constant/CommonActionName.jsx';

class commonAction extends Object {

    /**
     * 客户端打点（巴菲特&矩阵）
     * @param opt  {'da_src': 'Insurance.Information.Tel.Click','pid': 'PICC','couponId': 'xxx'}
     * 1.平台=Android & iOS
     * 2.客户端版本号=9.8.0（区分版本维度统计）
     * 3.cuid=唯一用户标识，用于精细化统计
     * 4.动作标识=代表该动作（某张卡片跳转,动作标识用于针对某类动作维度统计）
     * @returns {function()}
     */
    static submitStatisticalInfo(actionID, otherData, callBack) {
        return () => {
            var opt = opt || {};
            var urlOpts = Const.nativeInfo;
            opt['channel'] = urlOpts.channel ? urlOpts.channel : '';
            // cuid
            opt['cuid'] = urlOpts.cuid ? urlOpts.cuid : '';
            opt['fr'] = urlOpts.fr ? urlOpts.fr : '';
            // 平台
            opt['os'] = urlOpts.os ? urlOpts.os : '';
            // opt['t'] = Date.now();
            // 客户端版本号
            opt['sv'] = urlOpts.sv ? urlOpts.sv : '';
            // 动作标识
            opt['da_src'] = actionID ? actionID : '';
            // 日期
            opt['date'] = Date.now();

            if(actionID==='ParkaideNPG.recomShow') {
                opt['s'] = otherData['s'] ? otherData['s'] :'';
                console.log(' opt.s='+ opt['s']);
            }

            // from
            opt['from'] = urlOpts.from ? urlOpts.from : '';
            console.log(' urlOpts.from='+ urlOpts.from);
            var stats = 'https://client.map.baidu.com/insuranceWeb/img/transparent.gif?resid=01';
            for (var item in opt) {
                if (opt[item]) {
                    stats += '&' + item + '=' + opt[item];
                }
            }
            var image = new Image();
            image.src = stats;
            
            if (callBack && typeof callBack === 'function') {
                callBack();
            }
        };
    }

    static updateISfinishNativeInfo(data) {
        return {
            type:commonActionName.UPDATE_GETNATIVEINFO,
            isGetNativeInfo: data
        }
    }

}

export default commonAction;
