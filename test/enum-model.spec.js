import { expect, assert } from "chai";
import { describe, it } from "mocha";
import { EnumModel } from "../dist/index.js";

const Client = {
  AppIOS: "APP_IOS",
  AppAndroid: "APP_ANDROID",
  MiniProgramWeChat: "MINI_PROGRAM_WECHAT",
  MiniProgramTouTiao: "MINI_PROGRAM_TOUTIAO",
  MiniProgramXiaoHongShu: "MINI_PROGRAM_XIAOHONGSHU",
};

const clientEnumModel = new EnumModel();
clientEnumModel.addEnum(Client.AppIOS, "IOS应用", 0);
clientEnumModel.addEnum(Client.AppAndroid, "安卓应用", 1);
clientEnumModel.addEnum(Client.MiniProgramWeChat, "微信小程序", 2);
clientEnumModel.addEnum(Client.MiniProgramTouTiao, "头条小程序", 3);
clientEnumModel.addEnum(Client.MiniProgramXiaoHongShu, "小红书小程序", 4);

describe("clientEnumModel deepClone", () => {
  const clientEnumValues = clientEnumModel.getEnumValues();
  expect(clientEnumValues.length).to.equal(5);
  expect(clientEnumValues.includes(Client.AppIOS)).to.be.true;
  expect(clientEnumValues.includes(Client.AppAndroid)).to.be.true;
  expect(clientEnumValues.includes(Client.MiniProgramWeChat)).to.be.true;
});
