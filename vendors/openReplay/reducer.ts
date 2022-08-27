// Libraries
import Tracker, { Options } from "@openreplay/tracker";
import trackerAssist from "@openreplay/tracker-assist";
import { v4 as uuidV4 } from "uuid";

export interface IOpenReplayConfig extends Options {
  projectKey: string;
}

export interface IPayload {
  name: string;
  data: any;
}

export interface IOpenReplayAction {
  type: string;
  payload?: IPayload;
}

const userId = uuidV4();

const newTracker = (config: IOpenReplayConfig) => {
  const tracker = new Tracker(config);
  tracker.setUserID(userId);
  tracker.use(
    trackerAssist({
      callConfirm: {
        text: "Our support team wants to help you",
        confirmBtn: {
          innerHTML: "👍 Accept",
        },
        declineBtn: {
          innerHTML: "❌ Not at this moment",
        },
      },
      controlConfirm: {
        text: "Would you mind letting us control your application?",
        confirmBtn: {
          innerHTML: "👍 Accept",
        },
        declineBtn: {
          innerHTML: "❌ Not at this moment",
        },
      },
    })
  );
  return tracker;
};

const openReplayReducer = (state: any, action: IOpenReplayAction) => {
  switch (action.type) {
    case "init": {
      if (!state.tracker) {
        return { ...state, tracker: newTracker(state.config) };
      }
      return state;
    }
    case "start": {
      state.tracker.start();
      return state;
    }
    case "logEvent": {
      state.tracker?.event(action.payload?.name, action.payload?.data);
      return state;
    }
    case "logIssue": {
      state.tracker?.issue(action.payload?.name, action.payload?.data);
      return state;
    }
  }
};

export default openReplayReducer;
