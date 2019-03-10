import reduxUtil from '../common/reduxUtil';

const UiName = ["chooseAll", "choosePhysical", "chooseVirtual", "searchSource",
"addSource", "cancelChange", "deleteSource", "searchComputer","addHistory"];
const XhrName = ["getAllComputers"];
export const UiAct = reduxUtil.generateActions(UiName);
export const XhrAct = reduxUtil.generateActions(XhrName);
