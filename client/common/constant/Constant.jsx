/**
 * @file Constant.jsx
 * @desc 常量
 * @author jinjiaxing
 * @data 2017/07/31
 */
import Service from '../../service/Service.jsx';

const Const = {};
Const.DEBUG = (process.env.NODE_ENV === 'dev');

// 开发机环境
if (process.env.NODE_ENV === 'dev') {
    // //cp01-dev-liujunwei04.epc.baidu.com:8081
    Const.server = '//cp01-rdqa-dev387-shiwenli01.epc.baidu.com:8191';//cp01-rdqa-dev387-shiwenli01.epc.baidu.com:8191';
}
// QA环境
else if (process.env.NODE_ENV === 'test') {
    Const.server = '//cp01-qa-bu-qa25-07.cp01.baidu.com:8086';//10.99.33.40:8086
}
// 线上环境
else {
    Const.server = '//oil.baidu.com';
}

/**for pagehome 停车助手首页**/
// 道路预警信息landing页详情接口
Const.req_parkassistant_getlocation = '/poi/parkassistant/getlocation';

/**for pageselparking 选择停车场**/
Const.req_parkassistant_record = '/poi/parkassistant/record';

// 修改停车记录位置
Const.req_parkassistant_updaterecord = '/poi/parkassistant/updaterecord';

// 登录判断
Const.req_parkassistant_login = '/poi/parkassistant/login';

// 获取当前位置停车难度
Const.req_parkassistant_parkprediction = '/poi/parkassistant/parkprediction';

// 获取用户的停车记录列表
Const.req_parkassistant_historyRecordList = '/poi/parkassistant/recordlist';

// 新增停车反馈
Const.req_parkrecord_insertrecord = '/poi/parkrecord/insertparkrecord';
// 更新停车反馈
Const.req_parkrecord_updaterecord = '/poi/parkrecord/updateparkrecord';

// 获取停车记录详细信息
Const.req_parkassistant_getrecord = '/poi/parkassistant/getrecord';

// 修改停车记录日期
Const.req_parkassistant_updaterecorddate = '/poi/parkassistant/updaterecorddate';

// 内部版本更新时间
Const.internalVersion = '2017-10-18';

/**open API**/

// na和url参数
Const.nativeInfo = {};
// 打点参数
Const.statisticalInfo = {};

// TODO begin
// if (Const.DEBUG) {
//     Object.defineProperty(navigator, "userAgent", {
//         get: function() {
//             return "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3 like Mac OS X) baidumap_ AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13E234 Safari/601.1";
//         }
//     });
//     Const.nativeInfo = {
//         b: "(12947217,4844342,12948947,4845880)",
//         bc: "131",
//         bduid: "tPPc%3DWaDtPRC5B2h-",
//         c: "131",
//         channel: "baidu",
//         co: "460%3A00",
//         ctm: "1504158667.404000",
//         cuid: "C0FB5E6FBBF9B215497AB01990EB91A0%7C324327160526253",
//         dpi: "%28387%2C387%29",
//         isart: "1",
//         lat: "4845112.00",
//         lng: "12948083.00",
//         loc: "(12948083,4845112)",
//         mb: "SM-N9008S",
//         net: "1",
//         oem: "baidu",
//         os: "Android21",
//         phonebrand: "samsung",
//         resid: "01",
//         screen: "%281080%2C1920%29",
//         sinan: "nPdrp0DgpJKc5IC7n17T-8IuF",
//         sv: "9.8.0",
//         ver: "1",
//         from:'xiaodu',
//         uid: 47399717
//     }
//
//     Service.setRequestPara(Const.nativeInfo);
// }
// TODO end

export default Const;
