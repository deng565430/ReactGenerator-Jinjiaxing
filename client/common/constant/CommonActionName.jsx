/**
 * @file CommonActionName.jsx
 * @desc 全局Action Name
 * @author jinjiaxing
 * @data 2017/07/20
 */

let CommonActionName = {};

/**
 * for common
 */
CommonActionName.UPDATE_GETNATIVEINFO = 'UPDATE_GETNATIVEINFO';

/**
 * for pagehome 首页action
 */
// 更新停车助手首页
CommonActionName.UPDATE_PARKASSISTANT_GETLOCATION = 'UPDATE_PARKASSISTANT_GETLOCATION';
// 更新登录信息
CommonActionName.UPDATE_LOGINSTATUS = 'UPDATE_LOGINSTATUS';
// 更新当前位置停车难度
CommonActionName.UPDATE_PARKPREDICTION = 'UPDATE_PARKPREDICTION';

/**
 * for pageSelParking
 */
// 更新周边停车场数据
CommonActionName.UPDATE_PARKASSISTANT_PARKRECORDDATA = 'UPDATE_PARKASSISTANT_PARKRECORDDATA';
// 更新选择的停车场对象
CommonActionName.UPDATE_SELPARK_DATA = 'UPDATE_SELPARK_DATA';
// 设置用户移动地图的请求状态
CommonActionName.SET_FETCHING_STATUS = 'SET_FETCHING_STATUS';

/**
 * for pageRecordPosition
 */
// 记录停车位置
CommonActionName.UPDATE_RECORDPOSITION_DATA = 'UPDATE_RECORDPOSITION_DATA';

/**
 * for pageHistoryRecordAction
 */
// 停车历史记录
CommonActionName.UPDATE_HISTORY_RECORDLIST = 'UPDATE_HISTORY_RECORDLIST';

/**
 * for pageHistoryDetail
 */
// 停车历史详情页面
CommonActionName.UPDATE_HISTORY_DETAIL = 'UPDATE_HISTORY_DETAIL';

export default CommonActionName;
