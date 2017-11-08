/**
 * @file StatisticConst.jsx
 * @desc 日志埋点静态文件
 * @author jinjiaxing
 * @data 2017/09/22
 */

const statisticConst = {};

/**停车助手-未停车**/
// 页面访问量
statisticConst.ParkaideNPG_show = 'ParkaideNPG.show';
// 周边停车场推荐-展现量
statisticConst.ParkaideNPG_recomShow= 'ParkaideNPG.recomShow';
// 周边停车场推荐-点击量
statisticConst.ParkaideNPG_recomClick = 'ParkaideNPG.recomClick';
// 周边停车场推荐-导航点击量
statisticConst.ParkaideNPG_navClick = 'ParkaideNPG.navClick';
// 记录停车位置
statisticConst.ParkaideNPG_rplClick = 'ParkaideNPG.rplClick';

/**选择停车位置**/
// 页面访问量
statisticConst.ParkaideCPL_show = 'ParkaideCPL.show';
// 底图刷新量
statisticConst.ParkaideCPL_RMshow = 'ParkaideCPL.RMshow';
// 选择停车位置按钮点击量
statisticConst.ParkaideCPL_SubmitClick = 'ParkaideCPL.SubmitClick';

/**停车场状态上报**/
// 页面访问量
statisticConst.ParkstatusreportPG_show = 'ParkstatusreportPG.show';
// 提交按钮点击
statisticConst.ParkstatusreportPG_submit = 'ParkstatusreportPG.Submit';

/**记录停车位置**/
// 页面访问量
statisticConst.ParkaideSub_show = 'ParkaideSub.show';
// 记录按钮点击量
statisticConst.ParkaideSub_subClick = 'ParkaideSub.subClick';

/**停车助手-已停车**/
// 页面访问量
statisticConst.ParkaidePG_show = 'ParkaidePG.show';
// 修改位置点击量
statisticConst.ParkaidePG_relClick = 'ParkaidePG.relClick';
// 修改时间点击量
statisticConst.ParkaidePG_retClick = 'ParkaidePG.retClick';
// 离开停车场点击量
statisticConst.ParkaidePG_leaClick = 'ParkaidePG.leaClick';
// 停车历史点击量
statisticConst.ParkaidePG_hisClick = 'ParkaidePG.hisClick';
// 车位状态上报点击量
statisticConst.ParkaidePG_corClick = 'ParkaidePG.corClick';

/**停车历史记录**/
// 页面访问量
statisticConst.ParkaideHis_show = 'ParkaideHis.show';
// 页面点击量
statisticConst.ParkaideHis_Click = 'ParkaideHis.Click';

module.exports = statisticConst;
